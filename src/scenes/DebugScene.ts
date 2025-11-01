/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class DebugScene extends Phaser.Scene {
  constructor() {
    super("debug");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // displayVarBack
    const displayVarBack = this.add.rectangle(10, 10, 50, 40);
    displayVarBack.setOrigin(0, 0);
    displayVarBack.isFilled = true;
    displayVarBack.fillColor = 0;
    displayVarBack.fillAlpha = 0.5;

    this.displayVarBack = displayVarBack;

    this.events.emit("scene-awake");
  }

  private displayVarBack!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  private displayVarMap: Map<string, any>;

  /**
   * Keys are the same as `displayVarMap` and correlate to text object.
   */
  private displayVarTextMap: Map<string, Phaser.GameObjects.BitmapText>;

  private timeAtLastDisplay: number;

  public adjustableNumbers: Array<number | string>;

  create() {
    this.editorCreate();

    this.displayVarMap = new Map<string, any>();
    this.displayVarTextMap = new Map<string, Phaser.GameObjects.BitmapText>();
    this.adjustableNumbers = [""];

    // Hide scene
    this.scene.setVisible(false);
    this.input.keyboard!.on("keydown-F2", () => {
      if (__DEV__) {
        this.scene.setVisible(!this.scene.isVisible());
        this.scene.bringToTop();
      }
    });

    this.createNumberInputEvents();
  }

  /**
   * Display a variable on screen.
   *
   * Variables will be listed in the order that they're passed.
   *
   * @param label Also used as a key to store vars. Var will overwrite existing vars with the same key.
   * @param variable
   */
  public DisplayVar(label: string, variable: any) {
    // Update or create text object
    variable = JSON.stringify(variable);
    const text = `${label}: ${variable}`;
    if (this.displayVarMap.has(label)) {
      // Var exists in map

      this.displayVarTextMap.get(label)?.setText(text);
    } else {
      // Var doesn't exist in map

      // Create text object
      const textY = (this.displayVarMap.size + 1) * 20;
      const textObject = this.add.bitmapText(20, textY, "nokia", text, -16);
      this.displayVarTextMap.set(label, textObject);
    }

    // reset backing size on new frame
    if (this.timeAtLastDisplay !== this.time.now) {
      this.displayVarBack.width = 10;
    }

    // Resize backing
    const textObject = this.displayVarTextMap.get(label)!;
    this.displayVarBack.setSize(
      textObject.displayWidth > this.displayVarBack.width
        ? textObject.displayWidth + 20
        : this.displayVarBack.width + 20,
      this.displayVarTextMap.size * 20 + 20
    );
    this.timeAtLastDisplay = this.time.now;

    this.displayVarMap.set(label, variable);

    // Is there any way to show objects?
  }

  private createNumberInputEvents() {
    // loop creates keydown event for each entry in this map, event key coordinates to output number
    let _keyCodeToNumberMap = new Map<string, string>([
      ["ONE", "1"],
      ["NUMPAD_ONE", "1"],
      ["TWO", "2"],
      ["NUMPAD_TWO", "2"],
      ["THREE", "3"],
      ["NUMPAD_THREE", "3"],
      ["FOUR", "4"],
      ["NUMPAD_FOUR", "4"],
      ["FIVE", "5"],
      ["NUMPAD_FIVE", "5"],
      ["SIX", "6"],
      ["NUMPAD_SIX", "6"],
      ["SEVEN", "7"],
      ["NUMPAD_SEVEN", "7"],
      ["EIGHT", "8"],
      ["NUMPAD_EIGHT", "8"],
      ["NINE", "9"],
      ["NUMPAD_NINE", "9"],
      ["ZERO", "0"],
      ["NUMPAD_ZERO", "0"],
      ["PERIOD", "."],
      // ["NUMPAD_DECIMAL", "."],
      //  Doesn't work for some reason? It used to
    ]);

    _keyCodeToNumberMap.forEach((value, key) => {
      this.input.keyboard!.on("keydown-" + key, () => {
        if (this.scene.isVisible()) {
          if (value == ".") {
            console.debug(`${key}`);
            this.adjustableNumbers[0] += ".";
          } else {
            this.adjustableNumbers[0] += "" + value;
          }
          // this.adjustableNumbers[0] = Number(this.adjustableNumbers[0]);
          this.DisplayVar("adjust", this.adjustableNumbers[0]);
        }
      });
    });

    this.input.keyboard!.on("keydown-BACKSPACE", () => {
      if (this.scene.isVisible()) {
        this.adjustableNumbers[0] = String(this.adjustableNumbers[0]);
        this.adjustableNumbers[0] = this.adjustableNumbers[0].slice(
          0,
          this.adjustableNumbers[0].length - 1
        );
        this.DisplayVar("adjust", this.adjustableNumbers[0]);
      }
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
