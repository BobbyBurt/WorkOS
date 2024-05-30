/** @format */

import CameraProgramScene from "~/scenes/programs/CameraProgramScene";
import EmailProgramScene from "~/scenes/programs/EmailProgramScene";
import { employeeData, employeeDataMap, employeeKey } from "./EmployeeData";

export default class Employee {
  private game: Phaser.Game;

  constructor(game: Phaser.Game, key: employeeKey) {
    this.game = game;
    this.key = key;
    this.data = employeeDataMap.get(key)!;
  }

  protected readonly data: employeeData;
  protected readonly key: employeeKey;

  /** 'working', 'distracted', 'in-trouble', 'fired'
   * TODO: Make this into a union type. Trouble is that employee subclass will need to assign custom states. */
  protected state = "working";

  /**
   * If distraction condition is met, will set camera image to distracted.
   * @param to
   * @param content TEMP
   */
  public sendEmail(content: string) {
    // console.log(`email from ${this.data.name}: Please don't bother me.`);

    if (content === this.data.distractableFile) {
      this.setCameraImage("distracted");
    }
  }

  protected setCameraImage(state: string) {
    let cameraProgram = this.game.scene.getScene(
      "camera-program"
    ) as CameraProgramScene;
    if (cameraProgram) {
      cameraProgram.setCameraImage(this.key, `${this.key}-${state}`);
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
