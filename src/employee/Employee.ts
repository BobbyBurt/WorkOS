/** @format */

import CameraProgramScene from "~/scenes/programs/CameraProgramScene";
import EmailProgramScene from "~/scenes/programs/EmailProgramScene";
import { employeeData, employeeDataMap, employeeKey } from "./EmployeeData";
import EmployeeDefaultAnimations, {
  employeeAnimationConfig,
} from "./EmployeeAnim";

export default class Employee {
  private game: Phaser.Game;

  protected readonly data: employeeData;
  protected readonly key: employeeKey;

  /** 'working', 'distracted', 'in-trouble', 'fired'
   * TODO: Make this into a union type. Trouble is that employee subclass will need to assign custom states. */
  protected state = "working";

  /** Ref to sprite in `CameraProgramScene`. Set once the sprite is created. */
  public sprite: Phaser.GameObjects.Sprite;

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
      this.setCameraImage("distracted");
    }
  }

  /**
   * Creates the employee's animations from a map
   *
   * To be called from the employee subclass
   * @param animations
   * @param atlasKey
   */
  protected createAnimFromMap(
    animations: Map<string, employeeAnimationConfig>,
    atlasKey: string
  ) {
    animations.forEach((value, key) => {
      this.game.anims.create({
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
      (animation: any) => {
        let func = this.animCompleteCallbacks.get(animation.key);
        if (func) {
          func();
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

  protected setCameraImage(state: string) {
    let cameraProgram = this.game.scene.getScene(
      "camera-program"
    ) as CameraProgramScene;
    if (cameraProgram) {
      // cameraProgram.setCameraImage(this.key, `${this.key}-${state}`);
    }
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
