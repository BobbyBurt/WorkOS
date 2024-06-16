/** @format */

import Employee from "./Employee";
import EmployeeB from "./EmployeeB";
import { employeeKey } from "./EmployeeData";

/** Houses basic employee animation configs and transition methods */
export default class EmployeeAnim {
  // I wanted to include an object with each of the anim keys so I could type them in easier, but the transition callback functions can't access them because they're not in this scope when called.

  /** TEMP: repremanded anim will be triggered by boss appear.
   *
   *  Decremented each distracted anim. Once 0, trigger repremanded anim.  */
  private distractedAnimCountdown = 5;

  public employee: Employee;

  protected basicEmployeeAnims = new Map<string, employeeAnimConfig>([
    [
      "working-loop",
      {
        repeat: 30,
        frameRate: 24,
        end: 1,
        transitionFunction: () => {
          this.workingLoopTransition();
        },
      },
    ],
    [
      "working-fidget",
      {
        repeat: 20,
        frameRate: 24,
        end: 1,
        transitionFunction: () => {
          this.workingFidget1Transition();
        },
      },
    ],
    [
      "distracting",
      {
        repeat: 0,
        frameRate: 1,
        end: 1,
        transitionFunction: () => {
          this.distractingTransition();
        },
      },
    ],
    [
      "distracted",
      {
        repeat: 15,
        frameRate: 6,
        end: 1,
        transitionFunction: () => {
          this.distractedTransition();
        },
      },
    ],
    [
      "distracted-fidget",
      {
        repeat: 10,
        frameRate: 12,
        end: 1,
        transitionFunction: () => {
          this.distractedFidget1Transition();
        },
      },
    ],
    [
      "repremanded",
      {
        repeat: 0,
        frameRate: 2,
        end: 3,
        transitionFunction: () => {
          this.repremandedTransition();
        },
      },
    ],
    [
      "firing",
      {
        repeat: 0,
        frameRate: 6,
        end: 2,
        transitionFunction: () => {
          this.firingTransition();
        },
      },
    ],
    [
      "fired",
      {
        repeat: 0,
        frameRate: 6,
        end: 0,
        transitionFunction: () => {
          this.dummyTransition();
        },
      },
    ],
  ]);

  workingLoopTransition() {
    if (this.employee.queueDistraction) {
      this.employee.sprite.play("distracting");
    } else {
      if (Phaser.Math.RND.frac() < 0.5) {
        this.employee.sprite.play("working-fidget");
      } else {
        this.employee.sprite.play("working-loop");
      }
    }
  }

  workingFidget1Transition() {
    if (this.employee.queueDistraction) {
      this.employee.sprite.play("distracting");
    } else {
      this.employee.sprite.play("working-loop");
    }
  }

  distractingTransition() {
    this.employee.sprite.play("distracted");
  }

  distractedTransition() {
    if (this.checkBossAppear()) {
      return;
    }

    if (Phaser.Math.RND.frac() < 0.5) {
      this.employee.sprite.play("distracted-fidget");
    } else {
      this.employee.sprite.play("distracted");
    }
  }

  distractedFidget1Transition() {
    if (this.checkBossAppear()) {
      return;
    }

    this.employee.sprite.play("distracted");
  }

  repremandedTransition() {
    this.employee.sprite.play("firing");
  }

  firingTransition() {
    this.employee.sprite.play("fired");
  }

  /**
   * TEMP
   * @returns true if boss appeared
   */
  checkBossAppear(): boolean {
    this.distractedAnimCountdown--;
    if (this.distractedAnimCountdown === 0) {
      this.employee.sprite.play("repremanded");
      return true;
    }
    return false;
  }

  /** For temp use to avoid errors */
  dummyTransition() {}

  /**
   * Edits one or more properties of the basic anims.
   *
   * To be used by subclass
   * @param animationsMap
   * @param animationKey
   * @param config Properties are all optional, only defined properties will be edited.
   */
  protected editAnimConfig(
    animationsMap: Map<string, employeeAnimConfig>,
    animationKey: string,
    config: {
      repeat?: number;
      frameRate?: number;
      end?: number;
      transitionFunction?: Function;
    }
  ) {
    let newConfig = animationsMap.get(animationKey);
    if (newConfig != undefined) {
      if (config.end) {
        newConfig.end = config.end;
      }
      if (config.frameRate) {
        newConfig.frameRate = config.frameRate;
      }
      animationsMap.set("working-loop", newConfig);
    }
  }
}

export type employeeAnimConfig = {
  repeat: number;
  frameRate: number;
  end: number;
  transitionFunction: Function;
};
