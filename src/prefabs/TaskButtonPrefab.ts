
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import WindowPrefab from "./WindowPrefab";
/* END-USER-IMPORTS */

export default class TaskButtonPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// backSlice
		const backSlice = scene.add.nineslice(0, 0, "taskbar-window-button", undefined, 220, 0, 22, 20, 0, 0);
		backSlice.setOrigin(0, 0);
		this.add(backSlice);

		// window_minimize_button
		const window_minimize_button = scene.add.image(33, 27, "window-minimize-button");
		window_minimize_button.scaleX = 0.3645750561186374;
		window_minimize_button.scaleY = 0.3645750561186374;
		window_minimize_button.angle = -90;
		this.add(window_minimize_button);

		// nameText
		const nameText = scene.add.bitmapText(56, 20, "nokia", "New BitmapText");
		nameText.text = "New BitmapText";
		nameText.fontSize = -16;
		this.add(nameText);

		this.backSlice = backSlice;
		this.window_minimize_button = window_minimize_button;
		this.nameText = nameText;

		/* START-USER-CTR-CODE */


		/* END-USER-CTR-CODE */
	}

	public backSlice: Phaser.GameObjects.NineSlice;
	public window_minimize_button: Phaser.GameObjects.Image;
	public nameText: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
