
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
/* END-USER-IMPORTS */

export default class TemplateProgramScene extends ProgramBaseScene {

	constructor() {
		super("template-program");

		/* START-USER-CTR-CODE */

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mainContainer
		const mainContainer = this.add.container(0, 0);

		// backing
		const backing = this.add.rectangle(0, 60, 700, 500);
		backing.setOrigin(0, 0);
		backing.visible = false;
		backing.isFilled = true;
		mainContainer.add(backing);

		// toidSketch_1
		const toidSketch_1 = this.add.image(53, 312, "ToidSketch");
		mainContainer.add(toidSketch_1);

		// tank
		const tank = this.add.image(481, 387, "Tank");
		mainContainer.add(tank);

		this.mainContainer = mainContainer;

		this.events.emit("scene-awake");
	}

	private mainContainer!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

	readonly width = 700;
	readonly height = 500;

	/**
	 * Boilerplate setup for all program classes
	 */
	setup() {
		// create
		super.editorCreate();
		super.create(this.width, this.height, 'Template Program.exe');
		this.editorCreate();

		// mask
		super.programContainer = this.mainContainer;
		super.setMask();

	}

	create() {
		this.setup();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
