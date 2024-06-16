/** @format */

import CameraProgramScene from "~/scenes/programs/CameraProgramScene";
import EmailProgramScene from "~/scenes/programs/EmailProgramScene";
import { employeeData, employeeDataMap, employeeKey } from "./EmployeeData";
import EmployeeDefaultAnimations, { employeeAnimConfig } from "./EmployeeAnim";
import EmployeeAnim from "./EmployeeAnim";
import EmployeeBAnim from "./employees/EmployeeBAnim";

export default class Employee {
  private game: Phaser.Game;

  protected readonly data: employeeData;
  public readonly key: employeeKey;

  /** Ref to sprite in `CameraProgramScene`. Set once the sprite is created. */
  public sprite: Phaser.GameObjects.Sprite;

  public queueDistraction = false;

  /**
   * `key`: Animation key
   * `value`: Transition function to call on animation complete
   */
  private animCompleteCallbacks = new Map<string, Function>();

  constructor(game: Phaser.Game, key: employeeKey) {
    this.game = game;
    this.key = key;
    this.data = employeeDataMap.get(key)!;
  }

  /**
   * If distraction condition is met, will set camera image to distracted.
   * @param to
   * @param content TEMP
   */
  public sendEmail(content: string) {
    // console.log(`email from ${this.data.name}: Please don't bother me.`);

    if (content === this.data.distractableFile) {
      this.queueDistraction = true;
    }
  }

  public thisEmployeeAnim = new EmployeeBAnim();

  /**
   *
   *
   * High level
   */
  public createAnims(employeeKey: employeeKey) {
    this.thisEmployeeAnim.employee = this;
    let animationMap = this.thisEmployeeAnim.getAnimsMap();
    if (employeeKey === "employee-B") {
      this.createAnimsFromMap(animationMap, "employee-animation-test-B");
    } else {
      this.createAnimsFromMap(animationMap, "employee-animation-test");
    }
  }

  /**
   *
   */
  public playInitialAnim() {
    this.sprite.play("working-loop");
  }

  /**
   * Creates the employee's animations from a map.
   * Also sets up the onComplete callbacks.
   *
   * To be called from the employee subclass.
   * @param animations
   * @param atlasKey
   */
  protected createAnimsFromMap(
    animations: Map<string, employeeAnimConfig>,
    atlasKey: string
  ) {
    animations.forEach((value, key) => {
      this.sprite.anims.create({
        key: key,
        repeat: value.repeat,
        frameRate: value.frameRate,
        frames: this.game.anims.generateFrameNames(atlasKey, {
          prefix: key + "/",
          zeroPad: 4,
          end: value.end,
        }),
      });

      this.animCompleteCallbacks.set(key, value.transitionFunction);
    });

    this.sprite.on(
      Phaser.Animations.Events.ANIMATION_COMPLETE,
      (animation: { key: string }) => {
        let onComplete = this.animCompleteCallbacks.get(animation.key);
        if (onComplete) {
          onComplete(this);
        } else {
          console.warn(
            `No onComplete callback exists for animation ${animation.key}, employee: ${this.key}`
          );
        }
      }
    );
  }

  public animationCompleteCallback(animationKey: string) {
    console.debug("base");
    // switch (animationKey) {
    //   case EmployeeAnimations.defaultEmployeeStates.workingLoop: {
    //     if (Phaser.Math.RND.frac() < 0.5) {
    //       this.sprite.play(
    //         EmployeeAnimations.defaultEmployeeStates.workingFidget[0]
    //       );
    //     }
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
  }

  protected templateSandboxMethod() {
    let emailProgram = this.game.scene.getScene(
      "email-program"
    ) as EmailProgramScene;
    if (!emailProgram) {
      // handle
    }
  }
}
