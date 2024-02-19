
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import webPage from "./pages/webPage";
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
		window.isFilled = true;
		this.add(window);

		// page
		const page = new webPage(scene, 0, 0);
		this.add(page);

		// topBar
		const topBar = scene.add.rectangle(0, 0, 1000, 50);
		topBar.setOrigin(0, 0);
		topBar.isFilled = true;
		topBar.fillColor = 12566463;
		this.add(topBar);

		// exitButton
		const exitButton = scene.add.rectangle(900, 0, 100, 50);
		exitButton.setOrigin(0, 0);
		exitButton.isFilled = true;
		exitButton.fillColor = 15104120;
		this.add(exitButton);

		// minimizeButton
		const minimizeButton = scene.add.rectangle(799, 0, 100, 50);
		minimizeButton.setOrigin(0, 0);
		minimizeButton.isFilled = true;
		minimizeButton.fillColor = 14540253;
		this.add(minimizeButton);

		// exitButton (components)
		new PointerButton(exitButton);

		// minimizeButton (components)
		new PointerButton(minimizeButton);

		this.window = window;
		this.page = page;
		this.topBar = topBar;
		this.exitButton = exitButton;
		this.minimizeButton = minimizeButton;

		/* START-USER-CTR-CODE */

		this.create();

		this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

		/* END-USER-CTR-CODE */
	}

	public window: Phaser.GameObjects.Rectangle;
	private page: webPage;
	private topBar: Phaser.GameObjects.Rectangle;
	private exitButton: Phaser.GameObjects.Rectangle;
	private minimizeButton: Phaser.GameObjects.Rectangle;
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
			let y = this.page.y - deltaY;
			y = Phaser.Math.Clamp(y, -this.pageSize.height + this.window.height, 0);
			this.page.setY(y);
		});

		this.topBar.setInteractive({ draggable: true });
		this.topBar.on('drag', (pointer: Phaser.Input.Pointer, dragX: any, dragY: any) =>
		{
			this.setPosition(dragX, dragY);

			// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

			this.y = Phaser.Math.Clamp(this.y, 0, 2000);
		});

		this.exitButton.on('pointerdown', this.close, this);

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

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
