/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import WebsiteBaseScene from "./WebsiteBaseScene";
import ScrollField from "../../../components/ScrollField";
import PointerButton from "../../../components/PointerButton";
/* START-USER-IMPORTS */
import { ProgramBaseScene } from "../ProgramScene";
/* END-USER-IMPORTS */

export default class TestWebsiteScene extends WebsiteBaseScene {

	constructor() {
		super("test-website-program");

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// mainContainer
		const mainContainer = this.add.container(0, 0);

		// scrollContainer
		const scrollContainer = this.add.container(0, 110);
		mainContainer.add(scrollContainer);

		// scrollRect
		const scrollRect = this.add.rectangle(0, 0, 900, 1200);
		scrollRect.setOrigin(0, 0);
		scrollRect.isFilled = true;
		scrollContainer.add(scrollRect);

		// homePage
		const homePage = this.add.container(0, -110);
		scrollContainer.add(homePage);

		// internalLinkButton
		const internalLinkButton = this.add.rectangle(435, 321, 300, 100);
		internalLinkButton.scaleX = 0.43658394584127047;
		internalLinkButton.scaleY = 0.2981200392985649;
		internalLinkButton.setOrigin(0, 0);
		internalLinkButton.alpha = 0.001;
		internalLinkButton.isFilled = true;
		internalLinkButton.fillColor = 14869218;
		homePage.add(internalLinkButton);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(442, 326, "nokia", "internal link");
		bitmaptext.tintTopLeft = 4423669;
		bitmaptext.tintTopRight = 4423669;
		bitmaptext.tintBottomLeft = 4423669;
		bitmaptext.tintBottomRight = 4423669;
		bitmaptext.text = "internal link";
		bitmaptext.fontSize = -16;
		bitmaptext.dropShadowAlpha = 0;
		bitmaptext.dropShadowColor = 3750201;
		homePage.add(bitmaptext);

		// externalLinkButton
		const externalLinkButton = this.add.rectangle(77, 420, 300, 100);
		externalLinkButton.setOrigin(0, 0);
		externalLinkButton.isFilled = true;
		externalLinkButton.fillColor = 11184810;
		homePage.add(externalLinkButton);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(98, 451, "nokia", "external link");
		bitmaptext_2.tintTopLeft = 4342338;
		bitmaptext_2.tintTopRight = 4342338;
		bitmaptext_2.tintBottomLeft = 4342338;
		bitmaptext_2.tintBottomRight = 4342338;
		bitmaptext_2.text = "external link";
		bitmaptext_2.fontSize = -32;
		homePage.add(bitmaptext_2);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(341, 326, "nokia", "click the ");
		bitmaptext_4.tintTopLeft = 4079166;
		bitmaptext_4.tintTopRight = 4079166;
		bitmaptext_4.tintBottomLeft = 4079166;
		bitmaptext_4.tintBottomRight = 4079166;
		bitmaptext_4.text = "click the ";
		bitmaptext_4.fontSize = -16;
		bitmaptext_4.dropShadowAlpha = 1;
		bitmaptext_4.dropShadowColor = 3750201;
		homePage.add(bitmaptext_4);

		// infoPage
		const infoPage = this.add.container(0, -110);
		infoPage.visible = false;
		scrollContainer.add(infoPage);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(61, 298, "nokia", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam, euismod viverra diam fringilla in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sem nec mauris aliquet mattis. Duis at dolor posuere, efficitur lacus id, lacinia tellus. Pellentesque quis tristique dui. Vivamus molestie lacus eu dolor eleifend, vel mattis est blandit.");
		bitmaptext_3.tintTopLeft = 3750201;
		bitmaptext_3.tintTopRight = 3750201;
		bitmaptext_3.tintBottomLeft = 3750201;
		bitmaptext_3.tintBottomRight = 3750201;
		bitmaptext_3.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam, euismod viverra diam fringilla in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sem nec mauris aliquet mattis. Duis at dolor posuere, efficitur lacus id, lacinia tellus. Pellentesque quis tristique dui. Vivamus molestie lacus eu dolor eleifend, vel mattis est blandit.";
		bitmaptext_3.fontSize = -16;
		bitmaptext_3.maxWidth = 700;
		infoPage.add(bitmaptext_3);

		// oE_Mem_Cake__Slow_Your_Roll__Mole
		const oE_Mem_Cake__Slow_Your_Roll__Mole = this.add.image(767, 104, "OE_Mem_Cake__Slow_Your_Roll__Mole");
		oE_Mem_Cake__Slow_Your_Roll__Mole.flipX = true;
		scrollContainer.add(oE_Mem_Cake__Slow_Your_Roll__Mole);

		// oE_Mem_Cake__Slow_Your_Roll__Mole_1
		const oE_Mem_Cake__Slow_Your_Roll__Mole_1 = this.add.image(96, 107, "OE_Mem_Cake__Slow_Your_Roll__Mole");
		scrollContainer.add(oE_Mem_Cake__Slow_Your_Roll__Mole_1);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(179, 68, "nokia", "BEWARE THE \n\"AMONG US\" IMPOSTER!");
		bitmaptext_1.tintTopLeft = 13434880;
		bitmaptext_1.tintTopRight = 13434880;
		bitmaptext_1.tintBottomLeft = 13434880;
		bitmaptext_1.tintBottomRight = 13434880;
		bitmaptext_1.text = "BEWARE THE \n\"AMONG US\" IMPOSTER!";
		bitmaptext_1.fontSize = -32;
		scrollContainer.add(bitmaptext_1);

		// scrollContainer (components)
		const scrollContainerScrollField = new ScrollField(scrollContainer);
		scrollContainerScrollField.BGRect = scrollRect;

		// internalLinkButton (components)
		new PointerButton(internalLinkButton);

		// externalLinkButton (components)
		new PointerButton(externalLinkButton);

		this.internalLinkButton = internalLinkButton;
		this.externalLinkButton = externalLinkButton;
		this.homePage = homePage;
		this.infoPage = infoPage;
		this.mainContainer = mainContainer;

		this.events.emit("scene-awake");
	}

	private internalLinkButton!: Phaser.GameObjects.Rectangle;
	private externalLinkButton!: Phaser.GameObjects.Rectangle;
	private homePage!: Phaser.GameObjects.Container;
	private infoPage!: Phaser.GameObjects.Container;
	private mainContainer!: Phaser.GameObjects.Container;

	/* START-USER-CODE */

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setupProgram() {
    // create
    super.editorCreate();
    this.displayLink = "www.malwarewarning.com";
    super.create(900, 600, "Internet Browser", "browser");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();

    this.startLoadingSequence();
  }

  create() {
    this.setupProgram();

    this.internalLinkButton.on("click", () => {
      this.homePage.setVisible(false);
      this.infoPage.setVisible(true);
      this.startLoadingSequence();
    });

    this.externalLinkButton.on("click", () => {
      this.scene.stop();
      this.scene.launch("test-website-2-program", {
        x: this.windowPrefab.x,
        y: this.windowPrefab.y,
      });
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
