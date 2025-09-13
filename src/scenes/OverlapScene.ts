/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import TaskbarPrefab from "../prefabs/TaskbarPrefab";
/* START-USER-IMPORTS */
import fullscreenHandler from "~/FullscreenHandler";
import DistractionAnim from "~/spine/DistractionAnim";
import SpecificDistractionAnim from "~/spine/specificDistractionTest";
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
		const taskbarPrefab = new TaskbarPrefab(this, 706, 708);
		this.add.existing(taskbarPrefab);
		taskbarPrefab.scaleX = 1;
		taskbarPrefab.scaleY = 1;

		// white_px_3
		const white_px_3 = this.add.image(1781, 0, "white-px");
		white_px_3.scaleX = 631.0923374481011;
		white_px_3.scaleY = 1085.7225496613185;
		white_px_3.setOrigin(0, 0);
		white_px_3.tintTopLeft = 9474192;
		white_px_3.tintTopRight = 9474192;
		white_px_3.tintBottomLeft = 9474192;
		white_px_3.tintBottomRight = 9474192;

		// white_px
		const white_px = this.add.image(0, 0, "white-px");
		white_px.scaleX = 631.0923374481011;
		white_px.scaleY = 1085.7225496613185;
		white_px.setOrigin(0, 0);
		white_px.tintTopLeft = 9474192;
		white_px.tintTopRight = 9474192;
		white_px.tintBottomLeft = 9474192;
		white_px.tintBottomRight = 9474192;

		// white_px_1
		const white_px_1 = this.add.image(0, 0, "white-px");
		white_px_1.scaleX = 1933.781709232816;
		white_px_1.scaleY = 119.24776403989915;
		white_px_1.setOrigin(0, 0);
		white_px_1.tintTopLeft = 9474192;
		white_px_1.tintTopRight = 9474192;
		white_px_1.tintBottomLeft = 9474192;
		white_px_1.tintBottomRight = 9474192;

		// white_px_2
		const white_px_2 = this.add.image(0, 969, "white-px");
		white_px_2.scaleX = 1933.781709232816;
		white_px_2.scaleY = 119.24776403989915;
		white_px_2.setOrigin(0, 0);
		white_px_2.tintTopLeft = 9474192;
		white_px_2.tintTopRight = 9474192;
		white_px_2.tintBottomLeft = 9474192;
		white_px_2.tintBottomRight = 9474192;

		// monitor
		const monitor = this.add.image(0, 0, "monitor");
		monitor.setOrigin(0, 0);

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

    // let spineTest = new SpecificDistractionAnim(
    //   this,
    //   960,
    //   540,
    //   "skeleton",
    //   "skeleton-atlas"
    // );
    // spineTest.spineObject.animationState.setAnimation(0, "animation", false);

    // this.cameras.main.postFX.addBarrel(1.05);
    // this.createBossDelay();
  }

  createBossDelay() {
    let bossTimer = this.time.addEvent({
      delay: Phaser.Math.RND.between(40000, 70000),
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
