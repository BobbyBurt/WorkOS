/** @format */

import Employee from "./Employee";
import { employeeKey } from "./EmployeeData";
import EmployeeBAnim from "./employees/EmployeeBAnim";

export default class EmployeeB extends Employee {
  constructor(game: Phaser.Game, key: employeeKey) {
    super(game, key);
  }

  private thisEmployeeAnim = new EmployeeBAnim();

  /**
   *
   *
   * High level
   */
  public createAnim() {
    let animationMap = this.thisEmployeeAnim.getAnim();
    super.createAnimFromMap(animationMap, "employee-animation-test");
  }

  public initialAni;

  /**
   * Distracts if condition is met.
   * @param to
   * @param content TODO: make this an object or something.
   */
  // public override sendEmail(content: string) {
  //   if (content === "distraction") {
  //     if (this.state === "working") {
  //       this.state = "distracted";
  //       super.setCameraImage("distracted");
  //     }
  //   }
  // }

  override animationCompleteCallback(animationKey: string) {
    console.debug("subclass");
  }
}
