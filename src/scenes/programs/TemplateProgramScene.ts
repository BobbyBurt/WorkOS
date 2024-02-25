
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

		// mainContainer
		const mainContainer = this.add.container(0, 0);

		// backing
		const backing = this.add.rectangle(0, 60, 700, 500);
		backing.setOrigin(0, 0);
		backing.visible = false;
		backing.isFilled = true;
		mainContainer.add(backing);

		// tank
		const tank = this.add.image(13, 505, "Tank");
		mainContainer.add(tank);

		// taskbar_window_button
		const taskbar_window_button = this.add.image(0, 60, "taskbar-window-button");
		taskbar_window_button.setOrigin(0, 0);
		mainContainer.add(taskbar_window_button);

		// taskbar_window_button_1
		const taskbar_window_button_1 = this.add.image(583, 520, "taskbar-window-button");
		taskbar_window_button_1.setOrigin(0, 0);
		mainContainer.add(taskbar_window_button_1);

		this.mainLayer = mainLayer;
		this.tank = tank;
		this.mainContainer = mainContainer;

		this.events.emit("scene-awake");
	}

	private mainLayer!: Phaser.GameObjects.Layer;
	private tank!: Phaser.GameObjects.Image;
	private mainContainer!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	readonly width = 700;
	readonly height = 500;

	create() {

		super.editorCreate();
		super.create(this.width, this.height);
		this.editorCreate();	

		super.programContainer = this.mainContainer;

		super.setMask(this.mainLayer);
		// this.windowMasko = super.indowPrefab.insideRect.createBitmapMask();
		// this.mainLayer.setMask(this.windowMasko);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
