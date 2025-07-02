/** @format */

export default class PlaneIcon extends Phaser.GameObjects.Image {
  constructor(scene: Phaser.Scene, x?: number, y?: number) {
    super(scene, x ?? 0, y ?? 0, "plane-icon");

    // this.setScale(0.05, 0.05);

    // this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    // geom
    this.warningCircle = new Phaser.Geom.Circle(this.x, this.y, 100);
    this.warningCircleGraphic = this.scene.add.graphics({
      fillStyle: { color: 0xaa0000 },
    });
    this.warningCircleGraphic.setDepth(-1);

    this.hitCircle = new Phaser.Geom.Circle(this.x, this.y, 20);
    this.hitCircleGraphic = this.scene.add.graphics({
      fillStyle: { color: 0xaa0000 },
    });
    this.hitCircleGraphic.setDepth(-1);
  }

  public warningCircle: Phaser.Geom.Circle;
  public warningCircleGraphic: Phaser.GameObjects.Graphics;
  public hitCircle: Phaser.Geom.Circle;
  public hitCircleGraphic: Phaser.GameObjects.Graphics;

  private tween: Phaser.Tweens.Tween;
  private line: Phaser.Curves.Line;
  private path: Phaser.Curves.Path;

  public altitude: 0 | 1 | 2;

  update(): void {
    if (!this.active) {
      return;
    }

    var _point = this.path.getPoint(this.tween.getValue());
    this.setPosition(_point.x, _point.y);

    this.warningCircle.setPosition(this.x, this.y);
    this.warningCircleGraphic.clear();
    // this.warningCircleGraphic.fillCircleShape(this.warningCircle);
    this.hitCircle.setPosition(this.x, this.y);
    this.hitCircleGraphic.clear();
    // this.hitCircleGraphic.fillCircleShape(this.hitCircle);
  }

  public setupPlane(start: Phaser.Math.Vector2, end: Phaser.Math.Vector2) {
    this.setActive(true);

    this.line = new Phaser.Curves.Line([start.x, start.y, end.x, end.y]);
    this.path = this.scene.add.path(0, 0);
    this.path.add(this.line);

    // rotate
    let angle = this.lineToAngle(start, end);
    this.setRotation(angle);

    if (this.tween) {
      this.tween.stop();
    }
    this.tween = this.scene.tweens.addCounter({
      from: 0,
      to: 1,
      duration: 10000,
      ease: Phaser.Math.Easing.Linear,
      // repeat: -1,
      onComplete: () => {
        this.setActive(false);
      },
    });
  }

  private lineToAngle(
    start: Phaser.Math.Vector2,
    end: Phaser.Math.Vector2
  ): number {
    Phaser.Math.Angle;
    let x = end.x - start.x;
    let y = end.y - start.y;
    return Math.atan2(y, x);

    // return Math.tan(m) ** -1;
  }
}
