/** @format */

import DebugScene from "~/scenes/DebugScene";
import Plane from "./Plane";
import { planeGenSettings } from "./PlaneGenerationSettings";
import PlaneManager from "./PlaneManager";

/** Controls plane generation
 *
 * **/
export default class PlaneGeneration {
  /**
   *
   * @param scene
   */
  constructor(scene: Phaser.Scene, manager: PlaneManager) {
    this.scene = scene;
    this.manager = manager;

    this.makeCircle();

    this.spotsInUse = new Array(10);

    this.debug = this.scene.game.scene.getScene("debug") as DebugScene;
  }

  readonly debug: DebugScene;
  readonly scene: Phaser.Scene;
  readonly manager: PlaneManager;

  private circle: Phaser.Geom.Circle;
  /** Index = 0-9, each being a division of the perimeter of the circle. If true, that spot has a plane heading towards it and should not be used as a spawn. */
  private spotsInUse: Array<boolean>;

  private crashCounter: number;

  private genTimer!: Phaser.Time.TimerEvent;

  // create delay with complete callback to remove the point from the array

  public startRound() {
    this.crashCounter = 5;

    this.planeGenLoop();
  }

  private planeGenLoop() {
    this.crashCounter--;
    if (this.crashCounter === 0) {
      this.genPlane(true);

      this.crashCounter = Phaser.Math.RND.between(4, 6);
    } else {
      this.genPlane(false);
    }

    this.genTimer = this.scene.time.addEvent({
      delay: Phaser.Math.RND.between(1000, 5000),
      callback: () => {
        this.planeGenLoop();
      },
    });
  }

  private genPlane(crash: boolean, pair?: boolean) {
    let coordinates = this.generateStartEndVectors();
    this.manager.activatePlane(
      coordinates.startPos,
      coordinates.endPos,
      Phaser.Math.RND.pick([0, 1]),
      15000
    );
    // if (Phaser.Math.RND.frac() < 0.5) {
    //   let coordinates2 = this.generateStartEndVectors();
    //   this.manager.activatePlane(
    //     coordinates2.startPos,
    //     coordinates2.endPos,
    //     Phaser.Math.RND.pick([0, 1, 2]),
    //     15000
    //   );
    // }
  }

  public generateStartEndVectors(): {
    startPos: Phaser.Math.Vector2;
    endPos: Phaser.Math.Vector2;
  } {
    // let randomFloat = Phaser.Math.RND.frac();
    // let randomPoint = this.circle.getPoint(randomFloat);
    // let start = new Phaser.Math.Vector2(randomPoint.x, randomPoint.y);

    // let oppositeFloat = randomFloat + 0.5;
    // oppositeFloat += Phaser.Math.RND.normal() * 0.2;
    // if (oppositeFloat > 1) oppositeFloat -= 1;
    // let endPoint = this.circle.getPoint(oppositeFloat);
    // let end = new Phaser.Math.Vector2(endPoint.x, endPoint.y);

    let randomSpot = Phaser.Math.RND.between(0, 9);
    for (let i = 0; i < 9; i++) {
      if (this.spotsInUse[randomSpot]) {
        console.warn("Point taken! Let's try another");
        randomSpot += 1;
        if (randomSpot > 9) {
          randomSpot = 0;
        }
      } else {
        break;
      }
    }
    let startpoint = this.circle.getPoint(randomSpot * 0.1);
    let startVec = new Phaser.Math.Vector2(startpoint.x, startpoint.y);

    let endSpot = randomSpot + 5;
    endSpot += Phaser.Math.RND.between(-2, 2);
    if (endSpot > 9) endSpot -= 10;
    let endPoint = this.circle.getPoint(endSpot * 0.1);
    let endVec = new Phaser.Math.Vector2(endPoint.x, endPoint.y);

    this.spotsInUse[endSpot] = true;
    let timer = this.scene.time.addEvent({
      delay: 15000,
      // set this to be the same as the plane's duration
      callback: () => {
        this.spotsInUse[endSpot] = false;
      },
    });

    this.debug.DisplayVar("spotsInUse", this.spotsInUse);

    return { startPos: startVec, endPos: endVec };
  }

  private makeCircle() {
    this.circle = new Phaser.Geom.Circle(500, 485, 400);
    let circleGraphic = this.scene.add.graphics({
      fillStyle: { color: 0xaa0000 },
    });
    circleGraphic.fillCircleShape(this.circle);
    circleGraphic.setAlpha(0.1);
    this.manager.programContainer.add(circleGraphic);
  }
}
