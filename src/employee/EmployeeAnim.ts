/** @format */

import { employeeKey } from "./EmployeeData";

/** Houses basic employee animation configs and transition methods */
export default class EmployeeAnim {
  protected basicEmployeeAnimations = new Map<string, employeeAnimationConfig>([
    [
      "working-loop",
      {
        repeat: 30,
        frameRate: 24,
        end: 1,
        transitionFunction: this.transitionTest,
      },
    ],
    // [
    //   "working-fidget",
    //   {
    //     key: "working-fidget",
    //     repeat: 10,
    //   },
    // ],
  ]);

  transitionTest() {
    console.debug("employeeAnim transition");
  }

  // static createEmployeeAnimations(
  //   employeeKey: employeeKey | "",
  //   game: Phaser.Game
  // ) {
  //   // let employee = employeeKey;
  //   let employee = "";
  //   let atlas = "employee-animation-test";
  //   // TEMP

  //   game.anims.create({
  //     key: employee + "working-loop",
  //     repeat: 30,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "working-loop/",
  //       zeroPad: 4,
  //       end: 1,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "working-fidget",
  //     repeat: 10,
  //     frameRate: 12,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "working-fidget/",
  //       zeroPad: 4,
  //       end: 1,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "distracting",
  //     frameRate: 1,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "distracting/",
  //       zeroPad: 4,
  //       end: 1,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "distracted",
  //     repeat: 15,
  //     frameRate: 6,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "distracted/",
  //       zeroPad: 4,
  //       end: 1,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "distracted-fidget",
  //     repeat: 10,
  //     frameRate: 12,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "distracted-fidget/",
  //       zeroPad: 4,
  //       end: 1,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "repremanded",
  //     frameRate: 2,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "repremanded/",
  //       zeroPad: 4,
  //       end: 3,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "firing",
  //     frameRate: 6,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "firing/",
  //       zeroPad: 4,
  //       end: 2,
  //     }),
  //   });
  //   game.anims.create({
  //     key: employee + "fired",
  //     frameRate: 6,
  //     frames: game.anims.generateFrameNames(atlas, {
  //       prefix: "fired/",
  //       zeroPad: 4,
  //       end: 0,
  //     }),
  // });
  // }
}

export type employeeAnimationConfig = {
  repeat: number;
  frameRate: number;
  end: number;
  transitionFunction: Function;
};
