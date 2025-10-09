/** @format */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
import {
  SkinsAndAnimationBoundsProvider,
  SpinePlugin,
  TrackEntry,
} from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";

/* 
anim / sound key: <distraction>-<animation>
exit anim / sound key: <distraction>-<animation>-exit
*/

export default class DistractionObject {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    dataKey: string,
    atlasKey: string,
    animations: Map<any, distractionAnimSettings>
  ) {
    this.scene = scene;

    this.spineObject = scene.add.spine(
      x,
      y,
      dataKey,
      atlasKey,
      new SkinsAndAnimationBoundsProvider(null, ["default"])
    );
    this.spineObject.skeleton.setSkinByName("default");
  }

  protected scene: Phaser.Scene;

  public spineObject: SpineGameObject;

  protected animations = new Map<string, distractionAnimSettings>();

  public playAnimation() {
    // if (this.soundKey) {
    //   this.scene.sound.play(this.soundKey);
    // }
    this.spineObject.animationState.setAnimation(0, "animation", false);
  }
}

export type distractionAnimSettings = {
  sound?: boolean;
  exitAnim?: boolean;
  exitSound?: boolean;
};
