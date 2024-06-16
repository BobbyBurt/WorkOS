/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import PointerButton from "../../components/PointerButton";
/* START-USER-IMPORTS */
import Employee from "~/employee/Employee";
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

    // background
    const background = this.add.image(-1, 60, "white-px");
    background.scaleX = 470;
    background.scaleY = 300;
    background.setOrigin(0, 0);
    mainContainer.add(background);

    // rightButton
    const rightButton = this.add.image(407, 166, "white-px");
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
    const leftButton = this.add.image(13, 166, "white-px");
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
    const bitmaptext_1 = this.add.bitmapText(21, 172, "nokia", "<");
    bitmaptext_1.text = "<";
    bitmaptext_1.fontSize = -32;
    mainContainer.add(bitmaptext_1);

    // bitmaptext
    const bitmaptext = this.add.bitmapText(430, 172, "nokia", ">");
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

    // aCDC_poster
    const aCDC_poster = this.add.image(-95, -51, "ACDC-poster");
    mainContainer.add(aCDC_poster);

    // rightButton (components)
    new PointerButton(rightButton);

    // leftButton (components)
    new PointerButton(leftButton);

    this.cameraFeed = cameraFeed;
    this.background = background;
    this.rightButton = rightButton;
    this.leftButton = leftButton;
    this.employee = employee;
    this.aCDC_poster = aCDC_poster;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private cameraFeed!: Phaser.GameObjects.Sprite;
  private background!: Phaser.GameObjects.Image;
  private rightButton!: Phaser.GameObjects.Image;
  private leftButton!: Phaser.GameObjects.Image;
  private employee!: Phaser.GameObjects.Sprite;
  private aCDC_poster!: Phaser.GameObjects.Image;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  public employeeSpriteMap: Map<employeeKey, Phaser.GameObjects.Sprite>;
  private employeeBGColourMap: Map<employeeKey, number> = new Map([
    ["employee-B", 0xe5b7ff],
    ["employee-F", 0xb2ffa8],
    ["employee-G", 0xffcc99],
    ["employee-J", 0xfff6a3],
    ["employee-K", 0xaefdff],
    ["employee-L", 0xffa5f4],
    ["employee-O", 0xffb2b2],
    ["employee-X", 0xbec1ff],
  ]);
  public selectedEmployee: employeeKey;
  private viewableEmployees: Array<employeeKey> = [
    "employee-B",
    "employee-F",
    "employee-K",
    "employee-J",
  ];

  /**
   * Index for employeeKeys array
   */
  public visibleEmployee = 0;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.hackProgram = true;
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

    employeeKeys.forEach((employeeKey: employeeKey) => {
      let employee = EmployeeDirectory.getEmployee(employeeKey) as Employee;
      // TODO: remove any type assertation. I may move this function to the employee class.
      employee.createAnims(employeeKey);
      employee.playInitialAnim();
    });

    this.selectedEmployee = "employee-K";
    this.setVisibleEmployeeSprite(this.selectedEmployee);

    this.leftButton.on("click", () => {
      this.incrementSelectedEmployee(false);
      this.setVisibleEmployeeSprite(this.selectedEmployee);
    });
    this.rightButton.on("click", () => {
      this.incrementSelectedEmployee(true);
      this.setVisibleEmployeeSprite(this.selectedEmployee);
    });

    this.aCDC_poster.setVisible(false);
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

  setVisibleEmployeeSprite(employeeKey: employeeKey) {
    this.employeeSpriteMap.forEach((sprite, key) => {
      sprite.setVisible(key === employeeKey);
    });
    this.background.setTint(this.employeeBGColourMap.get(employeeKey));
    this.aCDC_poster.setVisible(employeeKey === "employee-J");
  }

  /**
   * Increment or decrement selected employee as defined by `visibleEmployee`
   * @param increment or decrement
   */
  incrementSelectedEmployee(increment: boolean) {
    let index = this.viewableEmployees.findIndex((value) => {
      if (value === this.selectedEmployee) {
        return true;
      }
    }, this);
    index += increment ? 1 : -1;
    if (increment && index > this.viewableEmployees.length - 1) {
      index = 0;
    } else if (!increment && index < 0) {
      index = this.viewableEmployees.length - 1;
    }
    this.selectedEmployee = this.viewableEmployees[index];
  }

  // public setCameraImage(employee: employeeKey, imageKey: string) {
  //   let employeeCameraSprite = this.employeeCameraMap.get(employee);
  //   employeeCameraSprite?.setTexture(imageKey);
  // }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
