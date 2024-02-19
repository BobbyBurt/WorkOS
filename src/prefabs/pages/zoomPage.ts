
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class zoomPage extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// pageBack
		const pageBack = scene.add.rectangle(0, 0, 1000, 800);
		pageBack.setOrigin(0, 0);
		pageBack.isFilled = true;
		this.add(pageBack);

		// tank
		const tank = scene.add.image(197, 254, "Tank");
		this.add(tank);

		// text_1
		const text_1 = scene.add.text(30, 42, "", {});
		text_1.text = "zoom";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "arial", "fontSize": "40px" });
		this.add(text_1);

		// tank_2
		const tank_2 = scene.add.image(386.7590637207031, 235.14361572265625, "Tank");
		this.add(tank_2);

		// tank_3
		const tank_3 = scene.add.image(614, 305, "Tank");
		this.add(tank_3);

		this.pageBack = pageBack;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	private pageBack: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
