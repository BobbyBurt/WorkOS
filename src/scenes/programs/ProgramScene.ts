
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

		// programMaskRect
		const programMaskRect = this.add.rectangle(0, 60, 700, 500);
		programMaskRect.setOrigin(0, 0);
		programMaskRect.isFilled = true;

		this.programMaskRect = programMaskRect;

		this.events.emit("scene-awake");
	}

	private programMaskRect!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	readonly programMaskSizeOffset = 
	{
		X: 9,
		Y: 60,
		width: -17,
		height: -63,
	}

	private windowPrefab!: WindowPrefab;


	private programMask!: Phaser.Display.Masks.GeometryMask;

	public _programContainer!: Phaser.GameObjects.Container;
	protected get programContainer()
	{
		return this._programContainer;
	}
	protected set programContainer(value: Phaser.GameObjects.Container)
	{
		this._programContainer = value;
	}


	init(data:any)
	{

	}

	create(width: number, height: number)
	{
		// I have a feeling I'll need to have need to access the width and height in this class later on, which isn't possible this way. But I don't want duplicate vars.

		// usually I'd call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn't seem to run? So I'm calling both in the child class

		// camera
		this.cameras.main.centerOn(960, 540);

		// window
		this.windowPrefab = new WindowPrefab(this, 0, 0);
		this.add.existing(this.windowPrefab);
		this.windowPrefab.setDepth(10);
		this.windowPrefab.setWindowSize(width, height);
		
		// program mask
		this.programMaskRect.setSize
		(
			width + this.programMaskSizeOffset.width, 
			height + this.programMaskSizeOffset.height
		);
		this.programMaskRect.setPosition
		(
			this.programMaskSizeOffset.X, 
			this.programMaskSizeOffset.Y
		);

		// drag
		this.windowPrefab.windowBorder.setInteractive({ draggable: true });
		this.windowPrefab.windowBorder.on('drag', (pointer: Phaser.Input.Pointer, dragX: any, dragY: any) =>
		{
			this.windowPrefab.setPosition(dragX, dragY);
			this.programMaskRect.setPosition
			(
				dragX + this.programMaskSizeOffset.X, 
				dragY + this.programMaskSizeOffset.Y
			);
			this.programContainer.setPosition(dragX, dragY);


			// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

			// TODO: create border rect in desktop scene and clamp window
		});
	}

	update()
	{

	}

	/**
	 * 
	 * @param layer All objects in the layer will be masked to `windowPrefabs`'s `insideRect`
	 */
	setMask(layer: Phaser.GameObjects.Layer | Phaser.GameObjects.Image)
	{
		this.programMask = this.programMaskRect.createGeometryMask();
		this.programContainer.setMask(this.programMask);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
