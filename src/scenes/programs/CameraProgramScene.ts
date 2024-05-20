/** @format */

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { employeeName } from "~/employees/EmployeeDirectory";
import { ProgramBaseScene } from "./ProgramScene";
/* END-USER-IMPORTS */

export default class CameraProgramScene extends ProgramBaseScene {
  constructor() {
    super("camera-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // meeting_working
    const meeting_working = this.add.sprite(1.5, 61.5, "meeting-working");
    meeting_working.setOrigin(0, 0);
    mainContainer.add(meeting_working);

    // meeting_working_1
    const meeting_working_1 = this.add.sprite(234.5, 61.5, "meeting-working");
    meeting_working_1.setOrigin(0, 0);
    meeting_working_1.tintTopLeft = 16742263;
    meeting_working_1.tintTopRight = 16742263;
    meeting_working_1.tintBottomLeft = 16742263;
    meeting_working_1.tintBottomRight = 16742263;
    mainContainer.add(meeting_working_1);

    // meeting_working_2
    const meeting_working_2 = this.add.sprite(467.5, 61.5, "meeting-working");
    meeting_working_2.setOrigin(0, 0);
    meeting_working_2.tintTopLeft = 16318327;
    meeting_working_2.tintTopRight = 16318327;
    meeting_working_2.tintBottomLeft = 16318327;
    meeting_working_2.tintBottomRight = 16318327;
    mainContainer.add(meeting_working_2);

    // meeting_working_3
    const meeting_working_3 = this.add.sprite(1.5, 214.5, "meeting-working");
    meeting_working_3.setOrigin(0, 0);
    mainContainer.add(meeting_working_3);

    // meeting_working_4
    const meeting_working_4 = this.add.sprite(234.5, 214.5, "meeting-working");
    meeting_working_4.setOrigin(0, 0);
    meeting_working_4.tintTopLeft = 7864203;
    meeting_working_4.tintTopRight = 7864203;
    meeting_working_4.tintBottomLeft = 7864203;
    meeting_working_4.tintBottomRight = 7864203;
    mainContainer.add(meeting_working_4);

    // meeting_working_5
    const meeting_working_5 = this.add.sprite(467.5, 214.5, "meeting-working");
    meeting_working_5.setOrigin(0, 0);
    meeting_working_5.tintTopLeft = 7853055;
    meeting_working_5.tintTopRight = 7853055;
    meeting_working_5.tintBottomLeft = 7853055;
    meeting_working_5.tintBottomRight = 7853055;
    mainContainer.add(meeting_working_5);

    // meeting_working_6
    const meeting_working_6 = this.add.sprite(1.5, 367.5, "meeting-working");
    meeting_working_6.setOrigin(0, 0);
    mainContainer.add(meeting_working_6);

    // meeting_working_7
    const meeting_working_7 = this.add.sprite(234.5, 367.5, "meeting-working");
    meeting_working_7.setOrigin(0, 0);
    mainContainer.add(meeting_working_7);

    // meeting_working_8
    const meeting_working_8 = this.add.sprite(467.5, 367.5, "meeting-working");
    meeting_working_8.setOrigin(0, 0);
    mainContainer.add(meeting_working_8);

    this.meeting_working = meeting_working;
    this.meeting_working_1 = meeting_working_1;
    this.meeting_working_2 = meeting_working_2;
    this.meeting_working_3 = meeting_working_3;
    this.meeting_working_4 = meeting_working_4;
    this.meeting_working_5 = meeting_working_5;
    this.meeting_working_6 = meeting_working_6;
    this.meeting_working_7 = meeting_working_7;
    this.meeting_working_8 = meeting_working_8;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private meeting_working!: Phaser.GameObjects.Sprite;
  private meeting_working_1!: Phaser.GameObjects.Sprite;
  private meeting_working_2!: Phaser.GameObjects.Sprite;
  private meeting_working_3!: Phaser.GameObjects.Sprite;
  private meeting_working_4!: Phaser.GameObjects.Sprite;
  private meeting_working_5!: Phaser.GameObjects.Sprite;
  private meeting_working_6!: Phaser.GameObjects.Sprite;
  private meeting_working_7!: Phaser.GameObjects.Sprite;
  private meeting_working_8!: Phaser.GameObjects.Sprite;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  private employeeCameraMap: Map<employeeName, Phaser.GameObjects.Sprite>;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(700, 500, "Zoom - DAILY MEETING");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    this.employeeCameraMap = new Map<employeeName, Phaser.GameObjects.Sprite>([
      ["template", this.meeting_working_1],
    ]);
  }

  public setCameraImage(employee: employeeName, key: string) {
    let employeeCameraSprite = this.employeeCameraMap.get(employee);
    employeeCameraSprite?.setTexture(key);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
