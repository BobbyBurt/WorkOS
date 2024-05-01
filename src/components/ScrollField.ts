/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollField {
  constructor(gameObject: Phaser.GameObjects.Container) {
    this.gameObject = gameObject;
    (gameObject as any)["__ScrollField"] = this;

    /* START-USER-CTR-CODE */

    this.gameObject.scene.events.once(
      Phaser.Scenes.Events.UPDATE,
      this.setupMask,
      this
    );

    /* END-USER-CTR-CODE */
  }

  static getComponent(gameObject: Phaser.GameObjects.Container): ScrollField {
    return (gameObject as any)["__ScrollField"];
  }

  private gameObject: Phaser.GameObjects.Container;
  public maskRect!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  private mask!: Phaser.Display.Masks.GeometryMask;

  setupMask() {
    // this.mask = this.maskRect.createGeometryMask();
    // this.gameObject.setMask(this.mask);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
