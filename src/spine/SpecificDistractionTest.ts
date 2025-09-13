/** @format */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
import {
  SkinsAndAnimationBoundsProvider,
  SpinePlugin,
  TrackEntry,
} from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import DistractionAnim from "./DistractionAnim";

export default class SpecificDistractionAnim extends DistractionAnim {
  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    dataKey: string,
    atlasKey: string
  ) {
    super(scene, x, y, dataKey, atlasKey);

    this.scene = scene;

    // EVERYTHING ABOVE IS TEMPLATE

    this.spineObject.animationState.addListener({
      event: (entry, event) => this.onCupDownEvent(),
    });

    this.scene.sound.play("morning-sam-dialogue");
  }

  private onCupDownEvent() {
    this.scene.sound.play("cup-hitting-table");
  }
}
