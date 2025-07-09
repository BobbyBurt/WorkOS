/** @format */

import Plane from "./Plane";
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

    this.makeCircle();
    this.createPlanes(99);

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
  }

  private scene: Phaser.Scene;
  private programContainer: Phaser.GameObjects.Container;

  private circle: Phaser.Geom.Circle;

  private array: Array<Plane>;
  private planePairDistances: PlanePairDistances;

  private selectedPlaneIndex: number | null;

  update() {
    this.planePairDistances.update();

    this.checkPairsForCollision();
  }

  /**  */
  public activatePlane(
    startPos: Phaser.Math.Vector2,
    endPos: Phaser.Math.Vector2
  ) {
    let plane = this.getInactivePlane();
    if (plane === undefined) {
      console.warn(`Plane array full!`);
      return;
    }
    plane.startRoute(startPos, endPos);
    plane.setAltitude(Phaser.Math.RND.pick([0, 1, 2]));
    this.planePairDistances.addPlane(plane, this.array);
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

  public generateCoordinates(): {
    startPos: Phaser.Math.Vector2;
    endPos: Phaser.Math.Vector2;
  } {
    let randomFloat = Phaser.Math.RND.frac();
    let randomPoint = this.circle.getPoint(randomFloat);
    let start = new Phaser.Math.Vector2(randomPoint.x, randomPoint.y);

    let oppositeFloat = randomFloat + 0.5;
    oppositeFloat += Phaser.Math.RND.normal() * 0.2;
    if (oppositeFloat > 1) oppositeFloat -= 1;
    let endPoint = this.circle.getPoint(oppositeFloat);
    let end = new Phaser.Math.Vector2(endPoint.x, endPoint.y);

    return { startPos: start, endPos: end };
  }
  // This probably belongs in another class

  private checkPairsForCollision() {
    this.planePairDistances.array.forEach((pair) => {
      if (pair.distance !== undefined) {
        if (pair.distance < 25) {
          this.handleCrash(pair);
        }
      }
    });
  }

  /**
   * Temp
   */
  private makeCircle() {
    this.circle = new Phaser.Geom.Circle(450, 400, 300);
    let circleGraphic = this.scene.add.graphics({
      fillStyle: { color: 0xaa0000 },
    });
    circleGraphic.fillCircleShape(this.circle);
    circleGraphic.setAlpha(0.1);
    this.programContainer.add(circleGraphic);
  }
}
