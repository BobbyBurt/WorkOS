/** @format */

import Employee from "./Employee";
import EmployeeTemplate from "./EmployeeTemplate";

export type employeeName = "" | "template";

export default class EmployeeDirectory {
  private static employeeMap: Map<employeeName, Employee>;

  /**
   * To be called once in `Boot`
   * @param game ref passed to `Employee`
   * @returns
   */
  public static createEmployees(game: Phaser.Game) {
    if (EmployeeDirectory.employeeMap) {
      return;
    }

    EmployeeDirectory.employeeMap = new Map<employeeName, Employee>([
      ["template", new EmployeeTemplate(game, "template")],
    ]);
  }

  public static getEmployee(name: employeeName): Employee {
    return EmployeeDirectory.employeeMap.get(name)!;
  }
}
