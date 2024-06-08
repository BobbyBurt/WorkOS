/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DummyInteractive {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__DummyInteractive"] = this;

		/* START-USER-CTR-CODE */
    this.gameObject.setInteractive();
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): DummyInteractive {
		return (gameObject as any)["__DummyInteractive"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
