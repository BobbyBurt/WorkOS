/** @format */

import Employee from "./Employee";
import { employeeName } from "./EmployeeDirectory";

export default class EmployeeTemplate extends Employee {
  constructor(game: Phaser.Game, name: employeeName) {
    super(game, name);
  }

  /**
   * Distracts if condition is met.
   * @param to
   * @param content TEMP
   */
  public override sendEmail(content: string) {
    if (content === "distraction") {
      super.setCameraImage();
    }
  }
}
