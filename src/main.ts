/** @format */

import cloudSaves from "./API/SavesData";
import medalScene from "./API/medalScene";
import { newgroundsIOWrapper } from "./API/newgroundsIOWrapper";
import fullscreenHandler from "./FullscreenHandler";
import EmployeeDirectory from "./employee/EmployeeDirectory";
import DebugScene from "./scenes/DebugScene";
import DesktopScene from "./scenes/DesktopScene";
import OverlapScene from "./scenes/OverlapScene";
import Preload from "./scenes/Preload";
import PrototypeScene from "./scenes/PrototypeScene";
import CameraProgramScene from "./scenes/programs/CameraProgramScene";
import DatabaseProgramScene from "./scenes/programs/DatabaseProgramScene";
import EmailProgramScene from "./scenes/programs/EmailProgramScene";
import HackingProgramScene from "./scenes/programs/HackingProgramScene";
import ProgramScene from "./scenes/programs/ProgramScene";
import TemplateProgramScene from "./scenes/programs/TemplateProgramScene";

window.addEventListener("load", function () {
  if (__DEV__) {
    console.clear();
  }

  var game = new Phaser.Game({
    title: "Work OS",
    // url: 'https://www.newgrounds.com/projects/games/1923225/preview',
    version: "2",

    // type: __DEV__ ? Phaser.CANVAS : Phaser.AUTO,
    type: Phaser.AUTO,
    backgroundColor: "#333333",
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      height: fullscreenHandler.windowedRes.height,
      width: fullscreenHandler.windowedRes.width,
      // width: 1920,
      // height: 1080,
    },
  });

  game.scene.add("preload", Preload);
  game.scene.add("boot", Boot, true);
  game.scene.add("medal", medalScene);
  game.scene.add("desktop", DesktopScene);
  game.scene.add("overlap", OverlapScene);
  game.scene.add("debug", DebugScene);
  game.scene.add("prototype", PrototypeScene);

  // programs
  game.scene.add("template-program", TemplateProgramScene);
  game.scene.add("email-program", EmailProgramScene);
  game.scene.add("camera-program", CameraProgramScene);
  game.scene.add("database-program", DatabaseProgramScene);
  game.scene.add("hacking-program", HackingProgramScene);
});

class Boot extends Phaser.Scene {
  private ngWrap: newgroundsIOWrapper;

  /**
   * load preload assets, then the scene
   */
  preload() {
    this.load.pack("pack", "assets/preload-asset-pack.json");
    this.load.on(Phaser.Loader.Events.COMPLETE, () =>
      this.scene.start("preload")
    );
  }

  create() {
    // NG.io event callbacks
    this.game.events.once(Phaser.Core.Events.STEP, () => {
      this.ngWrap = new newgroundsIOWrapper();
      this.ngWrap.start();
    });
    this.game.events.on(Phaser.Core.Events.STEP, () => {
      NGIO.keepSessionAlive();
      if (NGIO.isInitialized) {
        this.ngWrap.update(this.game);
      }
    });

    this.setSaveDataKeys();

    EmployeeDirectory.createEmployees(this.game);

    this.input.setGlobalTopOnly(true);
  }

  /**
   * Sets registry data keys that will be included in the save file.
   */
  setSaveDataKeys() {
    let dataKeys = new Array<string>();

    dataKeys.push("keys-for-data-that-should-be-saved");

    cloudSaves.setDataKeys(dataKeys);
  }
}
