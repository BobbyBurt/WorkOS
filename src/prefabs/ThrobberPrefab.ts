/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ThrobberPrefab extends Phaser.GameObjects.BitmapText {
  constructor(scene: Phaser.Scene, x?: number, y?: number, font?: string) {
    super(scene, x ?? 0, y ?? 0, font ?? "nokia");

    this.setOrigin(0.5, 0.5);
    this.tintTopLeft = 14474460;
    this.tintTopRight = 11842740;
    this.tintBottomLeft = 6381921;
    this.tintBottomRight = 5263440;
    this.text = ".ili.";
    this.fontSize = -32;

    /* START-USER-CTR-CODE */
    this.setup(scene);

    this.on("destroy", () => {
      this.loopedTimerEvent.remove();
    });
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  private loopedTimerEvent: Phaser.Time.TimerEvent;

  private stringSequence = [
    ".....",
    "i....",
    "li...",
    "ili..",
    ".ili.",
    "..ili",
    "...il",
    "....i",
    ".....",
    ".....",
    ".....",
  ];
  private sequenceIndex = 0;

  setup(scene: Phaser.Scene) {
    this.loopedTimerEvent = scene.time.addEvent({
      delay: 60,
      loop: true,
      callback: () => {
        this.sequenceIndex++;
        if (this.sequenceIndex > this.stringSequence.length - 1) {
          this.sequenceIndex = 0;
        }
        this.setText(this.stringSequence[this.sequenceIndex]);
      },
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
