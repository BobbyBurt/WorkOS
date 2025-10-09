/** @format */

// You can write more code here

/* START OF COMPILED CODE */

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
    const insideRect = scene.add.rectangle(4, 43, 983, 240);
    insideRect.setOrigin(0, 0);
    insideRect.visible = false;
    insideRect.isFilled = true;
    insideRect.fillColor = 11349293;
    this.add(insideRect);

    // windowBorder
    const windowBorder = scene.add.nineslice(
      0,
      0,
      "window",
      undefined,
      256,
      256,
      16,
      18,
      45,
      6
    );
    windowBorder.setOrigin(0, 0);
    this.add(windowBorder);

    // minimizeButton
    const minimizeButton = scene.add.image(862, 1, "window-minimize-button");
    minimizeButton.setOrigin(0, 0);
    minimizeButton.visible = false;
    this.add(minimizeButton);

    // closeButton
    const closeButton = scene.add.image(925, 5, "window-close-button");
    closeButton.setOrigin(0, 0);
    closeButton.visible = false;
    this.add(closeButton);

    // dragRect
    const dragRect = scene.add.rectangle(0, 0, 850, 65);
    dragRect.setOrigin(0, 0);
    dragRect.alpha = 0.001;
    dragRect.isFilled = true;
    this.add(dragRect);

    // icon_temp
    const icon_temp = scene.add.image(25, 23, "picture-icon");
    icon_temp.scaleX = 1.7389250244694119;
    icon_temp.scaleY = 1.7389250244694119;
    icon_temp.visible = false;
    this.add(icon_temp);

    // programNameText
    const programNameText = scene.add.bitmapText(
      22,
      11,
      "IBMPlexMono-bold",
      "New BitmapText"
    );
    programNameText.text = "New BitmapText";
    programNameText.fontSize = 24;
    this.add(programNameText);

    // button
    const button = scene.add.nineslice(
      222,
      11,
      "button",
      undefined,
      35,
      35,
      5,
      5,
      7,
      10
    );
    button.setOrigin(0, 0);
    this.add(button);

    // newCloseButton
    const newCloseButton = scene.add.bitmapText(231, 6, "IBMPlexMono", "x");
    newCloseButton.tintTopLeft = 0;
    newCloseButton.tintTopRight = 0;
    newCloseButton.tintBottomLeft = 0;
    newCloseButton.tintBottomRight = 0;
    newCloseButton.text = "x";
    newCloseButton.fontSize = 36;
    this.add(newCloseButton);

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
    this.newCloseButton = newCloseButton;

    /* START-USER-CTR-CODE */

    this.create();

    this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);

    /* END-USER-CTR-CODE */
  }

  public insideRect: Phaser.GameObjects.Rectangle;
  private windowBorder: Phaser.GameObjects.NineSlice;
  private minimizeButton: Phaser.GameObjects.Image;
  private closeButton: Phaser.GameObjects.Image;
  public dragRect: Phaser.GameObjects.Rectangle;
  private icon_temp: Phaser.GameObjects.Image;
  public programNameText: Phaser.GameObjects.BitmapText;
  public newCloseButton: Phaser.GameObjects.BitmapText;

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
    this.newCloseButton.setX(width - 75);
    this.closeButton.setX(width - 75);
    this.insideRect.setSize(width - 10, height - 50);
    this.dragRect.setSize(width - 150, this.dragRect.height);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
