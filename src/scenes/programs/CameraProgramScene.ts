/** @format */

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
import { employeeKey } from "~/employees/EmployeeData";
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

    // cameraBoss
    const cameraBoss = this.add.sprite(1.5, 61.5, "bossman-watching");
    cameraBoss.setOrigin(0, 0);
    mainContainer.add(cameraBoss);

    // cameraB
    const cameraB = this.add.sprite(234.5, 61.5, "employee-B-working");
    cameraB.setOrigin(0, 0);
    mainContainer.add(cameraB);

    // cameraF
    const cameraF = this.add.sprite(467.5, 61.5, "employee-F-working");
    cameraF.setOrigin(0, 0);
    mainContainer.add(cameraF);

    // cameraG
    const cameraG = this.add.sprite(1.5, 214.5, "employee-G-working");
    cameraG.setOrigin(0, 0);
    mainContainer.add(cameraG);

    // cameraJ
    const cameraJ = this.add.sprite(234.5, 214.5, "employee-J-working");
    cameraJ.setOrigin(0, 0);
    mainContainer.add(cameraJ);

    // cameraK
    const cameraK = this.add.sprite(467.5, 214.5, "employee-K-working");
    cameraK.setOrigin(0, 0);
    mainContainer.add(cameraK);

    // cameraL
    const cameraL = this.add.sprite(1.5, 367.5, "employee-L-working");
    cameraL.setOrigin(0, 0);
    mainContainer.add(cameraL);

    // cameraO
    const cameraO = this.add.sprite(234.5, 367.5, "employee-O-working");
    cameraO.setOrigin(0, 0);
    mainContainer.add(cameraO);

    // cameraX
    const cameraX = this.add.sprite(467.5, 367.5, "employee-X-working");
    cameraX.setOrigin(0, 0);
    mainContainer.add(cameraX);

    this.cameraBoss = cameraBoss;
    this.cameraB = cameraB;
    this.cameraF = cameraF;
    this.cameraG = cameraG;
    this.cameraJ = cameraJ;
    this.cameraK = cameraK;
    this.cameraL = cameraL;
    this.cameraO = cameraO;
    this.cameraX = cameraX;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private cameraBoss!: Phaser.GameObjects.Sprite;
  private cameraB!: Phaser.GameObjects.Sprite;
  private cameraF!: Phaser.GameObjects.Sprite;
  private cameraG!: Phaser.GameObjects.Sprite;
  private cameraJ!: Phaser.GameObjects.Sprite;
  private cameraK!: Phaser.GameObjects.Sprite;
  private cameraL!: Phaser.GameObjects.Sprite;
  private cameraO!: Phaser.GameObjects.Sprite;
  private cameraX!: Phaser.GameObjects.Sprite;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  private employeeCameraMap: Map<employeeKey, Phaser.GameObjects.Sprite>;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(700, 500, "Desktop Camera Feed");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    this.employeeCameraMap = new Map<employeeKey, Phaser.GameObjects.Sprite>([
      ["employee-B", this.cameraB],
      ["employee-F", this.cameraF],
      ["employee-G", this.cameraG],
      ["employee-J", this.cameraJ],
      ["employee-K", this.cameraK],
      ["employee-L", this.cameraL],
      ["employee-O", this.cameraO],
      ["employee-X", this.cameraX],
    ]);
  }

  public setCameraImage(employee: employeeKey, imageKey: string) {
    let employeeCameraSprite = this.employeeCameraMap.get(employee);
    employeeCameraSprite?.setTexture(imageKey);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
