
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import IconPrefab from "../prefabs/IconPrefab";
import TaskbarPrefab from "../prefabs/TaskbarPrefab";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DesktopScene extends Phaser.Scene {

	constructor() {
		super("desktop-scene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// monitorEdge1
		const monitorEdge1 = this.add.rectangle(0, 0, 1920, 1080);
		monitorEdge1.setOrigin(0, 0);
		monitorEdge1.isFilled = true;
		monitorEdge1.fillColor = 13882323;

		// desktop_bg
		const desktop_bg = this.add.image(334, 0, "desktop-bg");
		desktop_bg.setOrigin(0, 0);

		// icon
		const icon = new IconPrefab(this, 758, 65);
		this.add.existing(icon);

		// icon_1
		const icon_1 = new IconPrefab(this, 936, 101);
		this.add.existing(icon_1);

		// icon_2
		const icon_2 = new IconPrefab(this, 794, 368);
		this.add.existing(icon_2);

		// windowMask
		const windowMask = this.add.image(456, 209, "white-px");
		windowMask.scaleX = 1400;
		windowMask.scaleY = 800;
		windowMask.setOrigin(0, 0);
		windowMask.visible = false;

		// taskBar
		const taskBar = new TaskbarPrefab(this, 323, 934);
		this.add.existing(taskBar);

		// moniter
		const moniter = this.add.image(127, 0, "moniter");
		moniter.setOrigin(0, 0);

		// windowContainer
		const windowContainer = this.add.container(2316, 697);

		// backing
		const backing = this.add.rectangle(11, 13, 980, 280);
		backing.setOrigin(0, 0);
		backing.isFilled = true;
		windowContainer.add(backing);

		// windowBorder
		const windowBorder = this.add.nineslice(0, 0, "window-title-bar", undefined, 1000, 300, 43, 39, 63, 20);
		windowBorder.setOrigin(0, 0);
		windowContainer.add(windowBorder);

		// closeButton
		const closeButton = this.add.image(925, -1, "window-close-button");
		closeButton.setOrigin(0, 0);
		windowContainer.add(closeButton);

		// minimizeButton
		const minimizeButton = this.add.image(862, -5, "window-minimize-button");
		minimizeButton.setOrigin(0, 0);
		windowContainer.add(minimizeButton);

		// icon (prefab fields)
		icon.programName = "Browser";
		icon.iconTextureKey = "Tank";

		// icon_1 (prefab fields)
		icon_1.programName = "Fullscreen";
		icon_1.iconTextureKey = "ToidSketch";

		// icon_2 (prefab fields)
		icon_2.programName = "Program";
		icon_2.iconTextureKey = "Tank";
		icon_2.sceneKey = "program-scene";

		// closeButton (components)
		new PointerButton(closeButton);

		// minimizeButton (components)
		new PointerButton(minimizeButton);

		this.windowMask = windowMask;

		this.events.emit("scene-awake");
	}

	private windowMask!: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// private programs: Array<{
	// 	scene: Phaser.Scene,
	// 	window: WindowPrefab
	// }>;

	create() {

		this.editorCreate();

		// this.scale.on('enterfullscreen', this.resize, this);
		// this.scale.on('leavefullscreen', this.unFullscreen, this);

		this.cameras.main.centerOn(960, 540);

		// this.windowTopBar.setInteractive({ draggable: true });
		// this.windowTopBar.on('drag', (pointer: Phaser.Input.Pointer, dragX: any, dragY: any) =>
		// {
		// 	this.windowTopBar.setPosition(dragX, dragY);

		// 	// Okay im not having any luck fixing this. The issue has to do with the top bar being the interactable thing but the container is what's being moved. Dragging resets it to 0, 0. I tried having the container interactive with a set size, but that size is really small for some reason, the size is wack.

		// 	// this.windowTopBar.y = Phaser.Math.Clamp(this.windowTopBar.y, 0, 2000);
		// });

		this.game.events.on('scene-created: program-scene', () =>
		{

		});

		// this.window.setWindowSize(700, 300);
		// this.window_1.setWindowSize(500, 500);
		// this.window_2.setWindowSize(700, 500);
	}

	update()
	{

	}

	public addWindow(sceneKey: string)
	{
		// this.scene.launch(sceneKey);
		this.scene.launch('template-program-scene');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
