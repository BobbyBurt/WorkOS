/** @format */

// You can write more code here

import { ProgramBaseScene } from "./ProgramScene";

/* START OF COMPILED CODE */

import ScrollField from "../../components/ScrollField";
import PointerButton from "../../components/PointerButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EmailProgramScene extends ProgramBaseScene {
  constructor() {
    super("email-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // scrollTestMask
    const scrollTestMask = this.add.rectangle(371, 110, 300, 400);
    scrollTestMask.setOrigin(0, 0);
    scrollTestMask.isFilled = true;
    scrollTestMask.fillColor = 13487565;

    // scrollContainerTest
    const scrollContainerTest = this.add.container(361, 122);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(287, 229, 128, 128);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 13195095;
    scrollContainerTest.add(rectangle_1);

    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // start_button
    const start_button = this.add.image(182, 245, "start-button");
    mainContainer.add(start_button);

    // desktop_gen
    const desktop_gen = this.add.image(219, 291, "desktop-gen");
    desktop_gen.scaleX = 0.2451008495379191;
    desktop_gen.scaleY = 0.2451008495379191;
    mainContainer.add(desktop_gen);

    // scrollContainerTest (components)
    const scrollContainerTestScrollField = new ScrollField(scrollContainerTest);
    scrollContainerTestScrollField.maskRect = scrollTestMask;

    // start_button (components)
    new PointerButton(start_button);

    this.scrollTestMask = scrollTestMask;
    this.scrollContainerTest = scrollContainerTest;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private scrollTestMask!: Phaser.GameObjects.Rectangle;
  private scrollContainerTest!: Phaser.GameObjects.Container;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  // Write your code here

  readonly width = 700;
  readonly height = 500;

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(this.width, this.height, "Email Looker 2001");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();

    // TEST: mask scroll field
    this.mask = this.scrollTestMask.createGeometryMask();
    this.scrollContainerTest.setMask(this.mask);
  }

  create() {
    this.setup();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
