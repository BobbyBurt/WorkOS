
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
	}
}

export class ProgramBaseScene extends Phaser.Scene {

	constructor(key: string)
	{
		super(key);

		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// start_button
		const start_button = this.add.image(48, 166, "start-button");

		this.start_button = start_button;

		this.events.emit("scene-awake");
	}

	private start_button!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	readonly width = 700;
	readonly height = 500;

	private windowPrefab!: WindowPrefab;
	protected get indowPrefab()
	{
		return this.windowPrefab;
	}

	private windowMask!: Phaser.Display.Masks.BitmapMask;

	init(data:any)
	{

	}

	create() {

		this.editorCreate();

		// this.scale.on('enterfullscreen', this.resize, this);
		// this.scale.on('leavefullscreen', this.unFullscreen, this);

		this.cameras.main.setViewport
		(
			450 * this.cameras.main.zoom, 
			100 * this.cameras.main.zoom,
			this.width * this.cameras.main.zoom, 
			this.height * this.cameras.main.zoom
			);
		this.cameras.main.centerOn(this.width / 2, this.height / 2);

		this.windowPrefab = new WindowPrefab(this, 0, 0);
		this.add.existing(this.windowPrefab);
		this.windowPrefab.setWindowSize(this.width, this.height);

		this.windowPrefab.windowBorder.setInteractive({ draggable: true });
		this.windowPrefab.windowBorder.on('drag', (pointer: Phaser.Input.Pointer, dragX: any, dragY: any) =>
		{
			this.cameras.main.setViewport(pointer.x, pointer.y, this.width * this.cameras.main.zoom, this.height * this.cameras.main.zoom);

			// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

			// TODO: create border rect in desktop scene and clamp window
		});
	}

	/**
	 * 
	 * @param layer All objects in the layer will be masked to `windowPrefabs`'s `insideRect`
	 */
	setMask(layer: Phaser.GameObjects.Layer | Phaser.GameObjects.Image)
	{
		// LEFTOFF: mask won't work. Both the layer and mask are defined. The mask itself works on other objects added to the scene from this class, but not the other class.
		
		this.windowMask = this.windowPrefab.insideRect.createBitmapMask();
		layer.setMask(this.windowMask);
		
		this.windowPrefab.insideRect.setVisible(false);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
