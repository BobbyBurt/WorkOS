/** @format */

import Employee from "./Employee";
import EmployeeAnim from "./EmployeeAnim";
import { employeeKey } from "./EmployeeData";
import EmployeeBAnim from "./employees/EmployeeBAnim";

export default class EmployeeB extends Employee {
  constructor(game: Phaser.Game, key: employeeKey) {
    super(game, key);
  }

  // public thisEmployeeAnim = new EmployeeBAnim();

  // /**
  //  *
  //  *
  //  * High level
  //  */
  // public createAnims() {
  //   this.thisEmployeeAnim.employee = this;
  //   let animationMap = this.thisEmployeeAnim.getAnimsMap();
  //   super.createAnimsFromMap(animationMap, "employee-animation-test");
  // }

  // /**
  //  *
  //  */
  // public playInitialAnim() {
  //   this.sprite.play("working-loop");
  // }
}
