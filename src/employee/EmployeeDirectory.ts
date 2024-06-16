/** @format */

import Employee from "./Employee";
import { employeeKey } from "./EmployeeData";
import EmployeeB from "./EmployeeB";

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
      ["employee-B", new EmployeeB(game, "employee-B")],
      ["employee-F", new EmployeeB(game, "employee-F")],
      ["employee-G", new EmployeeB(game, "employee-G")],
      ["employee-J", new EmployeeB(game, "employee-J")],
      ["employee-K", new EmployeeB(game, "employee-K")],
      ["employee-L", new EmployeeB(game, "employee-L")],
      ["employee-O", new EmployeeB(game, "employee-O")],
      ["employee-X", new EmployeeB(game, "employee-X")],
    ]);
  }

  public static getEmployee(name: employeeKey): Employee {
    return EmployeeDirectory.employeeMap.get(name)!;
  }
}
