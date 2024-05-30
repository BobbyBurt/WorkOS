/** @format */

import { ProgramBaseScene } from "~/scenes/programs/ProgramScene";
import TaskButtonPrefab from "./TaskButtonPrefab";
import WindowPrefab from "./WindowPrefab";
import eventKeys from "~/data/eventKeys";
import TaskbarPrefab from "./TaskbarPrefab";

/**
 * Behavioural layer of Task Button. Extends TaskButtonPrefab which is the visual, Phaser Editor generated layer.
 */
export default class TaskButton extends TaskButtonPrefab {
  constructor(
    scene: Phaser.Scene,
    programScene: ProgramBaseScene,
    taskbarPrefab: TaskbarPrefab,
    x?: number,
    y?: number
  ) {
    super(scene, x ?? 0, y ?? 0);

    this.nameText.setText(programScene.name);
    this.backSlice.setSize(
      this.nameText.displayWidth + 80,
      this.backSlice.height
    );
    // TODO: icon

    this.programScene = programScene;
    this.TaskbarPrefab = taskbarPrefab;

    this.backSlice.setInteractive();
    this.backSlice.on("pointerup", () => {
      this.onClick();
    });
    this.backSlice.on("pointerover", () => {
      //   this.setAlpha(0.8);
    });
    this.backSlice.on("pointerout", () => {
      //   this.setAlpha(1);
    });
  }

  public programScene!: ProgramBaseScene;

  private TaskbarPrefab!: TaskbarPrefab;

  /** Callback */
  private onClick() {
    this.programScene.setMinimize();
  }

  public appear() {
    this.setVisible(true);

    this.scene.time.delayedCall(1, () => {
      this.TaskbarPrefab.repositionTaskButtons();
    });
  }

  public disappear() {
    this.setVisible(false);

    this.scene.time.delayedCall(1, () => {
      this.TaskbarPrefab.repositionTaskButtons();
    });
  }

  public setFocused(value: boolean) {
    this.setAlpha(value ? 1 : 0.7);
  }
}
