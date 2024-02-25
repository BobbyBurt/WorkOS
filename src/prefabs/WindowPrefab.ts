
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
import DebugScene from "~/scenes/DebugScene";
/* END-USER-IMPORTS */

export default class WindowPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// insideRect
		const insideRect = scene.add.rectangle(9, 60, 983, 240);
		insideRect.setOrigin(0, 0);
		insideRect.visible = false;
		insideRect.isFilled = true;
		insideRect.fillColor = 11349293;
		this.add(insideRect);

		// windowBorder
		const windowBorder = scene.add.nineslice(0, 7, "window-title-bar", undefined, 1000, 300, 43, 39, 63, 20);
		windowBorder.setOrigin(0, 0);
		this.add(windowBorder);

		// minimizeButton
		const minimizeButton = scene.add.image(862, 1, "window-minimize-button");
		minimizeButton.setOrigin(0, 0);
		this.add(minimizeButton);

		// closeButton
		const closeButton = scene.add.image(925, 5, "window-close-button");
		closeButton.setOrigin(0, 0);
		this.add(closeButton);

		// minimizeButton (components)
		new PointerButton(minimizeButton);

		// closeButton (components)
		new PointerButton(closeButton);

		this.insideRect = insideRect;
		this.windowBorder = windowBorder;
		this.minimizeButton = minimizeButton;
		this.closeButton = closeButton;

		/* START-USER-CTR-CODE */

		this.create();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	public insideRect: Phaser.GameObjects.Rectangle;
	public windowBorder: Phaser.GameObjects.NineSlice;
	private minimizeButton: Phaser.GameObjects.Image;
	private closeButton: Phaser.GameObjects.Image;
	public displayName: string = "Unnamed Window";

	/* START-USER-CODE */

	create()
	{

		this.closeButton.on('pointerdown', this.onCloseButton, this);

		this.minimizeButton.on('click', this.onMinimizeButton, this);
	}

	private onCloseButton()
	{	
		this.scene.events.emit('close');
	}

	private onMinimizeButton()
	{
		this.scene.events.emit('minimize');
	}

	/**
	 * To be called after create, before render
	 * @param width 
	 * @param height 
	 */
	public setWindowSize(width: number, height: number)
	{
		this.windowBorder.setSize(width, height);
		this.minimizeButton.setX(width - 138);
		this.closeButton.setX(width - 75);
		this.insideRect.setSize(width - 17, height - 63);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
