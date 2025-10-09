/** @format */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
import {
  SkinsAndAnimationBoundsProvider,
  SpinePlugin,
  TrackEntry,
} from "@esotericsoftware/spine-phaser";
import { SpineGameObject } from "@esotericsoftware/spine-phaser";
import DistractionObject, {
  distractionAnimSettings,
} from "./DistractionObject";

export default class SpecificDistractionAnim extends DistractionObject {
  constructor(scene: Phaser.Scene) {
    super(
      scene,
      960,
      540,
      "skeleton",
      "skeleton-atlas",
      new Map<string, distractionAnimSettings>([["asdf", { sound: true }]])
      // LEFT OFF: can i change this string type to literal union so it only accepts a few animation names?
    );

    this.scene = scene;

    this.playAnimation();

    // EVERYTHING ABOVE IS TEMPLATE

    this.spineObject.animationState.addListener({
      event: (entry, event) => this.onCupDownEvent(),
    });
  }

  private onCupDownEvent() {
    this.scene.sound.play("cup-hitting-table");
  }
}
