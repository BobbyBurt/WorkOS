/** @format */

// You can write more code here

import { ProgramBaseScene } from "./ProgramScene";

/* START OF COMPILED CODE */

import PointerButton from "../../components/PointerButton";
import ScrollField from "../../components/ScrollField";
import EmployeeDirectory from "~/employees/EmployeeDirectory";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EmailProgramScene extends ProgramBaseScene {
  constructor() {
    super("email-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // start_button
    const start_button = this.add.image(182, 245, "start-button");
    mainContainer.add(start_button);

    // scrollTest
    const scrollTest = this.add.container(0, 0);
    mainContainer.add(scrollTest);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(389, 60, 330, 1000);
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 14671839;
    scrollTest.add(rectangle_1);

    // bitmaptext_1
    const bitmaptext_1 = this.add.bitmapText(
      404,
      80,
      "nokia",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam, euismod viverra diam fringilla in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sem nec mauris aliquet mattis. Duis at dolor posuere, efficitur lacus id, lacinia tellus. Pellentesque quis tristique dui. Vivamus molestie lacus eu dolor eleifend, vel mattis est blandit.\n\nPraesent a varius lacus. Sed efficitur lorem in eros dictum, facilisis tempor odio vulputate. Proin justo ex, interdum ut quam in, tempus molestie velit. Aenean iaculis tortor in condimentum suscipit. Phasellus sagittis lacinia massa. Nullam euismod nisl eget nunc vehicula fringilla. Mauris eget fermentum libero. In tellus ipsum, pharetra a sodales ut, placerat vitae nibh. Fusce porta congue nulla sodales dictum. Sed in interdum augue. Phasellus dapibus tincidunt orci, in condimentum metus scelerisque a. Sed dignissim leo sit amet elit lacinia, vel pharetra mi viverra. Mauris mollis lacinia tellus vel efficitur. Morbi ultrices dui enim, sed pulvinar nisi aliquet at."
    );
    bitmaptext_1.tintTopLeft = 0;
    bitmaptext_1.tintTopRight = 0;
    bitmaptext_1.tintBottomLeft = 0;
    bitmaptext_1.tintBottomRight = 0;
    bitmaptext_1.text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam, euismod viverra diam fringilla in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sem nec mauris aliquet mattis. Duis at dolor posuere, efficitur lacus id, lacinia tellus. Pellentesque quis tristique dui. Vivamus molestie lacus eu dolor eleifend, vel mattis est blandit.\n\nPraesent a varius lacus. Sed efficitur lorem in eros dictum, facilisis tempor odio vulputate. Proin justo ex, interdum ut quam in, tempus molestie velit. Aenean iaculis tortor in condimentum suscipit. Phasellus sagittis lacinia massa. Nullam euismod nisl eget nunc vehicula fringilla. Mauris eget fermentum libero. In tellus ipsum, pharetra a sodales ut, placerat vitae nibh. Fusce porta congue nulla sodales dictum. Sed in interdum augue. Phasellus dapibus tincidunt orci, in condimentum metus scelerisque a. Sed dignissim leo sit amet elit lacinia, vel pharetra mi viverra. Mauris mollis lacinia tellus vel efficitur. Morbi ultrices dui enim, sed pulvinar nisi aliquet at.";
    bitmaptext_1.fontSize = -16;
    bitmaptext_1.maxWidth = 270;
    scrollTest.add(bitmaptext_1);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(687, 70, 4, 128);
    rectangle_2.setOrigin(0, 0);
    rectangle_2.isFilled = true;
    rectangle_2.fillColor = 11250603;
    mainContainer.add(rectangle_2);

    // start_button (components)
    new PointerButton(start_button);

    // scrollTest (components)
    const scrollTestScrollField = new ScrollField(scrollTest);
    scrollTestScrollField.BGRect = rectangle_1;
    scrollTestScrollField.scrollbarRect = rectangle_2;

    this.start_button = start_button;
    this.scrollTest = scrollTest;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private start_button!: Phaser.GameObjects.Image;
  private scrollTest!: Phaser.GameObjects.Container;
  private mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  // Write your code here

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(700, 500, "Email Looker 2001");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    // test
    this.start_button.on("click", () => {
      EmployeeDirectory.getEmployee("template").sendEmail("distraction");
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
