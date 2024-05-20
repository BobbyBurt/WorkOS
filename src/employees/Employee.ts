/** @format */

import CameraProgramScene from "~/scenes/programs/CameraProgramScene";
import { employeeName } from "./EmployeeDirectory";
import EmailProgramScene from "~/scenes/programs/EmailProgramScene";

export default class Employee {
  private game: Phaser.Game;

  private name: employeeName;

  // private state:

  constructor(game: Phaser.Game, name: employeeName) {
    this.game = game;
    this.name = name;
  }

  /**
   * Triggers default response
   * @param to
   * @param content TEMP
   */
  public sendEmail(content: string) {
    console.log(`email from ${this.name}: Please don't bother me.`);
  }

  protected setCameraImage() {
    let cameraProgram = this.game.scene.getScene(
      "camera-program"
    ) as CameraProgramScene;
    if (cameraProgram) {
      cameraProgram.time.delayedCall(1000, () => {
        cameraProgram.setCameraImage(this.name, "meeting-distracted");
      });
      cameraProgram.time.delayedCall(10000, () => {
        cameraProgram.setCameraImage(this.name, "meeting-boss-1");
        cameraProgram.sound.play("meeting-busted", { volume: 0.4 });
      });
      cameraProgram.time.delayedCall(13000, () => {
        cameraProgram.setCameraImage(this.name, "meeting-boss-2");
      });
    }
  }

  protected templateSandboxMethod() {
    let emailProgram = this.game.scene.getScene(
      "email-program"
    ) as EmailProgramScene;
    if (!emailProgram) {
      // handle
    }
  }
}
