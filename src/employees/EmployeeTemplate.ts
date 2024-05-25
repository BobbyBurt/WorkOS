/** @format */

import Employee from "./Employee";
import { employeeKey } from "./EmployeeData";

export default class EmployeeTemplate extends Employee {
  constructor(game: Phaser.Game, key: employeeKey) {
    super(game, key);
  }

  /**
   * Distracts if condition is met.
   * @param to
   * @param content TODO: make this an object or something.
   */
  public override sendEmail(content: string) {
    if (content === "distraction") {
      if (this.state === "working") {
        this.state = "distracted";
        super.setCameraImage("distracted");
      }
    }
  }
}
