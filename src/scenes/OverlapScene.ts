/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import TaskbarPrefab from "../prefabs/TaskbarPrefab";
import { SkinsAndAnimationBoundsProvider } from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
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
    const taskbarPrefab = new TaskbarPrefab(this, 135, 974);
    this.add.existing(taskbarPrefab);
    taskbarPrefab.scaleX = 1;
    taskbarPrefab.scaleY = 1;

    // moniter
    const moniter = this.add.image(970.5, 540, "moniter");
    moniter.scaleX = 1.4;
    moniter.scaleY = 1.1;

    // skeleton
    const skeleton = this.add.spine(
      1554,
      950,
      "skeleton",
      "skeleton-atlas",
      new SkinsAndAnimationBoundsProvider(null, ["default"])
    );
    skeleton.skeleton.setSkinByName("default");

    this.taskbarPrefab = taskbarPrefab;
    this.skeleton = skeleton;

    this.events.emit("scene-awake");
  }

  public taskbarPrefab!: TaskbarPrefab;
  private skeleton!: SpineGameObject;

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();

    fullscreenHandler.adjustCamera(this.cameras.main);

    this.input.keyboard?.on("keydown", () => {
      this.taskbarPrefab.start();
    });

    this.sound.play("office-ambience", { loop: true, volume: 0.2 });

    // this.skeleton.animationState.setAnimation(0, "animation", true);

    let spineTest = new SpecificDistractionAnim(
      this,
      1554,
      950,
      "skeleton",
      "skeleton-atlas"
    );
    spineTest.spineObject.animationState.setAnimation(0, "animation", true);

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
