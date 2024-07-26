/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BrowserBarPrefab extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x?: number, y?: number) {
    super(scene, x ?? 0, y ?? 0);

    // rectangle_1
    const rectangle_1 = scene.add.rectangle(0, 0, 900, 50);
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 11389676;
    this.add(rectangle_1);

    // rectangle
    const rectangle = scene.add.rectangle(443, 26, 700, 30);
    rectangle.isFilled = true;
    rectangle.fillColor = 4811175;
    this.add(rectangle);

    // linkText
    const linkText = scene.add.bitmapText(108, 18, "nokia", "New BitmapText");
    linkText.text = "New BitmapText";
    linkText.fontSize = -12;
    this.add(linkText);

    // backButton
    const backButton = scene.add.rectangle(31, 26, 40, 30);
    backButton.isFilled = true;
    backButton.fillColor = 5196199;
    this.add(backButton);

    // bitmaptext_5
    const bitmaptext_5 = scene.add.bitmapText(24, 13, "nokia", "<");
    bitmaptext_5.text = "<";
    bitmaptext_5.fontSize = -22;
    this.add(bitmaptext_5);

    // backButton (components)
    new PointerButton(backButton);

    this.linkText = linkText;
    this.backButton = backButton;

    /* START-USER-CTR-CODE */
    this.setup(scene);
    /* END-USER-CTR-CODE */
  }

  public linkText: Phaser.GameObjects.BitmapText;
  public backButton: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  setup(scene: Phaser.Scene) {}

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
