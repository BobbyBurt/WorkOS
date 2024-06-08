/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import DesktopScene from "~/scenes/DesktopScene";
/* END-USER-IMPORTS */

export default class IconPrefab extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x?: number, y?: number) {
    super(scene, x ?? 0, y ?? 0);

    // iconImage
    const iconImage = scene.add.image(9, 5, "picture-icon");
    iconImage.scaleX = 4.115525366501524;
    iconImage.scaleY = 4.115525366501524;
    iconImage.setOrigin(0, 0);
    this.add(iconImage);

    // selectRect
    const selectRect = scene.add.rectangle(-25, 0, 140, 170);
    selectRect.setOrigin(0, 0);
    selectRect.alpha = 0.001;
    selectRect.isFilled = true;
    selectRect.fillColor = 1544191;
    selectRect.fillAlpha = 0.2;
    selectRect.isStroked = true;
    selectRect.strokeColor = 1544191;
    selectRect.strokeAlpha = 0.5;
    selectRect.lineWidth = 2;
    this.add(selectRect);

    // nameText
    const nameText = scene.add.bitmapText(44, 120, "nokia", "New BitmapText");
    nameText.setOrigin(0.5, 0);
    nameText.text = "New BitmapText";
    nameText.fontSize = -16;
    nameText.align = 1;
    this.add(nameText);

    this.iconImage = iconImage;
    this.selectRect = selectRect;
    this.nameText = nameText;

    /* START-USER-CTR-CODE */

    this.scene.events.once("scene-awake", this.start, this);

    /* END-USER-CTR-CODE */
  }

  private iconImage: Phaser.GameObjects.Image;
  private selectRect: Phaser.GameObjects.Rectangle;
  private nameText: Phaser.GameObjects.BitmapText;
  public programName: string = "";
  public iconTextureKey: string = "ToidSketch";
  public sceneKey: string = "";

  /* START-USER-CODE */

  private start() {
    // apply properties
    this.iconImage.setTexture(this.iconTextureKey);
    this.nameText.setText(this.programName);

    // setup input
    this.selectRect.setInteractive({ useHandCursor: true });
    this.selectRect.on("pointerover", this.pointerOver, this);
    this.selectRect.on("pointerout", this.pointerOut, this);
    this.selectRect.on("pointerdown", this.pointerDown, this);
    this.selectRect.on("pointerup", this.pointerUp, this);
  }

  private pointerOver() {
    this.selectRect.setAlpha(0.5);
  }

  private pointerOut() {
    this.selectRect.setAlpha(0.001);
  }

  private pointerDown() {
    this.selectRect.setAlpha(1);
  }

  private pointerUp() {
    // fullscreen
    if (this.programName === "Fullscreen") {
      this.scene.scale.startFullscreen();

      return;
    }

    let desktopScene = this.scene as DesktopScene;
    desktopScene.addWindow(this.sceneKey);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
