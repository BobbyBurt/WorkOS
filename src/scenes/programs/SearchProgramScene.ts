/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import ScrollField from "../../components/ScrollField";
import PointerButton from "../../components/PointerButton";
/* START-USER-IMPORTS */
import { ProgramBaseScene } from "./ProgramScene";
import { keywordResults } from "~/web/searchKeywords";
import { keywordAlias } from "~/web/searchKeywordAlias";
import search from "~/web/search";
/* END-USER-IMPORTS */

export default class SearchProgramScene extends ProgramBaseScene {
  constructor() {
    super("search-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // rectangle_3
    const rectangle_3 = this.add.rectangle(0, 60, 128, 128);
    rectangle_3.scaleX = 6.268546640869119;
    rectangle_3.scaleY = 4.751692683213684;
    rectangle_3.setOrigin(0, 0);
    rectangle_3.isFilled = true;
    mainContainer.add(rectangle_3);

    // scrollTest
    const scrollTest = this.add.container(965, 0);
    mainContainer.add(scrollTest);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(389, 60, 330, 1500);
    rectangle_1.scaleX = 1.2797974774988319;
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 14671839;
    scrollTest.add(rectangle_1);

    // rectangle_2
    const rectangle_2 = this.add.rectangle(831, 70, 4, 128);
    rectangle_2.setOrigin(0, 0);
    rectangle_2.isFilled = true;
    rectangle_2.fillColor = 11250603;
    mainContainer.add(rectangle_2);

    // searchResult
    const searchResult = this.add.container(43, 236);
    mainContainer.add(searchResult);

    // rectangle_4
    const rectangle_4 = this.add.rectangle(0, 0, 700, 70);
    rectangle_4.setOrigin(0, 0);
    rectangle_4.isFilled = true;
    rectangle_4.fillColor = 14869218;
    rectangle_4.isStroked = true;
    rectangle_4.strokeColor = 10204621;
    rectangle_4.lineWidth = 2;
    searchResult.add(rectangle_4);

    // searchBarText_1
    const searchBarText_1 = this.add.bitmapText(
      21,
      24,
      "nokia",
      "awsome_file_best.pdf"
    );
    searchBarText_1.tintTopLeft = 0;
    searchBarText_1.tintTopRight = 0;
    searchBarText_1.tintBottomLeft = 0;
    searchBarText_1.tintBottomRight = 0;
    searchBarText_1.text = "awsome_file_best.pdf";
    searchBarText_1.fontSize = -16;
    searchResult.add(searchBarText_1);

    // rectangle_5
    const rectangle_5 = this.add.rectangle(488, 16, 180, 40);
    rectangle_5.setOrigin(0, 0);
    rectangle_5.isFilled = true;
    rectangle_5.fillColor = 3716171;
    rectangle_5.isStroked = true;
    rectangle_5.strokeColor = 3929387;
    rectangle_5.lineWidth = 2;
    searchResult.add(rectangle_5);

    // bitmaptext_1
    const bitmaptext_1 = this.add.bitmapText(554, 26, "nokia", "send");
    bitmaptext_1.text = "send";
    bitmaptext_1.fontSize = -16;
    searchResult.add(bitmaptext_1);

    // searchBarRect
    const searchBarRect = this.add.rectangle(45, 107, 500, 40);
    searchBarRect.setOrigin(0, 0);
    searchBarRect.isFilled = true;
    searchBarRect.fillColor = 14869218;
    searchBarRect.isStroked = true;
    searchBarRect.strokeColor = 10204621;
    searchBarRect.lineWidth = 2;
    mainContainer.add(searchBarRect);

    // searchBarText
    const searchBarText = this.add.bitmapText(
      58,
      117,
      "nokia",
      "example text is here"
    );
    searchBarText.tintTopLeft = 0;
    searchBarText.tintTopRight = 0;
    searchBarText.tintBottomLeft = 0;
    searchBarText.tintBottomRight = 0;
    searchBarText.text = "example text is here";
    searchBarText.fontSize = -16;
    mainContainer.add(searchBarText);

    // searchButtonRect
    const searchButtonRect = this.add.rectangle(582, 107, 180, 40);
    searchButtonRect.setOrigin(0, 0);
    searchButtonRect.isFilled = true;
    searchButtonRect.fillColor = 5804492;
    searchButtonRect.isStroked = true;
    searchButtonRect.strokeColor = 2862581;
    searchButtonRect.lineWidth = 2;
    mainContainer.add(searchButtonRect);

    // bitmaptext
    const bitmaptext = this.add.bitmapText(641, 117, "nokia", "search");
    bitmaptext.text = "search";
    bitmaptext.fontSize = -16;
    mainContainer.add(bitmaptext);

    // searchBarText_2
    const searchBarText_2 = this.add.bitmapText(58, 191, "nokia", "Results");
    searchBarText_2.tintTopLeft = 0;
    searchBarText_2.tintTopRight = 0;
    searchBarText_2.tintBottomLeft = 0;
    searchBarText_2.tintBottomRight = 0;
    searchBarText_2.text = "Results";
    searchBarText_2.fontSize = -24;
    mainContainer.add(searchBarText_2);

    // lists
    const attachmentButtonList: Array<any> = [];
    const attachmentTextList: Array<any> = [];
    const employeeButtonList: Array<any> = [];
    const employeeTextList: Array<any> = [];

    // scrollTest (components)
    const scrollTestScrollField = new ScrollField(scrollTest);
    scrollTestScrollField.BGRect = rectangle_1;
    scrollTestScrollField.scrollbarRect = rectangle_2;

    // rectangle_5 (components)
    new PointerButton(rectangle_5);

    // searchBarRect (components)
    new PointerButton(searchBarRect);

    // searchButtonRect (components)
    new PointerButton(searchButtonRect);

    this.scrollTest = scrollTest;
    this.searchBarText_1 = searchBarText_1;
    this.searchBarRect = searchBarRect;
    this.searchBarText = searchBarText;
    this.searchButtonRect = searchButtonRect;
    this.searchBarText_2 = searchBarText_2;
    this.mainContainer = mainContainer;
    this.attachmentButtonList = attachmentButtonList;
    this.attachmentTextList = attachmentTextList;
    this.employeeButtonList = employeeButtonList;
    this.employeeTextList = employeeTextList;

    this.events.emit("scene-awake");
  }

  private scrollTest!: Phaser.GameObjects.Container;
  private searchBarText_1!: Phaser.GameObjects.BitmapText;
  private searchBarRect!: Phaser.GameObjects.Rectangle;
  private searchBarText!: Phaser.GameObjects.BitmapText;
  private searchButtonRect!: Phaser.GameObjects.Rectangle;
  private searchBarText_2!: Phaser.GameObjects.BitmapText;
  private mainContainer!: Phaser.GameObjects.Container;
  private attachmentButtonList!: Array<any>;
  private attachmentTextList!: Array<any>;
  private employeeButtonList!: Array<any>;
  private employeeTextList!: Array<any>;

  /* START-USER-CODE */

  private searchBarSelected = false;
  private searchString = "";
  private textCursorVisible = false;
  private searchBarUntouched = true;
  private readonly searchBarInitialText = "Click here and type your inquiry";
  private readonly searchStringMaxChar = 50;

  private readonly allLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(800, 600, "Search Engine", "Search");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    this.searchBarText.setTint(0x848484, 0x848484, 0x848484, 0x848484);
    this.searchBarText.setText(this.searchBarInitialText);
    this.searchBarRect.on("click", () => {
      this.searchBarSelected = true;
      this.searchBarUntouched = false;
      this.searchBarText.setText(this.searchString);
      this.searchBarText.setTint(0x000000, 0x000000, 0x000000, 0x000000);
    });

    this.textCursorBlink();

    this.allLetters.forEach((value) => {
      this.input.keyboard?.on(`keydown-${value}`, () => {
        if (this.searchString.length > this.searchStringMaxChar) {
          return;
        }
        value = value.toLowerCase();
        this.searchString += value;
        this.searchBarText.setText(this.searchString);
      });
    });
    this.input.keyboard?.on("keydown-SPACE", () => {
      if (this.searchString.length > this.searchStringMaxChar) {
        return;
      }
      this.searchString += " ";
      this.searchBarText.setText(this.searchString);
    });
    this.input.keyboard?.on("keydown-BACKSPACE", () => {
      this.searchString = this.searchString.slice(
        0,
        this.searchString.length - 1
      );
      this.searchBarText.setText(this.searchString);
    });

    this.input.keyboard?.on("keydown-ENTER", () => {
      this.search();
    });

    this.searchButtonRect.on("click", () => {
      this.search();
    });
  }

  textCursorBlink() {
    this.time.delayedCall(600, this.textCursorBlink, undefined, this);
    if (this.searchBarSelected) {
      this.textCursorVisible = !this.textCursorVisible;
      this.searchBarText.setText(
        this.searchString + (this.textCursorVisible ? "" : "|")
      );
    }
  }

  search() {
    let searchResult = search.search(this.searchString);
    console.debug(searchResult);
    if (searchResult.links.length === 0) {
      // no results feedback
    } else {
      if (searchResult.noResultKeywords.length > 1) {
        // show unsuccessful keywords feedback
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
