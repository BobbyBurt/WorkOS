/** @format */

import Plane from "./Plane";
import PlaneGeneration from "./PlaneGeneration";
import { planeGenSettings } from "./PlaneGenerationSettings";
import PlanePairDistances, { planePair } from "./PlanePairDistances";

/** Manages the array of planes.
 *
 * Checks for plane intersection each frame
 *
 * Does not control plane variables. Delegate to another class, this one will have functions for it to access */
export default class PlaneManager {
  /**
   *
   * @param scene
   * @param container to put plane objects into; Pass program's mainContainer
   */
  constructor(scene: Phaser.Scene, container: Phaser.GameObjects.Container) {
    this.scene = scene;
    this.programContainer = container;
    this.planePairDistances = new PlanePairDistances();
    this.array = new Array();

    this.createPlanes(99);

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    this.generation = new PlaneGeneration(scene, this);
    this.generation.startRound();
  }

  private scene: Phaser.Scene;
  public programContainer: Phaser.GameObjects.Container;

  private generation: PlaneGeneration;

  private array: Array<Plane>;
  private planePairDistances: PlanePairDistances;

  private selectedPlaneIndex: number | null;

  public genTimer!: Phaser.Time.TimerEvent;

  update() {
    this.planePairDistances.update();

    this.checkPairsForCollision();
  }

  /**  */
  public activatePlane(
    startPos: Phaser.Math.Vector2,
    endPos: Phaser.Math.Vector2,
    altitude: 0 | 1 | 2,
    duration: number
  ) {
    let plane = this.getInactivePlane();
    if (plane === undefined) {
      console.warn(`Plane array full!`);
      return;
    }
    plane.startRoute(startPos, endPos, duration);
    // plane.setAltitude(Phaser.Math.RND.pick([0, 1, 2]));
    plane.setAltitude(altitude);
    this.planePairDistances.addPlane(plane, this.array);
  }

  public changeSelectedPlaneAltitude(up: boolean) {
    if (this.selectedPlaneIndex == undefined) {
      return;
    }

    let currentAlt = this.array[this.selectedPlaneIndex].altitude;
    // if (currentAlt === 2 && up) {
    //   return;
    // } else if (currentAlt === 0 && !up) {
    //   return;
    // }
    // let newAlt = currentAlt + (up ? 1 : -1);
    let newAlt = 1;
    if (currentAlt == 1) {
      newAlt = 0;
    } else if (currentAlt == 0) {
      newAlt = 1;
    }

    this.planePairDistances.removePlane(
      this.array[this.selectedPlaneIndex],
      this.array
    );
    this.array[this.selectedPlaneIndex].setAltitude(newAlt as 0 | 1 | 2);
    this.planePairDistances.addPlane(
      this.array[this.selectedPlaneIndex],
      this.array
    );
  }

  private createPlanes(amount: number) {
    for (let i = 0; i < amount - 1; i++) {
      this.createPlane(i);
    }
  }

  /**
   *
   * @param index of PlaneManager array will this be?
   */
  private createPlane(index: number) {
    let plane = new Plane(this.scene, index, this.programContainer, 0, 0);
    // this.scene.add.existing(plane);
    // this.programContainer.add(plane);
    this.array.push(plane);
    // plane.setActive(false);

    plane.on("finished", () => {
      this.handleRouteEnd(plane);
    });
    plane.on("selected", () => {
      this.handleSelect(plane);
    });
  }

  private getInactivePlane(): Plane | undefined {
    let returnPlane: Plane | undefined = undefined;
    this.array.forEach((plane, index) => {
      if (!plane.active && !returnPlane) {
        returnPlane = plane;
      }
    });
    return returnPlane;
  }

  handleRouteEnd(plane: Plane) {
    plane.handleRouteEnd();

    if (this.selectedPlaneIndex === plane.managerIndex) {
      this.deselect();
    }

    this.planePairDistances.removePlane(plane, this.array);
  }

  private handleCrash(pair: planePair) {
    pair.planeA.handleCrash();
    pair.planeB.handleCrash();
    this.planePairDistances.removePlane(pair.planeA, this.array);
    this.planePairDistances.removePlane(pair.planeB, this.array);

    if (this.selectedPlaneIndex === pair.planeA.managerIndex) {
      this.deselect();
    }
    if (this.selectedPlaneIndex === pair.planeB.managerIndex) {
      this.deselect();
    }
  }

  private handleSelect(plane: Plane) {
    this.deselect();

    this.selectedPlaneIndex = plane.managerIndex;
    plane.selectIcon.setVisible(true);
  }

  private deselect() {
    if (this.selectedPlaneIndex != undefined) {
      this.array[this.selectedPlaneIndex!].selectIcon.setVisible(false);
    }
    this.selectedPlaneIndex = null;
  }

  // private startGeneationTimer() {
  //   this.genTimer = this.scene.time.addEvent({
  //     delay: 5000,
  //     loop: true,
  //     callback: () => {
  //       let coordinates = this.generateCoordinatePair();
  //       this.activatePlane(coordinates.startPos, coordinates.endPos);
  //       this.activatePlane(coordinates.startPos2, coordinates.endPos2);
  //     },
  //   });
  // }

  private checkPairsForCollision() {
    this.planePairDistances.array.forEach((pair) => {
      if (pair.distance !== undefined) {
        if (pair.distance < 15) {
          this.handleCrash(pair);
        }
      }
    });
  }
}
