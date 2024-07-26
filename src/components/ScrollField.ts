/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import DebugScene from "~/scenes/DebugScene";
import { ProgramBaseScene } from "~/scenes/programs/ProgramScene";
/* END-USER-IMPORTS */

export default class ScrollField {
  constructor(gameObject: Phaser.GameObjects.Container) {
    this.gameObject = gameObject;
    (gameObject as any)["__ScrollField"] = this;

    /* START-USER-CTR-CODE */

    this.gameObject.scene.events.once(
      Phaser.Scenes.Events.UPDATE,
      this.setup,
      this
    );

    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.GameObjects.Container): ScrollField {
    return (gameObject as any)["__ScrollField"];
  }

  private gameObject: Phaser.GameObjects.Container;
  public BGRect!: Phaser.GameObjects.Rectangle;
  public scrollbarRect!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  private initalY: number;

  private debugScene: DebugScene;
  private parentScene: ProgramBaseScene;

  setup() {
    if (!this.BGRect) {
      console.warn(`BGRect is undefined. Scroll field will not work.`);
      return;
    }

    this.debugScene = this.gameObject.scene.scene.get("debug") as DebugScene;
    this.initalY = this.gameObject.y;

    this.parentScene = this.gameObject.scene as ProgramBaseScene;

    // this.scrollbarRect.setSize(
    //   this.scrollbarRect.width,
    //   this.parentScene.height / (this.BGRect.height / this.parentScene.height)
    // );

    this.BGRect.setInteractive();
    this.BGRect.on("wheel", this.scroll, this);
  }

  scroll(pointer: Phaser.Input.Pointer, deltaX: number, deltaY: number) {
    this.gameObject.y -= deltaY;
    this.gameObject.y = Phaser.Math.Clamp(
      this.gameObject.y,
      -this.BGRect.height + this.parentScene.height,
      this.initalY
    );
    // this.scrollbarRect.setY((this.parentScene.height - this.scrollbarRect.height) + this.initalY);
    // LEFTOFF:
  }

  public resetPosition() {
    this.gameObject.y = this.initalY;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
