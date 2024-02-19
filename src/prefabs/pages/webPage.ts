
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class webPage extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// pageBack
		const pageBack = scene.add.rectangle(0, 0, 1000, 3000);
		pageBack.setOrigin(0, 0);
		pageBack.isFilled = true;
		this.add(pageBack);

		// tank
		const tank = scene.add.image(192, 708, "Tank");
		this.add(tank);

		// text_1
		const text_1 = scene.add.text(30, 42, "", {});
		text_1.text = "Welcome TO MY HOMEPAGE!!";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "arial", "fontSize": "40px" });
		this.add(text_1);

		// text
		const text = scene.add.text(36, 89, "", {});
		text.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam, euismod viverra diam fringilla in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sem nec mauris aliquet mattis. Duis at dolor posuere, efficitur lacus id, lacinia tellus. Pellentesque quis tristique dui. Vivamus molestie lacus eu dolor eleifend, vel mattis est blandit.";
		text.setStyle({ "color": "#000000ff", "fontFamily": "arial", "fontSize": "24px" });
		text.setWordWrapWidth(1000);
		this.add(text);

		// tank_1
		const tank_1 = scene.add.image(835, 1854, "Tank");
		tank_1.scaleX = 3.748789786766183;
		tank_1.scaleY = 8.462735519825634;
		this.add(tank_1);

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
