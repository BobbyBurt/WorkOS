/** @format */

import BrowserBarPrefab from "~/prefabs/BrowserBarPrefab";
import { ProgramBaseScene } from "../ProgramScene";
import dataManagerKeys from "~/data/dataManagerKeys";
import ThrobberPrefab from "~/prefabs/ThrobberPrefab";

export default class WebsiteBaseScene extends ProgramBaseScene {
  /**
   * Array of website scene keys from first to last visited.
   *
   * TODO: empty upon browser close.
   */
  static internetHistory = new Array<string>();

  protected displayLink: string;

  init(data: { x: number; y: number }) {
    if (data.x) {
      this.windowInitialPosition.x = data.x;
      this.windowInitialPosition.y = data.y;
      ``;
    }
  }

  create(
    width: number,
    height: number,
    name: string,
    taskbarName?: string,
    immobile?: boolean
  ) {
    this.browserBar = new BrowserBarPrefab(
      this,
      this.windowInitialPosition.x + this.programMaskOffset.x,
      this.windowInitialPosition.y + this.programMaskOffset.y + 60
    );
    this.add.existing(this.browserBar);
    this.browserBar.linkText.setText(this.displayLink!);
    this.browserBar.setDepth(9);
    this.browserBar.backButton.on("click", () => {
      if (WebsiteBaseScene.internetHistory.length > 1) {
        WebsiteBaseScene.internetHistory.pop();
        let lastSceneKey =
          WebsiteBaseScene.internetHistory[
            WebsiteBaseScene.internetHistory.length - 1
          ];
        this.scene.stop();
        this.scene.launch(lastSceneKey, {
          x: this.windowPrefab.x,
          y: this.windowPrefab.y,
        });
      }
    });

    WebsiteBaseScene.internetHistory.push(this.scene.key);

    super.create(width, height, "Internet Browser", "browser", immobile);
  }

  /** Creates rect covering the scene and displays the throbber prefab. */
  startLoadingSequence() {
    let loadingCoverRect = this.add.rectangle(0, 60, 1000, 1000);
    loadingCoverRect.setOrigin(0, 0);
    loadingCoverRect.visible = true;
    loadingCoverRect.isFilled = true;
    loadingCoverRect.setDepth(20);
    this.programContainer.add(loadingCoverRect);

    let throbber = new ThrobberPrefab(this, this.width / 2, this.height / 2);
    this.add.existing(throbber);
    throbber.setDepth(20);
    this.programContainer.add(throbber);

    this.time.addEvent({
      delay: Phaser.Math.RND.between(500, 2000),
      callback: () => {
        loadingCoverRect.destroy();
        throbber.destroy();
      },
    });
  }
}
