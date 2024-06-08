/** @format */

import EmployeeAnim, { employeeAnimationConfig } from "../EmployeeAnim";

export default class EmployeeBAnim extends EmployeeAnim {
  private animKeysUnique = {
    uniqueAnim: "unique-anim",
  };

  public getAnim(): Map<string, employeeAnimationConfig> {
    let returnAnimMap = this.basicEmployeeAnimations;

    // add unique anim
    returnAnimMap.set("unique-aniim", {
      repeat: 30,
      frameRate: 24,
      end: 1,
      transitionFunction: this.transitionTestUnique,
    });

    // edit default anim
    let editedAnim = returnAnimMap.get("working-loop");
    if (editedAnim != undefined) {
      editedAnim.end = 3;
      let end = returnAnimMap.set("working-loop", editedAnim);
    }
    // this can be made into a function

    return returnAnimMap;
  }

  transitionTestUnique() {
    console.debug("transitionTestUnique");
  }

  override transitionTest(): void {
    console.debug("employeeBAnim subclass transition");
  }
}
