
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import WindowPrefab from "~/prefabs/WindowPrefab";
import DebugScene from "../DebugScene";
import DesktopScene from "../DesktopScene";
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

	readonly programMaskOffset = 
	{
		x: 9,
		y: 60,
	}

	readonly windowOpenPosition =
	{
		x: 387,
		y: 70
	}

	private dragOffset =
	{
		x: 0,
		y: 0
	}

	private windowPrefab!: WindowPrefab;


	private programMask!: Phaser.Display.Masks.GeometryMask;

	// program container
	public _programContainer!: Phaser.GameObjects.Container;
	protected get programContainer()
	{
		return this._programContainer;
	}
	/**
	 * Also sets the position to windowOpenPosition, as this should only be set on create.
	 */
	protected set programContainer(value: Phaser.GameObjects.Container)
	{
		this._programContainer = value;
		this._programContainer.setPosition
			(this.windowOpenPosition.x, this.windowOpenPosition.y);
	}

	// scenes
	private debugScene!: DebugScene;
	private desktopScene!: DesktopScene;

	init(data:any)
	{

	}

	create(width: number, height: number)
	{
		// I have a feeling I'll need to have need to access the width and height in this class later on, which isn't possible this way. But I don't want duplicate vars.

		// usually I'd call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn't seem to run? So I'm calling both in the child class

		// scene ref
		this.debugScene = this.scene.get('debug-scene') as DebugScene;
		this.desktopScene = this.scene.get('desktop-scene') as DesktopScene;

		// camera
		this.cameras.main.centerOn(960, 540);

		// window
		this.windowPrefab = new WindowPrefab
			(this, this.windowOpenPosition.x, this.windowOpenPosition.y);
		this.add.existing(this.windowPrefab);
		this.windowPrefab.setDepth(10);
		this.windowPrefab.setWindowSize(width + 17, height + 63);
		
		// program mask
		this.programMaskRect.setSize(width, height);
		this.programMaskRect.setPosition
		(
			this.windowOpenPosition.x +this.programMaskOffset.x, 
			this.windowOpenPosition.y + this.programMaskOffset.y
		);

		// drag
		this.windowPrefab.dragRect.setInteractive({ draggable: true });
		this.windowPrefab.dragRect.on('drag', this.onDrag, this);
		this.windowPrefab.dragRect.on('pointerdown', (pointer: Phaser.Input.Pointer) =>
		{
			// ignore if pointer is outside desktop rect
			if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y))
			{
				return;
			}

			this.dragOffset.x =  pointer.x - this.windowPrefab.x;
			this.dragOffset.y =  pointer.y - this.windowPrefab.y;
		});

		// window prefab events
		this.events.on('close', this.close, this);
		this.events.on('minimize', this.minimize, this);
	}

	update()
	{

	}

	private onDrag(pointer: Phaser.Input.Pointer, dragX: any, dragY: any)
	{
		// ignore if pointer is outside desktop rect
		if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y))
		{
			return;
		}

		// x & y with offset and clamped to desktop bounds
		let x = Phaser.Math.Clamp
		(
			pointer.x - this.dragOffset.x, 
			this.desktopScene.desktopRect.x - (this.windowPrefab.windowBorder.width - 50), 
			(this.desktopScene.desktopRect.x + this.desktopScene.desktopRect.width) - 50
		);
		let y = Phaser.Math.Clamp
		(
			pointer.y - this.dragOffset.y, 
			this.desktopScene.desktopRect.y - 15, 
			(this.desktopScene.desktopRect.y + this.desktopScene.desktopRect.height) - 65
		);
		// let x = pointer.x;
		// let y = pointer.y;

		this.windowPrefab.setPosition(x, y);
		this.programMaskRect.setPosition
		(
			x + this.programMaskOffset.x, 
			y + this.programMaskOffset.y
		);
		this.programContainer.setPosition(x, y);


		// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

		// TODO: create border rect in desktop scene and clamp window
	};

	private close()
	{
		this.scene.stop(); 
	}

	private minimize()
	{
		this.scene.setVisible(false);
		this.scene.setActive(false);
	}

	/**
	 * Creates a mask from the programMaskRect and sets it to programContainer. To be called by a child class once those are set.
	 */
	protected setMask()
	{
		this.programMask = this.programMaskRect.createGeometryMask();
		this.programContainer.setMask(this.programMask);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
