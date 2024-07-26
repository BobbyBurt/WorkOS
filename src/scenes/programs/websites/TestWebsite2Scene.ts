/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import WebsiteBaseScene from "./WebsiteBaseScene";
import ScrollField from "../../../components/ScrollField";
/* START-USER-IMPORTS */
import { ProgramBaseScene } from "../ProgramScene";
/* END-USER-IMPORTS */

export default class TestWebsite2Scene extends WebsiteBaseScene {

	constructor() {
		super("test-website-2-program");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mainContainer
		const mainContainer = this.add.container(0, 0);

		// scrollBG
		const scrollBG = this.add.rectangle(0, 110, 900, 800);
		scrollBG.setOrigin(0, 0);
		scrollBG.isFilled = true;
		mainContainer.add(scrollBG);

		// scrollContainer
		const scrollContainer = this.add.container(0, 0);
		mainContainer.add(scrollContainer);

		// taskbar_window_button_1
		const taskbar_window_button_1 = this.add.image(449, 581, "taskbar-window-button");
		taskbar_window_button_1.scaleX = 3.3235539759041517;
		taskbar_window_button_1.scaleY = 1.4697440443720686;
		scrollContainer.add(taskbar_window_button_1);

		// gettyimages_96210883_612x612
		const gettyimages_96210883_612x612 = this.add.image(580, 787, "gettyimages-96210883-612x612");
		gettyimages_96210883_612x612.scaleX = 1.6543551081479264;
		gettyimages_96210883_612x612.scaleY = 0.4514301677650977;
		scrollContainer.add(gettyimages_96210883_612x612);

		// ipad
		const ipad = this.add.image(195, 333, "2024-07-07 20_35_58-ipad evolution 2010 ipad - Google Search — Mozilla Firefox");
		ipad.scaleX = 0.47488888122671047;
		ipad.scaleY = 0.47488888122671047;
		scrollContainer.add(ipad);

		// text_1
		const text_1 = this.add.text(68, 140, "", {});
		text_1.tintTopLeft = 226303;
		text_1.tintTopRight = 226303;
		text_1.tintBottomLeft = 226303;
		text_1.tintBottomRight = 226303;
		text_1.text = "YOUR A LUCKY WINNER!";
		text_1.setStyle({ "fontFamily": "arial", "fontSize": "64px", "fontStyle": "bold" });
		scrollContainer.add(text_1);

		// text
		const text = this.add.text(161, 560, "", {});
		text.text = "CLICK HERE TO RECIEVE YOUR IPAD";
		text.setStyle({ "fontFamily": "arial", "fontSize": "32px", "fontStyle": "bold" });
		scrollContainer.add(text);

		// text_2
		const text_2 = this.add.text(388, 265, "", {});
		text_2.tintTopLeft = 0;
		text_2.tintTopRight = 0;
		text_2.tintBottomLeft = 0;
		text_2.tintBottomRight = 0;
		text_2.text = "You have been selected to win a FREE 2010 Apple iPad, no strings attached! The iPad is perfect for business or pleasure.";
		text_2.setStyle({ "fontFamily": "arial", "fontSize": "20px" });
		text_2.setWordWrapWidth(500);
		scrollContainer.add(text_2);

		// scrollContainer (components)
		const scrollContainerScrollField = new ScrollField(scrollContainer);
		scrollContainerScrollField.BGRect = scrollBG;

		this.mainContainer = mainContainer;

		this.events.emit("scene-awake");
	}

	private mainContainer!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setupProgram() {
    // create
    super.editorCreate();
    this.displayLink = "www.cool.com";
    super.create(900, 600, "Internet Browser", "browser");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();

    this.startLoadingSequence();
  }

  create() {
    this.setupProgram();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
