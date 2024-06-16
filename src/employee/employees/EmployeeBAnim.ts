/** @format */

import EmployeeAnim, {
  employeeAnimConfig as employeeAnimConfig,
} from "../EmployeeAnim";

export default class EmployeeBAnim extends EmployeeAnim {
  public getAnimsMap(): Map<string, employeeAnimConfig> {
    let animsMap = this.basicEmployeeAnims;

    // add unique anim
    animsMap.set("unique-aniim", {
      repeat: 30,
      frameRate: 24,
      end: 1,
      transitionFunction: this.transitionTestUnique,
    });

    // this.editAnimConfig(animsMap, "working-loop", { frameRate: 12 });

    return animsMap;
  }

  transitionTestUnique() {
    console.debug("transitionTestUnique");
  }

  // override transitionTest(): void {
  //   console.debug("employeeBAnim subclass transition");
  // }
}
