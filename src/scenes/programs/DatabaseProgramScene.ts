/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import PointerButton from "../../components/PointerButton";
import ScrollField from "../../components/ScrollField";
/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
import { employeeDataMap, employeeKey } from "~/employees/EmployeeData";
import dataManagerKeys from "~/data/dataManagerKeys";
import HackingProgramScene from "./HackingProgramScene";
/* END-USER-IMPORTS */

export default class DatabaseProgramScene extends ProgramBaseScene {
  constructor() {
    super("database-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(0, 60, 700, 500);
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 2896939;
    mainContainer.add(rectangle_1);

    // employeeButton4
    const employeeButton4 = this.add.image(113, 368, "_MISSING");
    employeeButton4.scaleX = 4.803429437818358;
    employeeButton4.scaleY = 1.3980935992090544;
    mainContainer.add(employeeButton4);

    // employeeButton3
    const employeeButton3 = this.add.image(113, 318, "_MISSING");
    employeeButton3.scaleX = 4.803429437818358;
    employeeButton3.scaleY = 1.3980935992090544;
    mainContainer.add(employeeButton3);

    // employeeButton2
    const employeeButton2 = this.add.image(113, 268, "_MISSING");
    employeeButton2.scaleX = 4.803429437818358;
    employeeButton2.scaleY = 1.3980935992090544;
    mainContainer.add(employeeButton2);

    // employeeButton1
    const employeeButton1 = this.add.image(113, 217, "_MISSING");
    employeeButton1.scaleX = 4.803429437818358;
    employeeButton1.scaleY = 1.3980935992090544;
    mainContainer.add(employeeButton1);

    // bitmaptext_1
    const bitmaptext_1 = this.add.bitmapText(
      31,
      83,
      "nokia",
      "EMPLOYEE \nDATABASE"
    );
    bitmaptext_1.tintTopLeft = 1441542;
    bitmaptext_1.tintTopRight = 1441542;
    bitmaptext_1.tintBottomLeft = 1441542;
    bitmaptext_1.tintBottomRight = 1441542;
    bitmaptext_1.text = "EMPLOYEE \nDATABASE";
    bitmaptext_1.fontSize = -32;
    mainContainer.add(bitmaptext_1);

    // bitmaptext
    const bitmaptext = this.add.bitmapText(56, 203, "nokia", "Name");
    bitmaptext.tintTopLeft = 1441542;
    bitmaptext.tintTopRight = 1441542;
    bitmaptext.tintBottomLeft = 1441542;
    bitmaptext.tintBottomRight = 1441542;
    bitmaptext.text = "Name";
    bitmaptext.fontSize = -24;
    mainContainer.add(bitmaptext);

    // bitmaptext_2
    const bitmaptext_2 = this.add.bitmapText(56, 253, "nokia", "Name");
    bitmaptext_2.tintTopLeft = 1441542;
    bitmaptext_2.tintTopRight = 1441542;
    bitmaptext_2.tintBottomLeft = 1441542;
    bitmaptext_2.tintBottomRight = 1441542;
    bitmaptext_2.text = "Name";
    bitmaptext_2.fontSize = -24;
    mainContainer.add(bitmaptext_2);

    // bitmaptext_3
    const bitmaptext_3 = this.add.bitmapText(56, 303, "nokia", "Name");
    bitmaptext_3.tintTopLeft = 1441542;
    bitmaptext_3.tintTopRight = 1441542;
    bitmaptext_3.tintBottomLeft = 1441542;
    bitmaptext_3.tintBottomRight = 1441542;
    bitmaptext_3.text = "Name";
    bitmaptext_3.fontSize = -24;
    mainContainer.add(bitmaptext_3);

    // bitmaptext_4
    const bitmaptext_4 = this.add.bitmapText(56, 353, "nokia", "Name");
    bitmaptext_4.tintTopLeft = 1441542;
    bitmaptext_4.tintTopRight = 1441542;
    bitmaptext_4.tintBottomLeft = 1441542;
    bitmaptext_4.tintBottomRight = 1441542;
    bitmaptext_4.text = "Name";
    bitmaptext_4.fontSize = -24;
    mainContainer.add(bitmaptext_4);

    // instructionsText
    const instructionsText = this.add.bitmapText(
      477,
      310,
      "nokia",
      "INSTRUCTIONS TEXT"
    );
    instructionsText.setOrigin(0.5, 0.5);
    instructionsText.tintTopLeft = 1441542;
    instructionsText.tintTopRight = 1441542;
    instructionsText.tintBottomLeft = 1441542;
    instructionsText.tintBottomRight = 1441542;
    instructionsText.text = "INSTRUCTIONS TEXT";
    instructionsText.fontSize = -16;
    instructionsText.align = 1;
    instructionsText.maxWidth = 300;
    mainContainer.add(instructionsText);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(250, 60, 450, 500);
    rectangle_2.setOrigin(0, 0);
    rectangle_2.alpha = 0.1;
    rectangle_2.isFilled = true;
    rectangle_2.fillColor = 62771;
    mainContainer.add(rectangle_2);

    // scrollField
    const scrollField = this.add.container(250, 60);
    mainContainer.add(scrollField);

    // rectangle
    const rectangle = this.add.rectangle(0, 0, 450, 1000);
    rectangle.setOrigin(0, 0);
    rectangle.alpha = 0.1;
    rectangle.isFilled = true;
    rectangle.fillColor = 62771;
    scrollField.add(rectangle);

    // dataEntryText
    const dataEntryText = this.add.bitmapText(41, 35, "nokia", "");
    dataEntryText.fontSize = -16;
    dataEntryText.maxWidth = 340;
    scrollField.add(dataEntryText);

    // rectangle_3
    const rectangle_3 = this.add.rectangle(639, 126, 4, 128);
    rectangle_3.setOrigin(0, 0);
    rectangle_3.visible = false;
    rectangle_3.isFilled = true;
    mainContainer.add(rectangle_3);

    // hackButton
    const hackButton = this.add.image(119, 502, "_MISSING");
    hackButton.scaleX = 4.803429437818358;
    hackButton.scaleY = 1.3980935992090544;
    mainContainer.add(hackButton);

    // bitmaptext_5
    const bitmaptext_5 = this.add.bitmapText(82, 487, "nokia", "HACK");
    bitmaptext_5.tintTopLeft = 1441542;
    bitmaptext_5.tintTopRight = 1441542;
    bitmaptext_5.tintBottomLeft = 1441542;
    bitmaptext_5.tintBottomRight = 1441542;
    bitmaptext_5.text = "HACK";
    bitmaptext_5.fontSize = -24;
    mainContainer.add(bitmaptext_5);

    // lists
    const employeeButtonList = [
      employeeButton1,
      employeeButton2,
      employeeButton3,
      employeeButton4,
    ];
    const employeeButtonTextList = [
      bitmaptext,
      bitmaptext_2,
      bitmaptext_3,
      bitmaptext_4,
    ];

    // employeeButton4 (components)
    new PointerButton(employeeButton4);

    // employeeButton3 (components)
    new PointerButton(employeeButton3);

    // employeeButton2 (components)
    new PointerButton(employeeButton2);

    // employeeButton1 (components)
    new PointerButton(employeeButton1);

    // scrollField (components)
    const scrollFieldScrollField = new ScrollField(scrollField);
    scrollFieldScrollField.BGRect = rectangle;
    scrollFieldScrollField.scrollbarRect = rectangle_3;

    // hackButton (components)
    new PointerButton(hackButton);

    this.employeeButton4 = employeeButton4;
    this.employeeButton3 = employeeButton3;
    this.employeeButton2 = employeeButton2;
    this.employeeButton1 = employeeButton1;
    this.instructionsText = instructionsText;
    this.dataEntryText = dataEntryText;
    this.scrollField = scrollField;
    this.hackButton = hackButton;
    this.mainContainer = mainContainer;
    this.employeeButtonList = employeeButtonList;
    this.employeeButtonTextList = employeeButtonTextList;

    this.events.emit("scene-awake");
  }

  private employeeButton4!: Phaser.GameObjects.Image;
  private employeeButton3!: Phaser.GameObjects.Image;
  private employeeButton2!: Phaser.GameObjects.Image;
  private employeeButton1!: Phaser.GameObjects.Image;
  private instructionsText!: Phaser.GameObjects.BitmapText;
  private dataEntryText!: Phaser.GameObjects.BitmapText;
  private scrollField!: Phaser.GameObjects.Container;
  private hackButton!: Phaser.GameObjects.Image;
  private mainContainer!: Phaser.GameObjects.Container;
  private employeeButtonList!: Phaser.GameObjects.Image[];
  private employeeButtonTextList!: Phaser.GameObjects.BitmapText[];

  /* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  private readonly hackInstructionsString =
    "EMPLOYEE DATA ENCRYPTED. CLICK THE HACK BUTTON TO BEGIN DECRYPTION.";
  private readonly initialInstructionString = "USE MOUSE TO SELECT EMPLOYEE.";

  private readonly employeeButtonOrder: Array<employeeKey> = [
    "employee-K",
    "employee-B",
    "employee-J",
    "employee-F",
  ];
  selectedEmployee: employeeKey;

  /**
   * Boilerplate setup for all program classes
   */
  setupProgram() {
    // create
    super.hackProgram = true;
    super.editorCreate();
    super.create(700, 500, "EMPLOYEE DATABASE");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setupProgram();

    this.instructionsText.setText(this.initialInstructionString);

    this.setupEmployeeButtons();

    this.setupHackButton();
  }

  override close(): void {
    this.scene.stop("hacking-program");

    super.close();
  }

  /** Set text, input callbacks */
  setupEmployeeButtons() {
    this.employeeButtonList.forEach((button, index) => {
      let employeeKey = this.employeeButtonOrder[index];

      this.employeeButtonTextList[index].setText(
        `${employeeDataMap.get(employeeKey)?.name}`
      );

      button.on("click", () => {
        this.employeeButtonTextList.forEach((_button, _index) => {
          _button.setTint(index === _index ? 0xffffff : 0x15ff06);
        });
        this.employeeSelect(employeeKey);
      });
    });
  }

  setupHackButton() {
    this.hackButton.on("click", () => {
      if (
        !this.registry.get(
          `${dataManagerKeys.employees.databaseHacked}: ${this.selectedEmployee}`
        )
      ) {
        this.startHackingProgram();
      }
    });
  }

  private startHackingProgram() {
    if (!this.scene.get("hacking-program").scene.isActive()) {
      this.scene.launch("hacking-program", {
        employee: this.selectedEmployee,
      });
    }
  }

  public unlockEntry(employee: employeeKey) {
    this.registry.set(
      `${dataManagerKeys.employees.databaseHacked}: ${this.selectedEmployee}`,
      true
    );
  }

  employeeSelect(key: employeeKey) {
    if (
      this.registry.get(`${dataManagerKeys.employees.databaseHacked}: ${key}`)
    ) {
      this.showEntry(key);
    } else {
      this.instructionsText.setText(this.hackInstructionsString);
      this.dataEntryText.setText("");
    }

    this.selectedEmployee = key;
  }

  public showEntry(employeeKey: employeeKey) {
    this.instructionsText.setText("");
    this.dataEntryText.setText(
      `${employeeDataMap.get(employeeKey)?.databaseEntry}`
    );
    ScrollField.getComponent(this.scrollField).resetPosition();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
