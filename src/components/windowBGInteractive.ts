
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class windowBGInteractive {

	constructor(gameObject: Phaser.GameObjects.Rectangle) {
		this.gameObject = gameObject;
		(gameObject as any)["__windowBGInteractive"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Rectangle): windowBGInteractive {
		return (gameObject as any)["__windowBGInteractive"];
	}

	private gameObject: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
