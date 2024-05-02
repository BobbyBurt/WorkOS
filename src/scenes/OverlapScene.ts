/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import TaskbarPrefab from "../prefabs/TaskbarPrefab";
/* START-USER-IMPORTS */
import fullscreenHandler from "~/FullscreenHandler";
/* END-USER-IMPORTS */

export default class OverlapScene extends Phaser.Scene {
  constructor() {
    super("overlap");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // rectangle_1
    const rectangle_1 = this.add.rectangle(0, 0, 200, 1080);
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 9413286;

    // rectangle
    const rectangle = this.add.rectangle(1920, 0, 200, 1080);
    rectangle.setOrigin(1, 0);
    rectangle.isFilled = true;
    rectangle.fillColor = 9413286;

    // taskbarPrefab
    const taskbarPrefab = new TaskbarPrefab(this, 323, 934);
    this.add.existing(taskbarPrefab);

    // moniter
    const moniter = this.add.image(127, 0, "moniter");
    moniter.setOrigin(0, 0);

    this.taskbarPrefab = taskbarPrefab;

    this.events.emit("scene-awake");
  }

  public taskbarPrefab!: TaskbarPrefab;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    fullscreenHandler.adjustCamera(this.cameras.main);

    this.input.keyboard?.on("keydown", () => {
      this.taskbarPrefab.start();
    });

    // this.cameras.main.postFX.addBarrel(1.05);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
