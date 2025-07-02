/** @format */

import PlaneIcon from "./PlaneIcon";

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
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    this.container = container;

    this.planes = new Array();

    this.spawnCircle = new Phaser.Geom.Circle(450, 400, 300);
    let circleGraphic = this.scene.add.graphics({
      fillStyle: { color: 0xaa0000 },
    });
    circleGraphic.fillCircleShape(this.spawnCircle);
    circleGraphic.setAlpha(0.1);
    this.container.add(circleGraphic);

    this.createPlanes(10);
  }

  private scene: Phaser.Scene;
  private container: Phaser.GameObjects.Container;

  private spawnCircle: Phaser.Geom.Circle;

  private planes: Array<PlaneIcon>;

  update() {
    this.checkPlanesIntersection();
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
    plane.setupPlane(startPos, endPos);
  }

  private checkPlanesIntersection() {
    // if (
    //   Phaser.Geom.Intersects.CircleToCircle(
    //     this.plane.warningCircle,
    //     this.plane2.warningCircle
    //   )
    // ) {
    //   this.plane.warningCircleGraphic.alpha = 0.3;
    //   this.plane2.warningCircleGraphic.alpha = 0.3;
    // } else {
    //   this.plane.warningCircleGraphic.alpha = 0.1;
    //   this.plane2.warningCircleGraphic.alpha = 0.1;
    // }
  }

  /**
   * Called once upon setup
   * @param amount
   */
  private createPlanes(amount: number) {
    for (let i = 0; i < amount - 1; i++) {
      this.createPlane();
    }
  }

  private createPlane() {
    let plane = new PlaneIcon(this.scene, 0, 0);
    this.scene.add.existing(plane);
    this.container.add(plane);
    this.container.add(plane.warningCircleGraphic);
    this.container.add(plane.hitCircleGraphic);
    this.planes.push(plane);
    plane.setActive(false);
  }

  private getInactivePlane(): PlaneIcon | undefined {
    let returnPlane: PlaneIcon | undefined = undefined;
    this.planes.forEach((plane, index) => {
      if (!plane.active && !returnPlane) {
        returnPlane = plane;
      }
    });
    return returnPlane;
  }

  public generateCoordinates(): {
    startPos: Phaser.Math.Vector2;
    endPos: Phaser.Math.Vector2;
  } {
    let randomFloat = Phaser.Math.RND.frac();
    let randomPoint = this.spawnCircle.getPoint(randomFloat);
    let start = new Phaser.Math.Vector2(randomPoint.x, randomPoint.y);
    console.debug(randomFloat, start);

    let oppositeFloat = randomFloat + 0.5;
    oppositeFloat += Phaser.Math.RND.normal() * 0.2;
    if (oppositeFloat > 1) oppositeFloat -= 1;
    let endPoint = this.spawnCircle.getPoint(oppositeFloat);
    let end = new Phaser.Math.Vector2(endPoint.x, endPoint.y);
    console.debug(oppositeFloat, end);

    return { startPos: start, endPos: end };
  }
}
