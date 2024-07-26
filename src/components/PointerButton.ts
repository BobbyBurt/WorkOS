/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PointerButton {

	constructor(gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__PointerButton"] = this;

		/* START-USER-CTR-CODE */

    this.gameObject.setInteractive({ useHandCursor: true });
    this.gameObject.on("pointerover", this.pointerOver, this);
    this.gameObject.on("pointerout", this.pointerOut, this);
    this.gameObject.on("pointerdown", this.pointerDown, this);
    this.gameObject.on("pointerup", this.pointerUp, this);

    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle): PointerButton {
		return (gameObject as any)["__PointerButton"];
	}

	private gameObject: Phaser.GameObjects.Image | Phaser.GameObjects.Rectangle;
	public setAlpha: boolean = false;

	/* START-USER-CODE */

  pointerOver() {
    if (this.setAlpha) {
      this.gameObject.setAlpha(0.8);
    }

    // Component can have settings for visual feedback
  }

  pointerOut() {
    if (this.setAlpha) {
      this.gameObject.setAlpha(1);
    }
  }

  pointerDown() {
    if (this.setAlpha) {
      this.gameObject.setAlpha(0.6);
    }
  }

  pointerUp() {
    if (this.setAlpha) {
      this.gameObject.setAlpha(1);
    }

    this.gameObject.emit("click");
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
