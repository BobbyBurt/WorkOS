/** @format */

import Phaser from "phaser";
import SpecificDistractionAnim from "./SpecificDistractionTest";

export default class DistractionManager {
  constructor(scene: Phaser.Scene) {
    this.scene = scene;

    // let spineTest = new SpecificDistractionAnim(this.scene);
  }

  private scene: Phaser.Scene;
}
