/** @format */

export default class Plane extends Phaser.GameObjects.Image {
  constructor(
    scene: Phaser.Scene,
    managerIndex: number,
    programContainer: Phaser.GameObjects.Container,
    x?: number,
    y?: number
  ) {
    super(scene, x ?? 0, y ?? 0, "plane-icon");

    this.managerIndex = managerIndex;

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    this.setupSelectIcons();

    this.scene.add.existing(this);
    programContainer.add(this);
    programContainer.add(this.selectIcon);
    programContainer.add(this.hoverIcon);
    this.setActive(false);

    this.setupPointerEvents();
  }

  private tween: Phaser.Tweens.Tween;
  private line: Phaser.Curves.Line;
  private path: Phaser.Curves.Path;

  public selectIcon: Phaser.GameObjects.Image;
  private hoverIcon: Phaser.GameObjects.Image;

  public altitude: 0 | 1 | 2;

  /** So PlaneManager can find this plane in the array. Will be unique to this instance. */
  readonly managerIndex: number;

  update(): void {
    this.setPositionFromTween();
  }

  public startRoute(
    start: Phaser.Math.Vector2,
    end: Phaser.Math.Vector2,
    duration: number
  ) {
    this.setActive(true);
    this.setVisible(true);

    this.line = new Phaser.Curves.Line([start.x, start.y, end.x, end.y]);
    this.path = this.scene.add.path(0, 0);
    this.path.add(this.line);

    let angle = this.lineToAngle(start, end);
    this.setRotation(angle);

    if (this.tween) {
      this.tween.stop();
    }
    this.tween = this.scene.tweens.addCounter({
      from: 0,
      to: 1,
      duration: duration,
      ease: Phaser.Math.Easing.Linear,
      // repeat: -1,
      onComplete: () => {
        this.emit("finished");
      },
    });
  }

  public handleRouteEnd() {
    this.setActive(false);
    this.setVisible(false);
  }

  public handleCrash() {
    this.setActive(false);
    this.setVisible(false);
  }

  public setAltitude(altitude: 0 | 1 | 2) {
    this.altitude = altitude;
    let tint = 0x000000;
    if (altitude === 0) {
      tint = 0xff0000;
    } else if (altitude === 1) {
      tint = 0x00ff00;
    } else if (altitude === 2) {
      tint = 0x0000ff;
    }
    this.setTint(tint);
  }

  private setPositionFromTween() {
    if (!this.active) {
      return;
    }

    var _point = this.path.getPoint(this.tween.getValue());
    this.setPosition(_point.x, _point.y);
    this.selectIcon.setPosition(_point.x, _point.y);
    this.hoverIcon.setPosition(_point.x, _point.y);
  }

  private lineToAngle(
    start: Phaser.Math.Vector2,
    end: Phaser.Math.Vector2
  ): number {
    Phaser.Math.Angle;
    let x = end.x - start.x;
    let y = end.y - start.y;
    return Math.atan2(y, x);
  }

  private setupSelectIcons() {
    this.selectIcon = this.scene.add.image(0, 0, "plane-select-icon");
    this.hoverIcon = this.scene.add.image(0, 0, "plane-select-icon");
    this.selectIcon.setTint(0x000000);
    this.hoverIcon.setTint(0x000000);
    this.hoverIcon.setAlpha(0.4);
    this.selectIcon.setVisible(false);
    this.hoverIcon.setVisible(false);
  }

  private setupPointerEvents() {
    this.setInteractive({ useHandCursor: true });
    this.on("pointerover", this.pointerOver, this);
    this.on("pointerout", this.pointerOut, this);
    // this.on("pointerdown", this.pointerDown, this);
    this.on("pointerup", this.pointerUp, this);
  }

  private pointerOver() {
    this.hoverIcon.setVisible(true);
  }

  private pointerOut() {
    this.hoverIcon.setVisible(false);
  }

  private pointerUp() {
    this.emit("selected");
  }
}
