
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import IconPrefab from "../prefabs/IconPrefab";
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

		// moniter
		const moniter = this.add.image(127, 0, "moniter");
		moniter.setOrigin(0, 0);

		// desktopRect
		const desktopRect = this.add.rectangle(387, 70, 1165, 860);
		desktopRect.setOrigin(0, 0);
		desktopRect.visible = false;
		desktopRect.isFilled = true;

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

		this.windowMask = windowMask;
		this.desktopRect = desktopRect;

		this.events.emit("scene-awake");
	}

	private windowMask!: Phaser.GameObjects.Image;
	public desktopRect!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	public desktopGeomRect!: Phaser.Geom.Rectangle;

	create() {

		this.editorCreate();

		// this.scale.on('enterfullscreen', this.resize, this);
		// this.scale.on('leavefullscreen', this.unFullscreen, this);

		this.cameras.main.centerOn(960, 540);

		this.desktopGeomRect = new Phaser.Geom.Rectangle
		(
			this.desktopRect.x,
			this.desktopRect.y,
			this.desktopRect.width,
			this.desktopRect.height
		);

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
		this.scene.bringToTop('overlap-scene');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
