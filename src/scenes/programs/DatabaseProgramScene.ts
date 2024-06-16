/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import PointerButton from "../../components/PointerButton";
import ScrollField from "../../components/ScrollField";
/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
import { employeeDataMap, employeeKey } from "~/employee/EmployeeData";
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
		const rectangle_1 = this.add.rectangle(0, 60, 900, 600);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 2896939;
		mainContainer.add(rectangle_1);

		// employeeButton4
		const employeeButton4 = this.add.image(113, 310, "_MISSING");
		employeeButton4.scaleX = 4.803429437818358;
		employeeButton4.scaleY = 1.3980935992090544;
		mainContainer.add(employeeButton4);

		// employeeButton3
		const employeeButton3 = this.add.image(113, 260, "_MISSING");
		employeeButton3.scaleX = 4.803429437818358;
		employeeButton3.scaleY = 1.3980935992090544;
		mainContainer.add(employeeButton3);

		// employeeButton2
		const employeeButton2 = this.add.image(113, 210, "_MISSING");
		employeeButton2.scaleX = 4.803429437818358;
		employeeButton2.scaleY = 1.3980935992090544;
		mainContainer.add(employeeButton2);

		// employeeButton1
		const employeeButton1 = this.add.image(113, 159, "_MISSING");
		employeeButton1.scaleX = 4.803429437818358;
		employeeButton1.scaleY = 1.3980935992090544;
		mainContainer.add(employeeButton1);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(31, 83, "nokia", "EMPLOYEE DATABASE");
		bitmaptext_1.tintTopLeft = 1441542;
		bitmaptext_1.tintTopRight = 1441542;
		bitmaptext_1.tintBottomLeft = 1441542;
		bitmaptext_1.tintBottomRight = 1441542;
		bitmaptext_1.text = "EMPLOYEE DATABASE";
		bitmaptext_1.fontSize = -26;
		mainContainer.add(bitmaptext_1);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(56, 145, "nokia", "Name");
		bitmaptext.tintTopLeft = 1441542;
		bitmaptext.tintTopRight = 1441542;
		bitmaptext.tintBottomLeft = 1441542;
		bitmaptext.tintBottomRight = 1441542;
		bitmaptext.text = "Name";
		bitmaptext.fontSize = -24;
		mainContainer.add(bitmaptext);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(56, 195, "nokia", "Name");
		bitmaptext_2.tintTopLeft = 1441542;
		bitmaptext_2.tintTopRight = 1441542;
		bitmaptext_2.tintBottomLeft = 1441542;
		bitmaptext_2.tintBottomRight = 1441542;
		bitmaptext_2.text = "Name";
		bitmaptext_2.fontSize = -24;
		mainContainer.add(bitmaptext_2);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(56, 245, "nokia", "Name");
		bitmaptext_3.tintTopLeft = 1441542;
		bitmaptext_3.tintTopRight = 1441542;
		bitmaptext_3.tintBottomLeft = 1441542;
		bitmaptext_3.tintBottomRight = 1441542;
		bitmaptext_3.text = "Name";
		bitmaptext_3.fontSize = -24;
		mainContainer.add(bitmaptext_3);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(56, 295, "nokia", "Name");
		bitmaptext_4.tintTopLeft = 1441542;
		bitmaptext_4.tintTopRight = 1441542;
		bitmaptext_4.tintBottomLeft = 1441542;
		bitmaptext_4.tintBottomRight = 1441542;
		bitmaptext_4.text = "Name";
		bitmaptext_4.fontSize = -24;
		mainContainer.add(bitmaptext_4);

		// instructionsText
		const instructionsText = this.add.bitmapText(628, 352, "nokia", "INSTRUCTIONS TEXT");
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
		const rectangle_2 = this.add.rectangle(401, 60, 500, 600);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.alpha = 0.1;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 62771;
		mainContainer.add(rectangle_2);

		// scrollField
		const scrollField = this.add.container(401, 60);
		mainContainer.add(scrollField);

		// rectangle
		const rectangle = this.add.rectangle(0, 0, 500, 1300);
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

		// profileEntryImage
		const profileEntryImage = this.add.image(125, 115, "employee-G-trouble");
		profileEntryImage.setOrigin(0, 0);
		scrollField.add(profileEntryImage);

		// rectangle_3
		const rectangle_3 = this.add.rectangle(639, 126, 4, 128);
		rectangle_3.setOrigin(0, 0);
		rectangle_3.visible = false;
		rectangle_3.isFilled = true;
		mainContainer.add(rectangle_3);

		// hackButton
		const hackButton = this.add.image(42, 576, "_MISSING");
		hackButton.scaleX = 10.019942171468859;
		hackButton.scaleY = 1.745357513280117;
		hackButton.setOrigin(0, 0);
		mainContainer.add(hackButton);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(167, 587, "nokia", "HACK");
		bitmaptext_5.tintTopLeft = 1441542;
		bitmaptext_5.tintTopRight = 1441542;
		bitmaptext_5.tintBottomLeft = 1441542;
		bitmaptext_5.tintBottomRight = 1441542;
		bitmaptext_5.text = "HACK";
		bitmaptext_5.fontSize = -24;
		mainContainer.add(bitmaptext_5);

		// optionButton
		const optionButton = this.add.image(207.14512634277344, 136.63050270080566, "_MISSING");
		optionButton.scaleX = 5.106851213835601;
		optionButton.scaleY = 1.3980935992090544;
		optionButton.setOrigin(0, 0);
		mainContainer.add(optionButton);

		// optionButton_1
		const optionButton_1 = this.add.image(207.14512634277344, 186.63050270080566, "_MISSING");
		optionButton_1.scaleX = 5.106851213835601;
		optionButton_1.scaleY = 1.3980935992090544;
		optionButton_1.setOrigin(0, 0);
		mainContainer.add(optionButton_1);

		// optionButton_2
		const optionButton_2 = this.add.image(207.14512634277344, 237.63050270080566, "_MISSING");
		optionButton_2.scaleX = 5.106851213835601;
		optionButton_2.scaleY = 1.3980935992090544;
		optionButton_2.setOrigin(0, 0);
		mainContainer.add(optionButton_2);

		// optionButton_3
		const optionButton_3 = this.add.image(207.14512634277344, 287.63050270080566, "_MISSING");
		optionButton_3.scaleX = 5.106851213835601;
		optionButton_3.scaleY = 1.3980935992090544;
		optionButton_3.setOrigin(0, 0);
		mainContainer.add(optionButton_3);

		// optionText
		const optionText = this.add.bitmapText(218, 149, "nokia", "profile");
		optionText.tintTopLeft = 1441542;
		optionText.tintTopRight = 1441542;
		optionText.tintBottomLeft = 1441542;
		optionText.tintBottomRight = 1441542;
		optionText.text = "profile";
		optionText.fontSize = -16;
		mainContainer.add(optionText);

		// optionText_1
		const optionText_1 = this.add.bitmapText(218, 200, "nokia", "search history");
		optionText_1.tintTopLeft = 1441542;
		optionText_1.tintTopRight = 1441542;
		optionText_1.tintBottomLeft = 1441542;
		optionText_1.tintBottomRight = 1441542;
		optionText_1.text = "search history";
		optionText_1.fontSize = -16;
		mainContainer.add(optionText_1);

		// optionText_2
		const optionText_2 = this.add.bitmapText(218, 253, "nokia", "screen peek");
		optionText_2.tintTopLeft = 1441542;
		optionText_2.tintTopRight = 1441542;
		optionText_2.tintBottomLeft = 1441542;
		optionText_2.tintBottomRight = 1441542;
		optionText_2.text = "screen peek";
		optionText_2.fontSize = -16;
		mainContainer.add(optionText_2);

		// optionText_3
		const optionText_3 = this.add.bitmapText(218, 302, "nokia", "surveillance ");
		optionText_3.tintTopLeft = 1441542;
		optionText_3.tintTopRight = 1441542;
		optionText_3.tintBottomLeft = 1441542;
		optionText_3.tintBottomRight = 1441542;
		optionText_3.text = "surveillance ";
		optionText_3.fontSize = -16;
		mainContainer.add(optionText_3);

		// entryImage
		const entryImage = this.add.image(452, 255, "office-camera");
		entryImage.setOrigin(0, 0);
		mainContainer.add(entryImage);

		// lists
		const employeeButtonList = [employeeButton1, employeeButton2, employeeButton3, employeeButton4];
		const employeeButtonTextList = [bitmaptext, bitmaptext_2, bitmaptext_3, bitmaptext_4];
		const optionButtonTextList = [optionText, optionText_1, optionText_2, optionText_3];
		const optionButtonList = [optionButton, optionButton_1, optionButton_2, optionButton_3];

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

		// optionButton (components)
		new PointerButton(optionButton);

		// optionButton_1 (components)
		new PointerButton(optionButton_1);

		// optionButton_2 (components)
		new PointerButton(optionButton_2);

		// optionButton_3 (components)
		new PointerButton(optionButton_3);

		this.employeeButton4 = employeeButton4;
		this.employeeButton3 = employeeButton3;
		this.employeeButton2 = employeeButton2;
		this.employeeButton1 = employeeButton1;
		this.instructionsText = instructionsText;
		this.dataEntryText = dataEntryText;
		this.profileEntryImage = profileEntryImage;
		this.scrollField = scrollField;
		this.hackButton = hackButton;
		this.optionButton = optionButton;
		this.optionButton_1 = optionButton_1;
		this.optionButton_2 = optionButton_2;
		this.optionButton_3 = optionButton_3;
		this.entryImage = entryImage;
		this.mainContainer = mainContainer;
		this.employeeButtonList = employeeButtonList;
		this.employeeButtonTextList = employeeButtonTextList;
		this.optionButtonTextList = optionButtonTextList;
		this.optionButtonList = optionButtonList;

		this.events.emit("scene-awake");
	}

	private employeeButton4!: Phaser.GameObjects.Image;
	private employeeButton3!: Phaser.GameObjects.Image;
	private employeeButton2!: Phaser.GameObjects.Image;
	private employeeButton1!: Phaser.GameObjects.Image;
	private instructionsText!: Phaser.GameObjects.BitmapText;
	private dataEntryText!: Phaser.GameObjects.BitmapText;
	private profileEntryImage!: Phaser.GameObjects.Image;
	private scrollField!: Phaser.GameObjects.Container;
	private hackButton!: Phaser.GameObjects.Image;
	private optionButton!: Phaser.GameObjects.Image;
	private optionButton_1!: Phaser.GameObjects.Image;
	private optionButton_2!: Phaser.GameObjects.Image;
	private optionButton_3!: Phaser.GameObjects.Image;
	private entryImage!: Phaser.GameObjects.Image;
	private mainContainer!: Phaser.GameObjects.Container;
	private employeeButtonList!: Phaser.GameObjects.Image[];
	private employeeButtonTextList!: Phaser.GameObjects.BitmapText[];
	private optionButtonTextList!: Phaser.GameObjects.BitmapText[];
	private optionButtonList!: Phaser.GameObjects.Image[];

	/* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  private readonly optionSelectInstructionString = "SELECT OPTION TO ACCESS.";
  private readonly hackInstructionsString =
    "ACCESS KEY ENCRYPTED. CLICK THE HACK BUTTON TO ATTEMPT DECRYPTION.";
  private readonly initialInstructionString = "USE MOUSE TO SELECT EMPLOYEE.";

  private readonly employeeButtonOrder: Array<employeeKey> = [
    "employee-K",
    "employee-B",
    "employee-J",
    "employee-F",
  ];
  selectedEmployee: employeeKey;
  selectedOption: option;

  /**
   * Boilerplate setup for all program classes
   */
  setupProgram() {
    // create
    super.hackProgram = true;
    super.editorCreate();
    super.create(900, 600, "EMPLOYEE DATABASE", "DATABASE");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setupProgram();

    this.instructionsText.setText(this.initialInstructionString);

    this.setupEmployeeButtons();

    this.setupHackButton();

    this.setOptionButtonsVisibility(false);

    this.setupOptionButtons();

    this.entryImage.setVisible(false);
    this.profileEntryImage.setVisible(false);
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

  setupOptionButtons() {
    this.optionButtonList.forEach((image, index) => {
      image.on("click", () => {
        this.setOptionButtonsVisibility(true);
        this.optionButtonTextList[index].setTint(0xffffff);
        this.instructionsText.setText(this.hackInstructionsString);
        if (index === 0) {
          this.optionSelect("profile");
        } else if (index === 1) {
          this.optionSelect("internet-history");
        }
        if (index === 2) {
          this.optionSelect("screen-peek");
        }
        if (index === 3) {
          this.optionSelect("office-cam");
        }
      });
    });
  }

  setupHackButton() {
    this.hackButton.on("click", () => {
      // if (!this.registry.get(`profile-hacked: ${this.selectedEmployee}`)) {
      this.startHackingProgram();
      // }

      // TODO: do nothing if the currently selected employee & option is already hacked
    });
  }

  /** Also resets text highlight */
  setOptionButtonsVisibility(value: boolean) {
    this.optionButtonList.forEach((image) => {
      image.setVisible(value);
    });
    this.optionButtonTextList.forEach((text) => {
      text.setVisible(value);
      text.setTint(0x15ff06);
    });
  }

  private startHackingProgram() {
    if (!this.scene.get("hacking-program").scene.isActive()) {
      this.scene.launch("hacking-program", {
        employee: this.selectedEmployee,
      });
    }
  }

  public unlockEntry(employee: employeeKey, option: option) {
    this.registry.set(`${option}-hacked: ${this.selectedEmployee}`, true);
  }

  employeeSelect(key: employeeKey) {
    // if (
    //   this.registry.get(`${dataManagerKeys.employees.profileHacked}: ${key}`)
    // ) {
    //   this.showEntry(key);
    // } else {
    //   this.instructionsText.setText(this.hackInstructionsString);
    // }
    this.dataEntryText.setText("");
    this.entryImage.setVisible(false);
    this.profileEntryImage.setVisible(false);
    this.instructionsText.setText(this.optionSelectInstructionString);
    this.setOptionButtonsVisibility(true);

    this.selectedEmployee = key;
  }

  optionSelect(option: option) {
    if (this.registry.get(`${option}-hacked: ${this.selectedEmployee}`)) {
      this.showEntry(this.selectedEmployee, option);
    } else {
      this.instructionsText.setText(this.hackInstructionsString);
      this.dataEntryText.setText("");
      this.profileEntryImage.setVisible(false);
      this.entryImage.setVisible(false);
    }
    this.selectedOption = option;
  }

  public showEntry(employeeKey: employeeKey, option: option) {
    this.instructionsText.setText("");
    if (option === "profile") {
      this.dataEntryText.setText(
        `${employeeDataMap.get(employeeKey)?.profileEntry}`
      );
      this.profileEntryImage.setVisible(true);
      this.profileEntryImage.setTexture(
        employeeDataMap.get(employeeKey)?.profilePicKey as string
      );
      this.entryImage.setVisible(false);
    } else if (option === "internet-history") {
      this.dataEntryText.setText(
        `${employeeDataMap.get(employeeKey)?.internetHistory}`
      );
      this.entryImage.setVisible(false);
      this.profileEntryImage.setVisible(false);
    } else if (option === "screen-peek") {
      this.dataEntryText.setText(``);
      this.entryImage.setVisible(true);
      this.entryImage.setTexture(
        employeeDataMap.get(employeeKey)?.screenPeekKey as string
      );
      this.profileEntryImage.setVisible(false);
    } else if (option === "office-cam") {
      this.dataEntryText.setText(``);
      this.entryImage.setVisible(true);
      this.entryImage.setTexture(
        employeeDataMap.get(employeeKey)?.officeCamKey as string
      );
      this.profileEntryImage.setVisible(false);
    }

    ScrollField.getComponent(this.scrollField).resetPosition();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

type option = "profile" | "internet-history" | "screen-peek" | "office-cam";
