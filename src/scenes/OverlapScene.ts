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

		// taskbarPrefab
		const taskbarPrefab = new TaskbarPrefab(this, 135, 974);
		this.add.existing(taskbarPrefab);
		taskbarPrefab.scaleX = 1;
		taskbarPrefab.scaleY = 1;

		// moniter
		const moniter = this.add.image(970.5, 540, "moniter");
		moniter.scaleX = 1.4;
		moniter.scaleY = 1.1;

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

    this.sound.play("office-ambience", { loop: true, volume: 0.2 });

    // this.cameras.main.postFX.addBarrel(1.05);
    // this.createBossDelay();
  }

  createBossDelay() {
    this.bossTimer = this.time.addEvent({
      delay: Phaser.Math.RND.between(30000, 40000),
      callback: this.bossAppear,
      callbackScope: this,
    });
  }

  bossAppear() {
    this.sound.play("boss-appear-long");
    this.time.addEvent({
      delay: 10000,
      callback: () => {
        this.sound.play("boss-disappear");
        this.createBossDelay();
      },
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
