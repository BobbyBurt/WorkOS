/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import EmployeeB from "~/employee/EmployeeB";
import PointerButton from "../../components/PointerButton";
/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
import { employeeKey, employeeKeys } from "~/employee/EmployeeData";
import EmployeeDirectory from "~/employee/EmployeeDirectory";
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
    const mainContainer = this.add.container(1, 0);

    // cameraFeed
    const cameraFeed = this.add.sprite(1.5, 63.5, "bossman-watching");
    cameraFeed.scaleX = 2;
    cameraFeed.scaleY = 2;
    cameraFeed.setOrigin(0, 0);
    cameraFeed.visible = false;
    mainContainer.add(cameraFeed);

    // bg
    const bg = this.add.rectangle(0, 59, 470, 300);
    bg.setOrigin(0, 0);
    bg.isFilled = true;
    mainContainer.add(bg);

    // rightButton
    const rightButton = this.add.image(402, 166, "white-px");
    rightButton.scaleX = 50;
    rightButton.scaleY = 50;
    rightButton.setOrigin(0, 0);
    rightButton.alpha = 0.3;
    rightButton.alphaTopLeft = 0.3;
    rightButton.alphaTopRight = 0.3;
    rightButton.alphaBottomLeft = 0.3;
    rightButton.alphaBottomRight = 0.3;
    rightButton.tintTopLeft = 0;
    rightButton.tintTopRight = 0;
    rightButton.tintBottomLeft = 0;
    rightButton.tintBottomRight = 0;
    mainContainer.add(rightButton);

    // leftButton
    const leftButton = this.add.image(8, 166, "white-px");
    leftButton.scaleX = 50;
    leftButton.scaleY = 50;
    leftButton.setOrigin(0, 0);
    leftButton.alpha = 0.3;
    leftButton.alphaTopLeft = 0.3;
    leftButton.alphaTopRight = 0.3;
    leftButton.alphaBottomLeft = 0.3;
    leftButton.alphaBottomRight = 0.3;
    leftButton.tintTopLeft = 0;
    leftButton.tintTopRight = 0;
    leftButton.tintBottomLeft = 0;
    leftButton.tintBottomRight = 0;
    mainContainer.add(leftButton);

    // bitmaptext_1
    const bitmaptext_1 = this.add.bitmapText(16, 172, "nokia", "<");
    bitmaptext_1.text = "<";
    bitmaptext_1.fontSize = -32;
    mainContainer.add(bitmaptext_1);

    // bitmaptext
    const bitmaptext = this.add.bitmapText(425, 172, "nokia", ">");
    bitmaptext.text = ">";
    bitmaptext.fontSize = -32;
    mainContainer.add(bitmaptext);

    // employee
    const employee = this.add.sprite(
      234,
      212,
      "employee-animation-test",
      "working-fidget/0000"
    );
    employee.visible = false;
    mainContainer.add(employee);

    // rightButton (components)
    new PointerButton(rightButton);

    // leftButton (components)
    new PointerButton(leftButton);

    this.cameraFeed = cameraFeed;
    this.bg = bg;
    this.rightButton = rightButton;
    this.leftButton = leftButton;
    this.employee = employee;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private cameraFeed!: Phaser.GameObjects.Sprite;
  private bg!: Phaser.GameObjects.Rectangle;
  private rightButton!: Phaser.GameObjects.Image;
  private leftButton!: Phaser.GameObjects.Image;
  private employee!: Phaser.GameObjects.Sprite;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  public employeeSpriteMap: Map<employeeKey, Phaser.GameObjects.Sprite>;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(700, 300, "Desktop Camera Feed", "Camera", true);
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();

    super.setWindowPosition(1300, 22);
  }

  create() {
    this.setup();

    this.createEmployeeSprites();

    let employee = EmployeeDirectory.getEmployee("employee-B") as EmployeeB;
    employee.createAnim();
    // TEMP
  }

  createEmployeeSprites() {
    this.employeeSpriteMap = new Map<employeeKey, Phaser.GameObjects.Sprite>();
    employeeKeys.forEach((employeeKey: employeeKey) => {
      let newSprite = this.add.sprite(0, 0, "");
      this.mainContainer.add(newSprite);
      newSprite.setPosition(234, 212);
      newSprite.setVisible(false);
      this.employeeSpriteMap.set(employeeKey, newSprite);
      if (EmployeeDirectory.getEmployee(employeeKey)) {
        // TEMP: currently not all employees are set up in directory so I need undefined check

        EmployeeDirectory.getEmployee(employeeKey).sprite = newSprite;
      }
    });
  }

  // public setCameraImage(employee: employeeKey, imageKey: string) {
  //   let employeeCameraSprite = this.employeeCameraMap.get(employee);
  //   employeeCameraSprite?.setTexture(imageKey);
  // }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
