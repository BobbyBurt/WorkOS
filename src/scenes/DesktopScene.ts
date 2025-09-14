/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import IconPrefab from "../prefabs/IconPrefab";
/* START-USER-IMPORTS */
import fullscreenHandler from "~/FullscreenHandler";
import { ProgramBaseScene } from "./programs/ProgramScene";
import DebugScene from "./DebugScene";
/* END-USER-IMPORTS */

export default class DesktopScene extends Phaser.Scene {

	constructor() {
		super("desktop");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// monitorEdge1
		const monitorEdge1 = this.add.rectangle(700, 148, 1050, 670);
		monitorEdge1.setOrigin(0, 0);
		monitorEdge1.isFilled = true;
		monitorEdge1.fillColor = 13882323;

		// wallpaperColour
		const wallpaperColour = this.add.rectangle(700, 148, 1050, 670);
		wallpaperColour.setOrigin(0, 0);
		wallpaperColour.isFilled = true;
		wallpaperColour.fillColor = 3303823;

		// desktop_bg
		const desktop_bg = this.add.image(832, 150, "desktop-bg");
		desktop_bg.scaleX = 0.627023628394695;
		desktop_bg.scaleY = 0.627023628394695;
		desktop_bg.setOrigin(0, 0);

		// icon
		const icon = new IconPrefab(this, 789, 364);
		this.add.existing(icon);

		// icon_1
		const icon_1 = new IconPrefab(this, 1446, 306);
		this.add.existing(icon_1);

		// desktopRect
		const desktopRect = this.add.rectangle(700, 148, 1050, 600);
		desktopRect.setOrigin(0, 0);
		desktopRect.fillColor = 16711937;
		desktopRect.fillAlpha = 0.2;
		desktopRect.strokeColor = 16726843;

		// icon_3
		const icon_3 = new IconPrefab(this, 1022, 244);
		this.add.existing(icon_3);

		// icon_4
		const icon_4 = new IconPrefab(this, 1097, 592);
		this.add.existing(icon_4);

		// icon_2
		const icon_2 = new IconPrefab(this, 1326, 512);
		this.add.existing(icon_2);

		// icon_5
		const icon_5 = new IconPrefab(this, 1546, 492);
		this.add.existing(icon_5);

		// icon (prefab fields)
		icon.programName = "ATC";
		icon.iconTextureKey = "page-go-icon_1";
		icon.sceneKey = "air-traffic-program";

		// icon_1 (prefab fields)
		icon_1.programName = "Fullscreen";
		icon_1.iconTextureKey = "window-icon";
		icon_1.sceneKey = "email-program";

		// icon_3 (prefab fields)
		icon_3.programName = "Camera";
		icon_3.iconTextureKey = "picture-icon";
		icon_3.sceneKey = "camera-program";

		// icon_4 (prefab fields)
		icon_4.programName = "DATABASE";
		icon_4.iconTextureKey = "terminal-icon";
		icon_4.sceneKey = "database-program";

		// icon_2 (prefab fields)
		icon_2.programName = "Browser";
		icon_2.iconTextureKey = "find-icon";
		icon_2.sceneKey = "search-program";

		// icon_5 (prefab fields)
		icon_5.programName = "Test Site";
		icon_5.iconTextureKey = "page-go-icon_1";
		icon_5.sceneKey = "test-website-program";

		this.desktopRect = desktopRect;

		this.events.emit("scene-awake");
	}

	public desktopRect!: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

  public desktopGeomRect!: Phaser.Geom.Rectangle;

  private debugScene: DebugScene;

  create() {
    this.editorCreate();

    // this.scale.on("enterfullscreen", this.resize, this);
    // this.scale.on("leavefullscreen", this.unFullscreen, this);

    fullscreenHandler.adjustCamera(this.cameras.main);

    this.debugScene = this.scene.get("debug") as DebugScene;

    this.desktopGeomRect = new Phaser.Geom.Rectangle(
      this.desktopRect.x,
      this.desktopRect.y,
      this.desktopRect.width,
      this.desktopRect.height
    );

    // this.cameras.main.postFX.addBarrel(1.05);

    this.game.events.on("scene-created: program", () => {});

    // this.window.setWindowSize(700, 300);
    // this.window_1.setWindowSize(500, 500);
    // this.window_2.setWindowSize(700, 500);

    this.input.on("pointermove", () => {
      this.debugScene.DisplayVar("pointerX", this.input.activePointer.x);
      this.debugScene.DisplayVar("pointerY", this.input.activePointer.y);
    });
  }

  update() {}

  public addWindow(sceneKey: string) {
    // this.scene.launch(sceneKey);
    let programScene = this.scene.get(sceneKey) as ProgramBaseScene;
    if (!this.scene.isActive(sceneKey)) {
      this.scene.launch(sceneKey);
      this.scene.bringToTop("overlap");
    } else if (programScene.minimized) {
      programScene.setMinimize(false);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
