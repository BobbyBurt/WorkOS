
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
import WindowPrefab from "./WindowPrefab";
/* END-USER-IMPORTS */

export default class TaskButtonPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// backing
		const backing = scene.add.rectangle(0, 0, 200, 50);
		backing.setOrigin(0, 0);
		backing.isFilled = true;
		backing.fillColor = 13224393;
		this.add(backing);

		// nameText
		const nameText = scene.add.text(47, 13, "", {});
		nameText.text = "Task Name";
		nameText.setStyle({ "color": "#000000ff", "fontSize": "24px", "fontStyle": "bold" });
		this.add(nameText);

		// ellipse_1
		const ellipse_1 = scene.add.ellipse(23, 25, 20, 20);
		ellipse_1.isFilled = true;
		ellipse_1.fillColor = 0;
		this.add(ellipse_1);

		// backing (components)
		new PointerButton(backing);

		this.backing = backing;
		this.nameText = nameText;

		/* START-USER-CTR-CODE */


		/* END-USER-CTR-CODE */
	}

	public backing: Phaser.GameObjects.Rectangle;
	public nameText: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
