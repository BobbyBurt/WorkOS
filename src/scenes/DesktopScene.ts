
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import IconPrefab from "../prefabs/IconPrefab";
import WindowPrefab from "../prefabs/WindowPrefab";
import TaskbarPrefab from "../prefabs/TaskbarPrefab";
/* START-USER-IMPORTS */
import { preload, editorCreate } from "./programs/TestProgramScene";
/* END-USER-IMPORTS */

export default class DesktopScene extends Phaser.Scene {

	constructor() {
		super("desktop-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.rectangle(0, 0, 1920, 1080);
		background.setOrigin(0, 0);
		background.isFilled = true;
		background.fillColor = 8505528;

		// icon
		const icon = new IconPrefab(this, 758, 65);
		this.add.existing(icon);

		// icon_1
		const icon_1 = new IconPrefab(this, 936, 101);
		this.add.existing(icon_1);

		// icon_2
		const icon_2 = new IconPrefab(this, 596, 106);
		this.add.existing(icon_2);

		// window
		const window = new WindowPrefab(this, 1754, 810);
		this.add.existing(window);
		window.visible = false;

		// windowMask
		const windowMask = this.add.image(456, 209, "white-px");
		windowMask.scaleX = 1400;
		windowMask.scaleY = 800;
		windowMask.setOrigin(0, 0);
		windowMask.visible = false;

		// taskBar
		const taskBar = new TaskbarPrefab(this, 250, 985);
		this.add.existing(taskBar);

		// monitorEdge1
		const monitorEdge1 = this.add.rectangle(0, 0, 250, 1080);
		monitorEdge1.setOrigin(0, 0);
		monitorEdge1.isFilled = true;
		monitorEdge1.fillColor = 14668696;

		// monitorEdge2
		const monitorEdge2 = this.add.rectangle(1920, 0, 250, 1080);
		monitorEdge2.setOrigin(1, 0);
		monitorEdge2.isFilled = true;
		monitorEdge2.fillColor = 14668696;

		// monitorEdge3
		const monitorEdge3 = this.add.rectangle(0, 0, 1920, 25);
		monitorEdge3.setOrigin(0, 0);
		monitorEdge3.isFilled = true;
		monitorEdge3.fillColor = 14668696;

		// monitorEdge4
		const monitorEdge4 = this.add.rectangle(0, 1080, 1920, 25);
		monitorEdge4.setOrigin(0, 1);
		monitorEdge4.isFilled = true;
		monitorEdge4.fillColor = 14668696;

		// windowTopBar
		const windowTopBar = this.add.rectangle(421, 357, 1000, 50);
		windowTopBar.setOrigin(0, 0);
		windowTopBar.isFilled = true;

		// icon (prefab fields)
		icon.programName = "Browser";
		icon.iconTextureKey = "Tank";
		icon.pageKey = "web-page";

		// icon_1 (prefab fields)
		icon_1.programName = "Fullscreen";
		icon_1.iconTextureKey = "ToidSketch";

		// icon_2 (prefab fields)
		icon_2.programName = "Browser";
		icon_2.iconTextureKey = "Tank";
		icon_2.pageKey = "zoom-page";

		// window (prefab fields)
		window.displayName = "Homepage";

		this.window = window;
		this.windowMask = windowMask;
		this.windowTopBar = windowTopBar;

		this.events.emit("scene-awake");
	}

	public window!: WindowPrefab;
	private windowMask!: Phaser.GameObjects.Image;
	private windowTopBar!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	private masko!: Phaser.Display.Masks.BitmapMask;

	private windows: Array<WindowPrefab>;

	create() {

		this.editorCreate();

		this.scale.on('enterfullscreen', this.resize, this);
		this.scale.on('leavefullscreen', this.unFullscreen, this);

		this.cameras.main.setZoom(.5);
		this.cameras.main.centerOn(960, 540);

		this.windowTopBar.setInteractive({ draggable: true });
		this.windowTopBar.on('drag', (pointer: Phaser.Input.Pointer, dragX: any, dragY: any) =>
		{
			this.windowTopBar.setPosition(dragX, dragY);

			// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

			// this.windowTopBar.y = Phaser.Math.Clamp(this.windowTopBar.y, 0, 2000);
		});
	}

	update()
	{
		// this.windowMask.setPosition(this.window.x, this.window.y);
		// this.windowMask.setScale(this.window.window.width, this.window.window.height);

		// let testProgramScene = this.scene.get('test-program-scene');
		// testProgramScene.cameras.main.setViewport(this.windowTopBar.x / 2, this.windowTopBar.y /2, 500, 400)
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

	public addWindow(sceneKey: string)
	{
		// const window = new WindowPrefab(this, 300, 300);
		// this.add.existing(window);
		// window.setMask(this.windowMask.createBitmapMask());

		// this.scene.launch('test-program-scene');

		editorCreate.call(this);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
