
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PointerButton {

	constructor(gameObject: Phaser.GameObjects.Image) {
		this.gameObject = gameObject;
		(gameObject as any)["__PointerButton"] = this;

		/* START-USER-CTR-CODE */

		this.gameObject.setInteractive({ useHandCursor: true });
		this.gameObject.on('pointerover', this.pointerOver, this);
		this.gameObject.on('pointerout', this.pointerOut, this);
		this.gameObject.on('pointerdown', this.pointerDown, this);
		this.gameObject.on('pointerup', this.pointerUp, this);

		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): PointerButton {
		return (gameObject as any)["__PointerButton"];
	}

	private gameObject: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	pointerOver()
	{
		this.gameObject.setAlpha(.8);

		// Component can have settings for visual feedback
	}

	pointerOut()
	{
		this.gameObject.setAlpha(1);
	}

	pointerDown()
	{
		this.gameObject.setAlpha(.6);
	}

	pointerUp()
	{
		this.gameObject.setAlpha(1);

		this.gameObject.emit('click');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
