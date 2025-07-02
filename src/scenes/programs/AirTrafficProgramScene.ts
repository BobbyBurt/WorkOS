/** @format */

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import PlaneIcon from "~/air-control/PlaneIcon";
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

    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

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
    super.create(900, 700, "Air Traffic Control.exe");
    this.editorCreate();

    this.planeManager = new PlaneManager(this, this.mainContainer);

    // mask
    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    this.input.keyboard?.on("keydown-ENTER", () => {
      let coordinates = this.planeManager.generateCoordinates();
      this.planeManager.activatePlane(coordinates.startPos, coordinates.endPos);
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
