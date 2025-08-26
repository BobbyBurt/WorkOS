/** @format */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
import {
  SkinsAndAnimationBoundsProvider,
  SpinePlugin,
  TrackEntry,
} from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";

export default class DistractionAnim {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    dataKey: string,
    atlasKey: string
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
}
