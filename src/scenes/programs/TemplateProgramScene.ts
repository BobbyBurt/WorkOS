
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
/* END-USER-IMPORTS */

export default class TemplateProgramScene extends ProgramBaseScene {

	constructor() {
		super("template-program-scene");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mainLayer
		const mainLayer = this.add.layer();

		// backing
		const backing = this.add.rectangle(0, 60, 700, 500);
		backing.setOrigin(0, 0);
		backing.isFilled = true;
		mainLayer.add(backing);

		// tank
		const tank = this.add.image(9, 87, "Tank");
		mainLayer.add(tank);

		// taskbar_window_button
		const taskbar_window_button = this.add.image(0, 60, "taskbar-window-button");
		taskbar_window_button.setOrigin(0, 0);
		mainLayer.add(taskbar_window_button);

		// taskbar_window_button_1
		const taskbar_window_button_1 = this.add.image(591, 532, "taskbar-window-button");
		taskbar_window_button_1.setOrigin(0, 0);
		mainLayer.add(taskbar_window_button_1);

		this.tank = tank;
		this.mainLayer = mainLayer;

		this.events.emit("scene-awake");
	}

	private tank!: Phaser.GameObjects.Image;
	private mainLayer!: Phaser.GameObjects.Layer;

	/* START-USER-CODE */

	private windowMasko!: Phaser.Display.Masks.BitmapMask;

	create() {

		super.create();

		this.editorCreate();

		super.setMask(this.tank);
		// this.windowMasko = super.indowPrefab.insideRect.createBitmapMask();
		// this.mainLayer.setMask(this.windowMasko);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
