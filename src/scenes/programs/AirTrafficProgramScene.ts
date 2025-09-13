/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import PointerButton from "../../components/PointerButton";
/* START-USER-IMPORTS */
import Plane from "~/air-control/Plane";
import { ProgramBaseScene } from "./ProgramScene";
import PlaneManager from "~/air-control/PlaneManager";
/* END-USER-IMPORTS */

export default class AirTrafficProgramScene extends ProgramBaseScene {
  constructor() {
    super("air-traffic-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // backing
    const backing = this.add.rectangle(0, 60, 700, 500);
    backing.setOrigin(0, 0);
    backing.visible = false;
    backing.isFilled = true;
    mainContainer.add(backing);

    // warningContainer
    const warningContainer = this.add.container(-397, -224);
    warningContainer.visible = false;
    mainContainer.add(warningContainer);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(499, 367, 113, 65);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 16714250;
    warningContainer.add(rectangle_1);

    // bitmaptext_1
    const bitmaptext_1 = this.add.bitmapText(
      454,
      347,
      "nokia",
      "Collision \nImminent"
    );
    bitmaptext_1.text = "Collision \nImminent";
    bitmaptext_1.fontSize = -16;
    bitmaptext_1.align = 1;
    warningContainer.add(bitmaptext_1);

    // upButton
    const upButton = this.add.rectangle(39, 95, 250, 70);
    upButton.setOrigin(0, 0);
    upButton.isFilled = true;
    upButton.fillColor = 12500670;
    upButton.isStroked = true;
    upButton.strokeColor = 8092539;
    upButton.lineWidth = 2;
    mainContainer.add(upButton);

    // bitmaptext_2
    const bitmaptext_2 = this.add.bitmapText(165, 110, "nokia", "Change alt");
    bitmaptext_2.setOrigin(0.5, 0);
    bitmaptext_2.tintTopLeft = 5921370;
    bitmaptext_2.tintTopRight = 5921370;
    bitmaptext_2.tintBottomLeft = 5921370;
    bitmaptext_2.tintBottomRight = 5921370;
    bitmaptext_2.text = "Change alt";
    bitmaptext_2.fontSize = -32;
    bitmaptext_2.align = 1;
    mainContainer.add(bitmaptext_2);

    // downButton
    const downButton = this.add.rectangle(40, 180, 180, 70);
    downButton.setOrigin(0, 0);
    downButton.visible = false;
    downButton.isFilled = true;
    downButton.fillColor = 12500670;
    downButton.isStroked = true;
    downButton.strokeColor = 8092539;
    downButton.lineWidth = 2;
    mainContainer.add(downButton);

    // bitmaptext
    const bitmaptext = this.add.bitmapText(131, 195, "nokia", "Descend");
    bitmaptext.setOrigin(0.5, 0);
    bitmaptext.visible = false;
    bitmaptext.tintTopLeft = 5921370;
    bitmaptext.tintTopRight = 5921370;
    bitmaptext.tintBottomLeft = 5921370;
    bitmaptext.tintBottomRight = 5921370;
    bitmaptext.text = "Descend";
    bitmaptext.fontSize = -32;
    bitmaptext.align = 1;
    mainContainer.add(bitmaptext);

    // upButton (components)
    const upButtonPointerButton = new PointerButton(upButton);
    upButtonPointerButton.setAlpha = true;

    // downButton (components)
    const downButtonPointerButton = new PointerButton(downButton);
    downButtonPointerButton.setAlpha = true;

    this.warningContainer = warningContainer;
    this.upButton = upButton;
    this.downButton = downButton;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private warningContainer!: Phaser.GameObjects.Container;
  private upButton!: Phaser.GameObjects.Rectangle;
  private downButton!: Phaser.GameObjects.Rectangle;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  private line: Phaser.Curves.Line;
  private path: Phaser.Curves.Path;
  private tween: Phaser.Tweens.Tween;

  private planeManager: PlaneManager;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(700, 450, "Air Traffic Control.exe");
    this.editorCreate();

    this.planeManager = new PlaneManager(this, this.mainContainer);

    // mask
    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    // this.input.keyboard?.on("keydown-ENTER", () => {
    //   let coordinates = this.planeManager.generateCoordinatePair();
    //   this.planeManager.activatePlane(coordinates.startPos, coordinates.endPos);
    // });

    this.upButton.on("click", () => {
      this.planeManager.changeSelectedPlaneAltitude(true);
    });
    this.downButton.on("click", () => {
      this.planeManager.changeSelectedPlaneAltitude(false);
    });
  }

  update(): void {
    // if (
    //   Phaser.Geom.Intersects.CircleToCircle(
    //     this.plane.hitCircle,
    //     this.plane2.hitCircle
    //   )
    // ) {
    //   this.plane.hitCircleGraphic.alpha = 0.3;
    //   this.plane2.hitCircleGraphic.alpha = 0.3;
    // } else {
    //   this.plane.hitCircleGraphic.alpha = 0.1;
    //   this.plane2.hitCircleGraphic.alpha = 0.1;
    // }
    // if (
    //   Phaser.Geom.Intersects.CircleToCircle(
    //     this.plane.warningCircle,
    //     this.plane2.warningCircle
    //   )
    // ) {
    //   this.plane.warningCircleGraphic.alpha = 0.3;
    //   this.plane2.warningCircleGraphic.alpha = 0.3;
    // } else {
    //   this.plane.warningCircleGraphic.alpha = 0.1;
    //   this.plane2.warningCircleGraphic.alpha = 0.1;
    // }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
