/** @format */

import Employee from "./Employee";
import { employeeKey } from "./EmployeeData";
import EmployeeTemplate from "./EmployeeTemplate";

export default class EmployeeDirectory {
  private static employeeMap: Map<employeeKey, Employee>;

  /**
   * To be called once in `Boot`
   * @param game ref passed to `Employee`
   * @returns
   */
  public static createEmployees(game: Phaser.Game) {
    if (EmployeeDirectory.employeeMap) {
      return;
    }

    EmployeeDirectory.employeeMap = new Map<employeeKey, Employee>([
      ["employee-B", new EmployeeTemplate(game, "employee-B")],
    ]);
  }

  public static getEmployee(name: employeeKey): Employee {
    return EmployeeDirectory.employeeMap.get(name)!;
  }
}
