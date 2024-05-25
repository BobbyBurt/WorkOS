/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
import DebugScene from "~/scenes/DebugScene";
import eventKeys from "~/data/eventKeys";
import { ProgramBaseScene } from "~/scenes/programs/ProgramScene";
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

		// dragRect
		const dragRect = scene.add.rectangle(0, 0, 850, 65);
		dragRect.setOrigin(0, 0);
		dragRect.alpha = 0.001;
		dragRect.isFilled = true;
		this.add(dragRect);

		// icon_temp
		const icon_temp = scene.add.image(38, 35, "icon-temp");
		icon_temp.scaleX = 1.7389250244694119;
		icon_temp.scaleY = 1.7389250244694119;
		this.add(icon_temp);

		// programNameText
		const programNameText = scene.add.bitmapText(63, 27, "nokia", "New BitmapText");
		programNameText.text = "New BitmapText";
		programNameText.fontSize = -16;
		this.add(programNameText);

		// minimizeButton (components)
		new PointerButton(minimizeButton);

		// closeButton (components)
		new PointerButton(closeButton);

		this.insideRect = insideRect;
		this.windowBorder = windowBorder;
		this.minimizeButton = minimizeButton;
		this.closeButton = closeButton;
		this.dragRect = dragRect;
		this.icon_temp = icon_temp;
		this.programNameText = programNameText;

		/* START-USER-CTR-CODE */

    this.create();

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    /* END-USER-CTR-CODE */
	}

	public insideRect: Phaser.GameObjects.Rectangle;
	public windowBorder: Phaser.GameObjects.NineSlice;
	private minimizeButton: Phaser.GameObjects.Image;
	private closeButton: Phaser.GameObjects.Image;
	public dragRect: Phaser.GameObjects.Rectangle;
	private icon_temp: Phaser.GameObjects.Image;
	public programNameText: Phaser.GameObjects.BitmapText;

	/* START-USER-CODE */

  private programScene: ProgramBaseScene;

  create() {
    this.programScene = this.scene as ProgramBaseScene;

    this.closeButton.on(eventKeys.UI.click, this.onCloseButton, this);
    this.minimizeButton.on(eventKeys.UI.click, this.onMinimizeButton, this);

    this.programNameText.setText(this.programScene.name);
    // TODO: set icon

    if (this.programScene.hackProgram) {
      this.windowBorder.setTint(0x15ff06);
    }
  }

  private onCloseButton() {
    this.programScene.close();
  }

  private onMinimizeButton() {
    this.programScene.setMinimize(true);
  }

  /**
   * To be called after create, before render
   * @param width
   * @param height
   */
  public setWindowSize(width: number, height: number) {
    this.windowBorder.setSize(width, height);
    this.minimizeButton.setX(width - 138);
    this.closeButton.setX(width - 75);
    this.insideRect.setSize(width - 17, height - 63);
    this.dragRect.setSize(width - 150, this.dragRect.height);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
