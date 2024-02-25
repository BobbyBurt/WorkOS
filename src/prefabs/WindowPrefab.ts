
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

		// window
		const window = scene.add.rectangle(0, 0, 1000, 800);
		window.setOrigin(0, 0);
		window.visible = false;
		window.isFilled = true;
		this.add(window);

		// topBar
		const topBar = scene.add.rectangle(0, 0, 1000, 50);
		topBar.setOrigin(0, 0);
		topBar.visible = false;
		topBar.isFilled = true;
		topBar.fillColor = 12566463;
		this.add(topBar);

		// insideRect
		const insideRect = scene.add.rectangle(9, 60, 983, 240);
		insideRect.setOrigin(0, 0);
		insideRect.isFilled = true;
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

		this.window = window;
		this.topBar = topBar;
		this.insideRect = insideRect;
		this.windowBorder = windowBorder;
		this.minimizeButton = minimizeButton;
		this.closeButton = closeButton;

		/* START-USER-CTR-CODE */

		this.create();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	public window: Phaser.GameObjects.Rectangle;
	private topBar: Phaser.GameObjects.Rectangle;
	public insideRect: Phaser.GameObjects.Rectangle;
	public windowBorder: Phaser.GameObjects.NineSlice;
	private minimizeButton: Phaser.GameObjects.Image;
	private closeButton: Phaser.GameObjects.Image;
	public displayName: string = "Unnamed Window";

	/* START-USER-CODE */

	private pageSize: { width: number, height: number }
	public minimized = false;

	private debugScene: DebugScene;

	private minimizeTween: Phaser.Tweens.Tween;

	create()
	{
		this.debugScene = this.scene.scene.get('debug-scene') as DebugScene;

		this.pageSize = { height: 0, width: 0};
		this.pageSize.height = this.getBounds().height;
		this.pageSize.width = this.getBounds().width;

		this.window.setInteractive();
		this.window.on('wheel', (pointer: any, deltaX: any, deltaY: any, deltaZ: any) =>
		{
			// let y = this.page.y - deltaY;
			// y = Phaser.Math.Clamp(y, -this.pageSize.height + this.window.height, 0);
			// this.page.setY(y);
		});

		// this.windowBorder.setInteractive({ draggable: true });
		// this.windowBorder.on('drag', (pointer: Phaser.Input.Pointer, dragX: any, dragY: any) =>
		// {
		// 	this.setPosition(dragX, dragY);

		// 	// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

		// 	this.y = Phaser.Math.Clamp(this.y, 0, 2000);
		// });

		this.closeButton.on('pointerdown', this.close, this);

		this.minimizeButton.on('click', this.setMinimize, this);
	}

	/**
	 * Toggle minimize
	 * 
	 * Later this will be an actual set with a bool parameter
	 */
	public setMinimize()
	{
		let endAlpha = (this.minimized ? 1 : 0);
		let endScale = (this.minimized ? 1 : .8);

		if (this.minimizeTween)
		{
			this.minimizeTween.stop();
		}
		this.minimizeTween = this.scene.tweens.add
		({
			targets: this,
			duration: 1000,
			ease: Phaser.Math.Easing.Linear,
			alpha: endAlpha,
			scale: endScale,
			onComplete: () =>
			{
				this.minimized = !this.minimized
			}
		});
	}

	private close()
	{	
		this.destroy();
	}

	update()
	{
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
