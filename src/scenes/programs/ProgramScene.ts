
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import WindowPrefab from "~/prefabs/WindowPrefab";
/* END-USER-IMPORTS */

export default class ProgramScene extends Phaser.Scene {

	constructor() {
		super("program-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// backing
		const backing = this.add.rectangle(0, 0, 1000, 800);
		backing.setOrigin(0, 0);
		backing.isFilled = true;

		// toidSketch
		this.add.image(270, 216, "ToidSketch");

		// toidSketch_1
		const toidSketch_1 = this.add.image(973, 913, "ToidSketch");
		toidSketch_1.scaleX = 5.137692520457458;
		toidSketch_1.scaleY = 3.6653923432747124;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	init(data:any)
	{
		console.debug(data)
	}

	create() {

		this.editorCreate();

		this.scale.on('enterfullscreen', this.resize, this);
		this.scale.on('leavefullscreen', this.unFullscreen, this);

		this.cameras.main.setZoom(.5);
		this.cameras.main.centerOn(960, 540);

		this.cameras.main.setViewport(0, 0, 100, 100);

		const window_2 = new WindowPrefab(this, 888, 344);
		this.add.existing(window_2);

		this.game.events.emit('scene-created: ' + this.scene.key);
	}

	resize(gameSize: any, baseSize: any, displaySize: any, resolution: any)
	{
		// console.debug(gameSize, baseSize, displaySize, resolution);
		console.debug('resize');

		// this.scale.setGameSize(this.scale.displaySize.width, this.scale.displaySize.height);
		this.scale.setGameSize(1920, 1080);
		this.cameras.main.setZoom(1);
		this.cameras.main.centerOn(960, 540);
	}

	unFullscreen()
	{
		this.scale.setGameSize(960, 540);
		this.cameras.main.setZoom(.5);
		this.cameras.main.centerOn(960, 540);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
