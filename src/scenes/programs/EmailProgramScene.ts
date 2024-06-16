/** @format */

// You can write more code here

import { ProgramBaseScene } from "./ProgramScene";

/* START OF COMPILED CODE */

import ScrollField from "../../components/ScrollField";
import PointerButton from "../../components/PointerButton";
/* START-USER-IMPORTS */
import {
  employeeData,
  employeeDataMap,
  employeeKey,
} from "~/employee/EmployeeData";
import EmployeeDirectory from "~/employee/EmployeeDirectory";
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

		// rectangle_3
		const rectangle_3 = this.add.rectangle(0, 60, 128, 128);
		rectangle_3.scaleX = 6.268546640869119;
		rectangle_3.scaleY = 4.751692683213684;
		rectangle_3.setOrigin(0, 0);
		rectangle_3.isFilled = true;
		mainContainer.add(rectangle_3);

		// scrollTest
		const scrollTest = this.add.container(0, 0);
		mainContainer.add(scrollTest);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(389, 60, 330, 1500);
		rectangle_1.scaleX = 1.2797974774988319;
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 14671839;
		scrollTest.add(rectangle_1);

		// attachmentButton
		const attachmentButton = this.add.image(421.97027587890625, 108.41703033447266, "white-px");
		attachmentButton.scaleX = 322.35755178196104;
		attachmentButton.scaleY = 33.165943827273765;
		attachmentButton.setOrigin(0, 0);
		scrollTest.add(attachmentButton);

		// page_go_icon_1
		const page_go_icon_1 = this.add.image(406, 126, "page-go-icon_1");
		scrollTest.add(page_go_icon_1);

		// bitmaptext_1
		const bitmaptext_1 = this.add.bitmapText(432, 116, "nokia", "notavirus.exe");
		bitmaptext_1.tintTopLeft = 0;
		bitmaptext_1.tintTopRight = 0;
		bitmaptext_1.tintBottomLeft = 0;
		bitmaptext_1.tintBottomRight = 0;
		bitmaptext_1.text = "notavirus.exe";
		bitmaptext_1.fontSize = -16;
		scrollTest.add(bitmaptext_1);

		// attachmentButton_1
		const attachmentButton_1 = this.add.image(422, 157, "white-px");
		attachmentButton_1.scaleX = 322.35755178196104;
		attachmentButton_1.scaleY = 33.165943827273765;
		attachmentButton_1.setOrigin(0, 0);
		scrollTest.add(attachmentButton_1);

		// bitmaptext_3
		const bitmaptext_3 = this.add.bitmapText(432, 164, "nokia", "SA2-AGhostsPumpkin.mp3");
		bitmaptext_3.tintTopLeft = 0;
		bitmaptext_3.tintTopRight = 0;
		bitmaptext_3.tintBottomLeft = 0;
		bitmaptext_3.tintBottomRight = 0;
		bitmaptext_3.text = "SA2-AGhostsPumpkin.mp3";
		bitmaptext_3.fontSize = -16;
		scrollTest.add(bitmaptext_3);

		// page_go_icon
		const page_go_icon = this.add.image(406, 174, "page-go-icon_1");
		scrollTest.add(page_go_icon);

		// attachmentButton_2
		const attachmentButton_2 = this.add.image(422, 205, "white-px");
		attachmentButton_2.scaleX = 322.35755178196104;
		attachmentButton_2.scaleY = 33.165943827273765;
		attachmentButton_2.setOrigin(0, 0);
		scrollTest.add(attachmentButton_2);

		// bitmaptext_4
		const bitmaptext_4 = this.add.bitmapText(432, 212, "nokia", "guitarheaven.com");
		bitmaptext_4.tintTopLeft = 0;
		bitmaptext_4.tintTopRight = 0;
		bitmaptext_4.tintBottomLeft = 0;
		bitmaptext_4.tintBottomRight = 0;
		bitmaptext_4.text = "guitarheaven.com";
		bitmaptext_4.fontSize = -16;
		scrollTest.add(bitmaptext_4);

		// page_go_icon_2
		const page_go_icon_2 = this.add.image(406, 222, "page-go-icon_1");
		scrollTest.add(page_go_icon_2);

		// attachmentButton_3
		const attachmentButton_3 = this.add.image(422, 250, "white-px");
		attachmentButton_3.scaleX = 322.35755178196104;
		attachmentButton_3.scaleY = 33.165943827273765;
		attachmentButton_3.setOrigin(0, 0);
		scrollTest.add(attachmentButton_3);

		// bitmaptext_5
		const bitmaptext_5 = this.add.bitmapText(432, 257, "nokia", "Host_protocall.exe");
		bitmaptext_5.tintTopLeft = 0;
		bitmaptext_5.tintTopRight = 0;
		bitmaptext_5.tintBottomLeft = 0;
		bitmaptext_5.tintBottomRight = 0;
		bitmaptext_5.text = "Host_protocall.exe";
		bitmaptext_5.fontSize = -16;
		scrollTest.add(bitmaptext_5);

		// page_go_icon_3
		const page_go_icon_3 = this.add.image(406, 267, "page-go-icon_1");
		scrollTest.add(page_go_icon_3);

		// attachmentButton_4
		const attachmentButton_4 = this.add.image(422, 298, "white-px");
		attachmentButton_4.scaleX = 322.35755178196104;
		attachmentButton_4.scaleY = 33.165943827273765;
		attachmentButton_4.setOrigin(0, 0);
		scrollTest.add(attachmentButton_4);

		// bitmaptext_6
		const bitmaptext_6 = this.add.bitmapText(432, 306, "nokia", "CoolMathGames.com");
		bitmaptext_6.tintTopLeft = 0;
		bitmaptext_6.tintTopRight = 0;
		bitmaptext_6.tintBottomLeft = 0;
		bitmaptext_6.tintBottomRight = 0;
		bitmaptext_6.text = "CoolMathGames.com";
		bitmaptext_6.fontSize = -16;
		scrollTest.add(bitmaptext_6);

		// page_go_icon_4
		const page_go_icon_4 = this.add.image(406, 316, "page-go-icon_1");
		scrollTest.add(page_go_icon_4);

		// attachmentButton_5
		const attachmentButton_5 = this.add.image(422, 343, "white-px");
		attachmentButton_5.scaleX = 322.35755178196104;
		attachmentButton_5.scaleY = 33.165943827273765;
		attachmentButton_5.setOrigin(0, 0);
		scrollTest.add(attachmentButton_5);

		// bitmaptext_7
		const bitmaptext_7 = this.add.bitmapText(432, 351, "nokia", "guessthebiblequote.com");
		bitmaptext_7.tintTopLeft = 0;
		bitmaptext_7.tintTopRight = 0;
		bitmaptext_7.tintBottomLeft = 0;
		bitmaptext_7.tintBottomRight = 0;
		bitmaptext_7.text = "guessthebiblequote.com";
		bitmaptext_7.fontSize = -16;
		scrollTest.add(bitmaptext_7);

		// page_go_icon_5
		const page_go_icon_5 = this.add.image(406, 361, "page-go-icon_1");
		scrollTest.add(page_go_icon_5);

		// attachmentButton_6
		const attachmentButton_6 = this.add.image(422, 392, "white-px");
		attachmentButton_6.scaleX = 322.35755178196104;
		attachmentButton_6.scaleY = 33.165943827273765;
		attachmentButton_6.setOrigin(0, 0);
		scrollTest.add(attachmentButton_6);

		// bitmaptext_8
		const bitmaptext_8 = this.add.bitmapText(432, 399, "nokia", "ConservativeNews.com");
		bitmaptext_8.tintTopLeft = 0;
		bitmaptext_8.tintTopRight = 0;
		bitmaptext_8.tintBottomLeft = 0;
		bitmaptext_8.tintBottomRight = 0;
		bitmaptext_8.text = "ConservativeNews.com";
		bitmaptext_8.fontSize = -16;
		scrollTest.add(bitmaptext_8);

		// page_go_icon_6
		const page_go_icon_6 = this.add.image(406, 409, "page-go-icon_1");
		scrollTest.add(page_go_icon_6);

		// attachmentButton_7
		const attachmentButton_7 = this.add.image(422, 438, "white-px");
		attachmentButton_7.scaleX = 322.35755178196104;
		attachmentButton_7.scaleY = 33.165943827273765;
		attachmentButton_7.setOrigin(0, 0);
		scrollTest.add(attachmentButton_7);

		// bitmaptext_9
		const bitmaptext_9 = this.add.bitmapText(432, 446, "nokia", "Star_Fox_64_promo.mp4");
		bitmaptext_9.tintTopLeft = 0;
		bitmaptext_9.tintTopRight = 0;
		bitmaptext_9.tintBottomLeft = 0;
		bitmaptext_9.tintBottomRight = 0;
		bitmaptext_9.text = "Star_Fox_64_promo.mp4";
		bitmaptext_9.fontSize = -16;
		scrollTest.add(bitmaptext_9);

		// page_go_icon_7
		const page_go_icon_7 = this.add.image(406, 456, "page-go-icon_1");
		scrollTest.add(page_go_icon_7);

		// attachmentButton_8
		const attachmentButton_8 = this.add.image(422, 490, "white-px");
		attachmentButton_8.scaleX = 322.35755178196104;
		attachmentButton_8.scaleY = 33.165943827273765;
		attachmentButton_8.setOrigin(0, 0);
		scrollTest.add(attachmentButton_8);

		// bitmaptext_10
		const bitmaptext_10 = this.add.bitmapText(432, 498, "nokia", "HighschoolBathroomSim.exe");
		bitmaptext_10.tintTopLeft = 0;
		bitmaptext_10.tintTopRight = 0;
		bitmaptext_10.tintBottomLeft = 0;
		bitmaptext_10.tintBottomRight = 0;
		bitmaptext_10.text = "HighschoolBathroomSim.exe";
		bitmaptext_10.fontSize = -16;
		scrollTest.add(bitmaptext_10);

		// page_go_icon_8
		const page_go_icon_8 = this.add.image(406, 508, "page-go-icon_1");
		scrollTest.add(page_go_icon_8);

		// attachmentButton_9
		const attachmentButton_9 = this.add.image(422, 536, "white-px");
		attachmentButton_9.scaleX = 322.35755178196104;
		attachmentButton_9.scaleY = 33.165943827273765;
		attachmentButton_9.setOrigin(0, 0);
		scrollTest.add(attachmentButton_9);

		// bitmaptext_11
		const bitmaptext_11 = this.add.bitmapText(432, 544, "nokia", "worldofcrosswords.com");
		bitmaptext_11.tintTopLeft = 0;
		bitmaptext_11.tintTopRight = 0;
		bitmaptext_11.tintBottomLeft = 0;
		bitmaptext_11.tintBottomRight = 0;
		bitmaptext_11.text = "worldofcrosswords.com";
		bitmaptext_11.fontSize = -16;
		scrollTest.add(bitmaptext_11);

		// page_go_icon_9
		const page_go_icon_9 = this.add.image(406, 554, "page-go-icon_1");
		scrollTest.add(page_go_icon_9);

		// attachmentButton_10
		const attachmentButton_10 = this.add.image(422, 588, "white-px");
		attachmentButton_10.scaleX = 322.35755178196104;
		attachmentButton_10.scaleY = 33.165943827273765;
		attachmentButton_10.setOrigin(0, 0);
		scrollTest.add(attachmentButton_10);

		// bitmaptext_12
		const bitmaptext_12 = this.add.bitmapText(432, 596, "nokia", "OMalloryDiary.mp4");
		bitmaptext_12.tintTopLeft = 0;
		bitmaptext_12.tintTopRight = 0;
		bitmaptext_12.tintBottomLeft = 0;
		bitmaptext_12.tintBottomRight = 0;
		bitmaptext_12.text = "OMalloryDiary.mp4";
		bitmaptext_12.fontSize = -16;
		scrollTest.add(bitmaptext_12);

		// page_go_icon_10
		const page_go_icon_10 = this.add.image(406, 606, "page-go-icon_1");
		scrollTest.add(page_go_icon_10);

		// attachmentButton_11
		const attachmentButton_11 = this.add.image(422, 635, "white-px");
		attachmentButton_11.scaleX = 322.35755178196104;
		attachmentButton_11.scaleY = 33.165943827273765;
		attachmentButton_11.setOrigin(0, 0);
		scrollTest.add(attachmentButton_11);

		// bitmaptext_13
		const bitmaptext_13 = this.add.bitmapText(432, 642, "nokia", "vid.com/top-10-locomotives");
		bitmaptext_13.tintTopLeft = 0;
		bitmaptext_13.tintTopRight = 0;
		bitmaptext_13.tintBottomLeft = 0;
		bitmaptext_13.tintBottomRight = 0;
		bitmaptext_13.text = "vid.com/top-10-locomotives";
		bitmaptext_13.fontSize = -16;
		scrollTest.add(bitmaptext_13);

		// page_go_icon_11
		const page_go_icon_11 = this.add.image(406, 652, "page-go-icon_1");
		scrollTest.add(page_go_icon_11);

		// attachmentButton_12
		const attachmentButton_12 = this.add.image(422, 681, "white-px");
		attachmentButton_12.scaleX = 322.35755178196104;
		attachmentButton_12.scaleY = 33.165943827273765;
		attachmentButton_12.setOrigin(0, 0);
		scrollTest.add(attachmentButton_12);

		// bitmaptext_14
		const bitmaptext_14 = this.add.bitmapText(432, 688, "nokia", "zombocom.com");
		bitmaptext_14.tintTopLeft = 0;
		bitmaptext_14.tintTopRight = 0;
		bitmaptext_14.tintBottomLeft = 0;
		bitmaptext_14.tintBottomRight = 0;
		bitmaptext_14.text = "zombocom.com";
		bitmaptext_14.fontSize = -16;
		scrollTest.add(bitmaptext_14);

		// page_go_icon_12
		const page_go_icon_12 = this.add.image(406, 698, "page-go-icon_1");
		scrollTest.add(page_go_icon_12);

		// attachmentButton_13
		const attachmentButton_13 = this.add.image(422, 739, "white-px");
		attachmentButton_13.scaleX = 322.35755178196104;
		attachmentButton_13.scaleY = 33.165943827273765;
		attachmentButton_13.setOrigin(0, 0);
		scrollTest.add(attachmentButton_13);

		// bitmaptext_15
		const bitmaptext_15 = this.add.bitmapText(432, 746, "nokia", "qualudeMarket.com");
		bitmaptext_15.tintTopLeft = 0;
		bitmaptext_15.tintTopRight = 0;
		bitmaptext_15.tintBottomLeft = 0;
		bitmaptext_15.tintBottomRight = 0;
		bitmaptext_15.text = "qualudeMarket.com";
		bitmaptext_15.fontSize = -16;
		scrollTest.add(bitmaptext_15);

		// page_go_icon_13
		const page_go_icon_13 = this.add.image(406, 756, "page-go-icon_1");
		scrollTest.add(page_go_icon_13);

		// attachmentButton_14
		const attachmentButton_14 = this.add.image(422, 792, "white-px");
		attachmentButton_14.scaleX = 322.35755178196104;
		attachmentButton_14.scaleY = 33.165943827273765;
		attachmentButton_14.setOrigin(0, 0);
		scrollTest.add(attachmentButton_14);

		// bitmaptext_16
		const bitmaptext_16 = this.add.bitmapText(432, 800, "nokia", "sexy-b**bs.jpeg");
		bitmaptext_16.tintTopLeft = 0;
		bitmaptext_16.tintTopRight = 0;
		bitmaptext_16.tintBottomLeft = 0;
		bitmaptext_16.tintBottomRight = 0;
		bitmaptext_16.text = "sexy-b**bs.jpeg";
		bitmaptext_16.fontSize = -16;
		scrollTest.add(bitmaptext_16);

		// page_go_icon_14
		const page_go_icon_14 = this.add.image(406, 810, "page-go-icon_1");
		scrollTest.add(page_go_icon_14);

		// attachmentButton_15
		const attachmentButton_15 = this.add.image(422, 847, "white-px");
		attachmentButton_15.scaleX = 322.35755178196104;
		attachmentButton_15.scaleY = 33.165943827273765;
		attachmentButton_15.setOrigin(0, 0);
		scrollTest.add(attachmentButton_15);

		// bitmaptext_17
		const bitmaptext_17 = this.add.bitmapText(432, 854, "nokia", "Secret Diary of Lillylou.txt");
		bitmaptext_17.tintTopLeft = 0;
		bitmaptext_17.tintTopRight = 0;
		bitmaptext_17.tintBottomLeft = 0;
		bitmaptext_17.tintBottomRight = 0;
		bitmaptext_17.text = "Secret Diary of Lillylou.txt";
		bitmaptext_17.fontSize = -16;
		scrollTest.add(bitmaptext_17);

		// page_go_icon_15
		const page_go_icon_15 = this.add.image(406, 864, "page-go-icon_1");
		scrollTest.add(page_go_icon_15);

		// attachmentButton_16
		const attachmentButton_16 = this.add.image(422, 899, "white-px");
		attachmentButton_16.scaleX = 322.35755178196104;
		attachmentButton_16.scaleY = 33.165943827273765;
		attachmentButton_16.setOrigin(0, 0);
		scrollTest.add(attachmentButton_16);

		// bitmaptext_18
		const bitmaptext_18 = this.add.bitmapText(432, 907, "nokia", "WizQuest.exe");
		bitmaptext_18.tintTopLeft = 0;
		bitmaptext_18.tintTopRight = 0;
		bitmaptext_18.tintBottomLeft = 0;
		bitmaptext_18.tintBottomRight = 0;
		bitmaptext_18.text = "WizQuest.exe";
		bitmaptext_18.fontSize = -16;
		scrollTest.add(bitmaptext_18);

		// page_go_icon_16
		const page_go_icon_16 = this.add.image(406, 917, "page-go-icon_1");
		scrollTest.add(page_go_icon_16);

		// attachmentButton_17
		const attachmentButton_17 = this.add.image(422, 953, "white-px");
		attachmentButton_17.scaleX = 322.35755178196104;
		attachmentButton_17.scaleY = 33.165943827273765;
		attachmentButton_17.setOrigin(0, 0);
		scrollTest.add(attachmentButton_17);

		// bitmaptext_19
		const bitmaptext_19 = this.add.bitmapText(432, 961, "nokia", "funnimonke.png");
		bitmaptext_19.tintTopLeft = 0;
		bitmaptext_19.tintTopRight = 0;
		bitmaptext_19.tintBottomLeft = 0;
		bitmaptext_19.tintBottomRight = 0;
		bitmaptext_19.text = "funnimonke.png";
		bitmaptext_19.fontSize = -16;
		scrollTest.add(bitmaptext_19);

		// page_go_icon_17
		const page_go_icon_17 = this.add.image(406, 971, "page-go-icon_1");
		scrollTest.add(page_go_icon_17);

		// attachmentButton_18
		const attachmentButton_18 = this.add.image(422, 1006, "white-px");
		attachmentButton_18.scaleX = 322.35755178196104;
		attachmentButton_18.scaleY = 33.165943827273765;
		attachmentButton_18.setOrigin(0, 0);
		scrollTest.add(attachmentButton_18);

		// bitmaptext_20
		const bitmaptext_20 = this.add.bitmapText(432, 1014, "nokia", "Office Memo 5-25-2003.txt");
		bitmaptext_20.tintTopLeft = 0;
		bitmaptext_20.tintTopRight = 0;
		bitmaptext_20.tintBottomLeft = 0;
		bitmaptext_20.tintBottomRight = 0;
		bitmaptext_20.text = "Office Memo 5-25-2003.txt";
		bitmaptext_20.fontSize = -16;
		scrollTest.add(bitmaptext_20);

		// page_go_icon_18
		const page_go_icon_18 = this.add.image(406, 1024, "page-go-icon_1");
		scrollTest.add(page_go_icon_18);

		// page_go_icon_19
		const page_go_icon_19 = this.add.image(406, 1074, "page-go-icon_1");
		scrollTest.add(page_go_icon_19);

		// attachmentButton_19
		const attachmentButton_19 = this.add.image(422, 1056, "white-px");
		attachmentButton_19.scaleX = 322.35755178196104;
		attachmentButton_19.scaleY = 33.165943827273765;
		attachmentButton_19.setOrigin(0, 0);
		scrollTest.add(attachmentButton_19);

		// bitmaptext_21
		const bitmaptext_21 = this.add.bitmapText(432, 1064, "nokia", "WSIB regulation 1101.pdf");
		bitmaptext_21.tintTopLeft = 0;
		bitmaptext_21.tintTopRight = 0;
		bitmaptext_21.tintBottomLeft = 0;
		bitmaptext_21.tintBottomRight = 0;
		bitmaptext_21.text = "WSIB regulation 1101.pdf";
		bitmaptext_21.fontSize = -16;
		scrollTest.add(bitmaptext_21);

		// page_go_icon_20
		const page_go_icon_20 = this.add.image(406, 1123, "page-go-icon_1");
		scrollTest.add(page_go_icon_20);

		// attachmentButton_20
		const attachmentButton_20 = this.add.image(422, 1105, "white-px");
		attachmentButton_20.scaleX = 322.35755178196104;
		attachmentButton_20.scaleY = 33.165943827273765;
		attachmentButton_20.setOrigin(0, 0);
		scrollTest.add(attachmentButton_20);

		// bitmaptext_22
		const bitmaptext_22 = this.add.bitmapText(432, 1113, "nokia", "Thunderstruck.mp3");
		bitmaptext_22.tintTopLeft = 0;
		bitmaptext_22.tintTopRight = 0;
		bitmaptext_22.tintBottomLeft = 0;
		bitmaptext_22.tintBottomRight = 0;
		bitmaptext_22.text = "Thunderstruck.mp3";
		bitmaptext_22.fontSize = -16;
		scrollTest.add(bitmaptext_22);

		// page_go_icon_21
		const page_go_icon_21 = this.add.image(406, 1173, "page-go-icon_1");
		scrollTest.add(page_go_icon_21);

		// attachmentButton_21
		const attachmentButton_21 = this.add.image(422, 1155, "white-px");
		attachmentButton_21.scaleX = 322.35755178196104;
		attachmentButton_21.scaleY = 33.165943827273765;
		attachmentButton_21.setOrigin(0, 0);
		scrollTest.add(attachmentButton_21);

		// bitmaptext_23
		const bitmaptext_23 = this.add.bitmapText(432, 1163, "nokia", "Agent_Cody_Banks_Wiki.com");
		bitmaptext_23.tintTopLeft = 0;
		bitmaptext_23.tintTopRight = 0;
		bitmaptext_23.tintBottomLeft = 0;
		bitmaptext_23.tintBottomRight = 0;
		bitmaptext_23.text = "Agent_Cody_Banks_Wiki.com";
		bitmaptext_23.fontSize = -16;
		scrollTest.add(bitmaptext_23);

		// page_go_icon_22
		const page_go_icon_22 = this.add.image(406, 1224, "page-go-icon_1");
		scrollTest.add(page_go_icon_22);

		// attachmentButton_22
		const attachmentButton_22 = this.add.image(422, 1206, "white-px");
		attachmentButton_22.scaleX = 322.35755178196104;
		attachmentButton_22.scaleY = 33.165943827273765;
		attachmentButton_22.setOrigin(0, 0);
		scrollTest.add(attachmentButton_22);

		// bitmaptext_24
		const bitmaptext_24 = this.add.bitmapText(432, 1214, "nokia", "GameProgrammingPattern.pdf");
		bitmaptext_24.tintTopLeft = 0;
		bitmaptext_24.tintTopRight = 0;
		bitmaptext_24.tintBottomLeft = 0;
		bitmaptext_24.tintBottomRight = 0;
		bitmaptext_24.text = "GameProgrammingPattern.pdf";
		bitmaptext_24.fontSize = -16;
		scrollTest.add(bitmaptext_24);

		// page_go_icon_23
		const page_go_icon_23 = this.add.image(406, 1275, "page-go-icon_1");
		scrollTest.add(page_go_icon_23);

		// attachmentButton_23
		const attachmentButton_23 = this.add.image(422, 1257, "white-px");
		attachmentButton_23.scaleX = 322.35755178196104;
		attachmentButton_23.scaleY = 33.165943827273765;
		attachmentButton_23.setOrigin(0, 0);
		scrollTest.add(attachmentButton_23);

		// bitmaptext_25
		const bitmaptext_25 = this.add.bitmapText(432, 1265, "nokia", "weirdalevenworse.mp3");
		bitmaptext_25.tintTopLeft = 0;
		bitmaptext_25.tintTopRight = 0;
		bitmaptext_25.tintBottomLeft = 0;
		bitmaptext_25.tintBottomRight = 0;
		bitmaptext_25.text = "weirdalevenworse.mp3";
		bitmaptext_25.fontSize = -16;
		scrollTest.add(bitmaptext_25);

		// page_go_icon_24
		const page_go_icon_24 = this.add.image(406, 1324, "page-go-icon_1");
		scrollTest.add(page_go_icon_24);

		// attachmentButton_24
		const attachmentButton_24 = this.add.image(422, 1306, "white-px");
		attachmentButton_24.scaleX = 322.35755178196104;
		attachmentButton_24.scaleY = 33.165943827273765;
		attachmentButton_24.setOrigin(0, 0);
		scrollTest.add(attachmentButton_24);

		// bitmaptext_26
		const bitmaptext_26 = this.add.bitmapText(432, 1314, "nokia", "WorldOfTanks.com");
		bitmaptext_26.tintTopLeft = 0;
		bitmaptext_26.tintTopRight = 0;
		bitmaptext_26.tintBottomLeft = 0;
		bitmaptext_26.tintBottomRight = 0;
		bitmaptext_26.text = "WorldOfTanks.com";
		bitmaptext_26.fontSize = -16;
		scrollTest.add(bitmaptext_26);

		// page_go_icon_25
		const page_go_icon_25 = this.add.image(406, 1375, "page-go-icon_1");
		scrollTest.add(page_go_icon_25);

		// attachmentButton_25
		const attachmentButton_25 = this.add.image(422, 1357, "white-px");
		attachmentButton_25.scaleX = 322.35755178196104;
		attachmentButton_25.scaleY = 33.165943827273765;
		attachmentButton_25.setOrigin(0, 0);
		scrollTest.add(attachmentButton_25);

		// bitmaptext_27
		const bitmaptext_27 = this.add.bitmapText(432, 1365, "nokia", "NyanCatTHEGAME.exe");
		bitmaptext_27.tintTopLeft = 0;
		bitmaptext_27.tintTopRight = 0;
		bitmaptext_27.tintBottomLeft = 0;
		bitmaptext_27.tintBottomRight = 0;
		bitmaptext_27.text = "NyanCatTHEGAME.exe";
		bitmaptext_27.fontSize = -16;
		scrollTest.add(bitmaptext_27);

		// page_go_icon_26
		const page_go_icon_26 = this.add.image(406, 1426, "page-go-icon_1");
		scrollTest.add(page_go_icon_26);

		// attachmentButton_26
		const attachmentButton_26 = this.add.image(422, 1408, "white-px");
		attachmentButton_26.scaleX = 322.35755178196104;
		attachmentButton_26.scaleY = 33.165943827273765;
		attachmentButton_26.setOrigin(0, 0);
		scrollTest.add(attachmentButton_26);

		// bitmaptext_28
		const bitmaptext_28 = this.add.bitmapText(432, 1416, "nokia", "HelterSkelter.pdf");
		bitmaptext_28.tintTopLeft = 0;
		bitmaptext_28.tintTopRight = 0;
		bitmaptext_28.tintBottomLeft = 0;
		bitmaptext_28.tintBottomRight = 0;
		bitmaptext_28.text = "HelterSkelter.pdf";
		bitmaptext_28.fontSize = -16;
		scrollTest.add(bitmaptext_28);

		// page_go_icon_27
		const page_go_icon_27 = this.add.image(406, 1473, "page-go-icon_1");
		scrollTest.add(page_go_icon_27);

		// attachmentButton_27
		const attachmentButton_27 = this.add.image(422, 1455, "white-px");
		attachmentButton_27.scaleX = 322.35755178196104;
		attachmentButton_27.scaleY = 33.165943827273765;
		attachmentButton_27.setOrigin(0, 0);
		scrollTest.add(attachmentButton_27);

		// bitmaptext_29
		const bitmaptext_29 = this.add.bitmapText(432, 1463, "nokia", "youtube.com/smosh");
		bitmaptext_29.tintTopLeft = 0;
		bitmaptext_29.tintTopRight = 0;
		bitmaptext_29.tintBottomLeft = 0;
		bitmaptext_29.tintBottomRight = 0;
		bitmaptext_29.text = "youtube.com/smosh";
		bitmaptext_29.fontSize = -16;
		scrollTest.add(bitmaptext_29);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(831, 70, 4, 128);
		rectangle_2.setOrigin(0, 0);
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 11250603;
		mainContainer.add(rectangle_2);

		// bitmaptext
		const bitmaptext = this.add.bitmapText(42, 93, "nokia", "Select a recipient:");
		bitmaptext.tintTopLeft = 0;
		bitmaptext.tintTopRight = 0;
		bitmaptext.tintBottomLeft = 0;
		bitmaptext.tintBottomRight = 0;
		bitmaptext.text = "Select a recipient:";
		bitmaptext.fontSize = -16;
		mainContainer.add(bitmaptext);

		// employeeButton
		const employeeButton = this.add.image(43, 132, "white-px");
		employeeButton.scaleX = 112.54928657502772;
		employeeButton.scaleY = 35.60368392358997;
		employeeButton.setOrigin(0, 0);
		employeeButton.tintTopLeft = 14671839;
		employeeButton.tintTopRight = 14671839;
		employeeButton.tintBottomLeft = 14671839;
		employeeButton.tintBottomRight = 14671839;
		mainContainer.add(employeeButton);

		// employeeName
		const employeeName = this.add.bitmapText(56, 140, "nokia", "Bertina-");
		employeeName.tintTopLeft = 0;
		employeeName.tintTopRight = 0;
		employeeName.tintBottomLeft = 0;
		employeeName.tintBottomRight = 0;
		employeeName.text = "Bertina-";
		employeeName.fontSize = -16;
		mainContainer.add(employeeName);

		// employeeButton_1
		const employeeButton_1 = this.add.image(43, 187, "white-px");
		employeeButton_1.scaleX = 112.54928657502772;
		employeeButton_1.scaleY = 35.60368392358997;
		employeeButton_1.setOrigin(0, 0);
		employeeButton_1.tintTopLeft = 14671839;
		employeeButton_1.tintTopRight = 14671839;
		employeeButton_1.tintBottomLeft = 14671839;
		employeeButton_1.tintBottomRight = 14671839;
		mainContainer.add(employeeButton_1);

		// employeeName_1
		const employeeName_1 = this.add.bitmapText(56, 195, "nokia", "Bertina-");
		employeeName_1.tintTopLeft = 0;
		employeeName_1.tintTopRight = 0;
		employeeName_1.tintBottomLeft = 0;
		employeeName_1.tintBottomRight = 0;
		employeeName_1.text = "Bertina-";
		employeeName_1.fontSize = -16;
		mainContainer.add(employeeName_1);

		// employeeButton_2
		const employeeButton_2 = this.add.image(43, 235, "white-px");
		employeeButton_2.scaleX = 112.54928657502772;
		employeeButton_2.scaleY = 35.60368392358997;
		employeeButton_2.setOrigin(0, 0);
		employeeButton_2.tintTopLeft = 14671839;
		employeeButton_2.tintTopRight = 14671839;
		employeeButton_2.tintBottomLeft = 14671839;
		employeeButton_2.tintBottomRight = 14671839;
		mainContainer.add(employeeButton_2);

		// employeeName_2
		const employeeName_2 = this.add.bitmapText(56, 243, "nokia", "Bertina-");
		employeeName_2.tintTopLeft = 0;
		employeeName_2.tintTopRight = 0;
		employeeName_2.tintBottomLeft = 0;
		employeeName_2.tintBottomRight = 0;
		employeeName_2.text = "Bertina-";
		employeeName_2.fontSize = -16;
		mainContainer.add(employeeName_2);

		// employeeButton_3
		const employeeButton_3 = this.add.image(43, 280, "white-px");
		employeeButton_3.scaleX = 112.54928657502772;
		employeeButton_3.scaleY = 35.60368392358997;
		employeeButton_3.setOrigin(0, 0);
		employeeButton_3.tintTopLeft = 14671839;
		employeeButton_3.tintTopRight = 14671839;
		employeeButton_3.tintBottomLeft = 14671839;
		employeeButton_3.tintBottomRight = 14671839;
		mainContainer.add(employeeButton_3);

		// employeeName_3
		const employeeName_3 = this.add.bitmapText(56, 288, "nokia", "Bertina-");
		employeeName_3.tintTopLeft = 0;
		employeeName_3.tintTopRight = 0;
		employeeName_3.tintBottomLeft = 0;
		employeeName_3.tintBottomRight = 0;
		employeeName_3.text = "Bertina-";
		employeeName_3.fontSize = -16;
		mainContainer.add(employeeName_3);

		// bitmaptext_2
		const bitmaptext_2 = this.add.bitmapText(42, 365, "nokia", "Select an attachment --->");
		bitmaptext_2.tintTopLeft = 0;
		bitmaptext_2.tintTopRight = 0;
		bitmaptext_2.tintBottomLeft = 0;
		bitmaptext_2.tintBottomRight = 0;
		bitmaptext_2.text = "Select an attachment --->";
		bitmaptext_2.fontSize = -16;
		mainContainer.add(bitmaptext_2);

		// attachmentDisplayRect
		const attachmentDisplayRect = this.add.image(43, 418, "white-px");
		attachmentDisplayRect.scaleX = 304.120839270683;
		attachmentDisplayRect.scaleY = 35.60368392358997;
		attachmentDisplayRect.setOrigin(0, 0);
		attachmentDisplayRect.tintTopLeft = 14671839;
		attachmentDisplayRect.tintTopRight = 14671839;
		attachmentDisplayRect.tintBottomLeft = 14671839;
		attachmentDisplayRect.tintBottomRight = 14671839;
		mainContainer.add(attachmentDisplayRect);

		// attachmentDisplayText
		const attachmentDisplayText = this.add.bitmapText(56, 426, "nokia", "- none -");
		attachmentDisplayText.tintTopLeft = 0;
		attachmentDisplayText.tintTopRight = 0;
		attachmentDisplayText.tintBottomLeft = 0;
		attachmentDisplayText.tintBottomRight = 0;
		attachmentDisplayText.text = "- none -";
		attachmentDisplayText.fontSize = -16;
		mainContainer.add(attachmentDisplayText);

		// sendButton
		const sendButton = this.add.image(43, 540, "white-px");
		sendButton.scaleX = 304.120839270683;
		sendButton.scaleY = 62.987626910673015;
		sendButton.setOrigin(0, 0);
		sendButton.tintTopLeft = 11727798;
		sendButton.tintTopRight = 11727798;
		sendButton.tintBottomLeft = 11727798;
		sendButton.tintBottomRight = 11727798;
		mainContainer.add(sendButton);

		// attachmentDisplayText_1
		const attachmentDisplayText_1 = this.add.bitmapText(154, 554, "nokia", "Send");
		attachmentDisplayText_1.tintTopLeft = 0;
		attachmentDisplayText_1.tintTopRight = 0;
		attachmentDisplayText_1.tintBottomLeft = 0;
		attachmentDisplayText_1.tintBottomRight = 0;
		attachmentDisplayText_1.text = "Send";
		attachmentDisplayText_1.fontSize = -24;
		mainContainer.add(attachmentDisplayText_1);

		// lists
		const attachmentButtonList = [attachmentButton, attachmentButton_1, attachmentButton_2, attachmentButton_3, attachmentButton_4, attachmentButton_5, attachmentButton_6, attachmentButton_7, attachmentButton_8, attachmentButton_9, attachmentButton_10, attachmentButton_11, attachmentButton_12, attachmentButton_13, attachmentButton_14, attachmentButton_15, attachmentButton_16, attachmentButton_17, attachmentButton_18, attachmentButton_19, attachmentButton_20, attachmentButton_21, attachmentButton_22, attachmentButton_23, attachmentButton_24, attachmentButton_25, attachmentButton_26, attachmentButton_27];
		const attachmentTextList = [bitmaptext_1, bitmaptext_3, bitmaptext_4, bitmaptext_5, bitmaptext_6, bitmaptext_7, bitmaptext_8, bitmaptext_9, bitmaptext_10, bitmaptext_11, bitmaptext_12, bitmaptext_13, bitmaptext_14, bitmaptext_15, bitmaptext_16, bitmaptext_17, bitmaptext_18, bitmaptext_19, bitmaptext_20, bitmaptext_21, bitmaptext_22, bitmaptext_23, bitmaptext_24, bitmaptext_25, bitmaptext_26, bitmaptext_27, bitmaptext_28, bitmaptext_29];
		const employeeButtonList = [employeeButton, employeeButton_1, employeeButton_2, employeeButton_3];
		const employeeTextList = [employeeName, employeeName_1, employeeName_2, employeeName_3];

		// scrollTest (components)
		const scrollTestScrollField = new ScrollField(scrollTest);
		scrollTestScrollField.BGRect = rectangle_1;
		scrollTestScrollField.scrollbarRect = rectangle_2;

		// attachmentButton (components)
		new PointerButton(attachmentButton);

		// attachmentButton_1 (components)
		new PointerButton(attachmentButton_1);

		// attachmentButton_2 (components)
		new PointerButton(attachmentButton_2);

		// attachmentButton_3 (components)
		new PointerButton(attachmentButton_3);

		// attachmentButton_4 (components)
		new PointerButton(attachmentButton_4);

		// attachmentButton_5 (components)
		new PointerButton(attachmentButton_5);

		// attachmentButton_6 (components)
		new PointerButton(attachmentButton_6);

		// attachmentButton_7 (components)
		new PointerButton(attachmentButton_7);

		// attachmentButton_8 (components)
		new PointerButton(attachmentButton_8);

		// attachmentButton_9 (components)
		new PointerButton(attachmentButton_9);

		// attachmentButton_10 (components)
		new PointerButton(attachmentButton_10);

		// attachmentButton_11 (components)
		new PointerButton(attachmentButton_11);

		// attachmentButton_12 (components)
		new PointerButton(attachmentButton_12);

		// attachmentButton_13 (components)
		new PointerButton(attachmentButton_13);

		// attachmentButton_14 (components)
		new PointerButton(attachmentButton_14);

		// attachmentButton_15 (components)
		new PointerButton(attachmentButton_15);

		// attachmentButton_16 (components)
		new PointerButton(attachmentButton_16);

		// attachmentButton_17 (components)
		new PointerButton(attachmentButton_17);

		// attachmentButton_18 (components)
		new PointerButton(attachmentButton_18);

		// attachmentButton_19 (components)
		new PointerButton(attachmentButton_19);

		// attachmentButton_20 (components)
		new PointerButton(attachmentButton_20);

		// attachmentButton_21 (components)
		new PointerButton(attachmentButton_21);

		// attachmentButton_22 (components)
		new PointerButton(attachmentButton_22);

		// attachmentButton_23 (components)
		new PointerButton(attachmentButton_23);

		// attachmentButton_24 (components)
		new PointerButton(attachmentButton_24);

		// attachmentButton_25 (components)
		new PointerButton(attachmentButton_25);

		// attachmentButton_26 (components)
		new PointerButton(attachmentButton_26);

		// attachmentButton_27 (components)
		new PointerButton(attachmentButton_27);

		// employeeButton (components)
		new PointerButton(employeeButton);

		// employeeButton_1 (components)
		new PointerButton(employeeButton_1);

		// employeeButton_2 (components)
		new PointerButton(employeeButton_2);

		// employeeButton_3 (components)
		new PointerButton(employeeButton_3);

		// sendButton (components)
		new PointerButton(sendButton);

		this.attachmentButton = attachmentButton;
		this.attachmentButton_1 = attachmentButton_1;
		this.attachmentButton_2 = attachmentButton_2;
		this.attachmentButton_3 = attachmentButton_3;
		this.attachmentButton_4 = attachmentButton_4;
		this.attachmentButton_5 = attachmentButton_5;
		this.attachmentButton_6 = attachmentButton_6;
		this.attachmentButton_7 = attachmentButton_7;
		this.attachmentButton_8 = attachmentButton_8;
		this.attachmentButton_9 = attachmentButton_9;
		this.attachmentButton_10 = attachmentButton_10;
		this.attachmentButton_11 = attachmentButton_11;
		this.attachmentButton_12 = attachmentButton_12;
		this.attachmentButton_13 = attachmentButton_13;
		this.attachmentButton_14 = attachmentButton_14;
		this.attachmentButton_15 = attachmentButton_15;
		this.attachmentButton_16 = attachmentButton_16;
		this.attachmentButton_17 = attachmentButton_17;
		this.attachmentButton_18 = attachmentButton_18;
		this.attachmentButton_19 = attachmentButton_19;
		this.attachmentButton_20 = attachmentButton_20;
		this.attachmentButton_21 = attachmentButton_21;
		this.attachmentButton_22 = attachmentButton_22;
		this.attachmentButton_23 = attachmentButton_23;
		this.attachmentButton_24 = attachmentButton_24;
		this.attachmentButton_25 = attachmentButton_25;
		this.attachmentButton_26 = attachmentButton_26;
		this.attachmentButton_27 = attachmentButton_27;
		this.scrollTest = scrollTest;
		this.employeeButton = employeeButton;
		this.employeeButton_1 = employeeButton_1;
		this.employeeButton_2 = employeeButton_2;
		this.employeeButton_3 = employeeButton_3;
		this.attachmentDisplayRect = attachmentDisplayRect;
		this.attachmentDisplayText = attachmentDisplayText;
		this.sendButton = sendButton;
		this.attachmentDisplayText_1 = attachmentDisplayText_1;
		this.mainContainer = mainContainer;
		this.attachmentButtonList = attachmentButtonList;
		this.attachmentTextList = attachmentTextList;
		this.employeeButtonList = employeeButtonList;
		this.employeeTextList = employeeTextList;

		this.events.emit("scene-awake");
	}

	private attachmentButton!: Phaser.GameObjects.Image;
	private attachmentButton_1!: Phaser.GameObjects.Image;
	private attachmentButton_2!: Phaser.GameObjects.Image;
	private attachmentButton_3!: Phaser.GameObjects.Image;
	private attachmentButton_4!: Phaser.GameObjects.Image;
	private attachmentButton_5!: Phaser.GameObjects.Image;
	private attachmentButton_6!: Phaser.GameObjects.Image;
	private attachmentButton_7!: Phaser.GameObjects.Image;
	private attachmentButton_8!: Phaser.GameObjects.Image;
	private attachmentButton_9!: Phaser.GameObjects.Image;
	private attachmentButton_10!: Phaser.GameObjects.Image;
	private attachmentButton_11!: Phaser.GameObjects.Image;
	private attachmentButton_12!: Phaser.GameObjects.Image;
	private attachmentButton_13!: Phaser.GameObjects.Image;
	private attachmentButton_14!: Phaser.GameObjects.Image;
	private attachmentButton_15!: Phaser.GameObjects.Image;
	private attachmentButton_16!: Phaser.GameObjects.Image;
	private attachmentButton_17!: Phaser.GameObjects.Image;
	private attachmentButton_18!: Phaser.GameObjects.Image;
	private attachmentButton_19!: Phaser.GameObjects.Image;
	private attachmentButton_20!: Phaser.GameObjects.Image;
	private attachmentButton_21!: Phaser.GameObjects.Image;
	private attachmentButton_22!: Phaser.GameObjects.Image;
	private attachmentButton_23!: Phaser.GameObjects.Image;
	private attachmentButton_24!: Phaser.GameObjects.Image;
	private attachmentButton_25!: Phaser.GameObjects.Image;
	private attachmentButton_26!: Phaser.GameObjects.Image;
	private attachmentButton_27!: Phaser.GameObjects.Image;
	private scrollTest!: Phaser.GameObjects.Container;
	private employeeButton!: Phaser.GameObjects.Image;
	private employeeButton_1!: Phaser.GameObjects.Image;
	private employeeButton_2!: Phaser.GameObjects.Image;
	private employeeButton_3!: Phaser.GameObjects.Image;
	private attachmentDisplayRect!: Phaser.GameObjects.Image;
	private attachmentDisplayText!: Phaser.GameObjects.BitmapText;
	private sendButton!: Phaser.GameObjects.Image;
	private attachmentDisplayText_1!: Phaser.GameObjects.BitmapText;
	private mainContainer!: Phaser.GameObjects.Container;
	private attachmentButtonList!: Phaser.GameObjects.Image[];
	private attachmentTextList!: Phaser.GameObjects.BitmapText[];
	private employeeButtonList!: Phaser.GameObjects.Image[];
	private employeeTextList!: Phaser.GameObjects.BitmapText[];

	/* START-USER-CODE */

  private readonly employeeButtonOrder: Array<employeeKey> = [
    "employee-K",
    "employee-B",
    "employee-J",
    "employee-F",
  ];

  private selectedAttachment: string;
  private selectedEmployee: employeeKey;

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setup() {
    // create
    super.editorCreate();
    super.create(800, 600, "Email Looker 2001", "Email");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setup();

    this.selectedAttachment = "";

    this.setupAttachmentButtons();
    this.setupEmployeeButtons();
    this.sendButton.on("click", () => {
      this.send(this.selectedEmployee, this.selectedAttachment);
    });
  }

  setupAttachmentButtons() {
    this.attachmentButtonList.forEach((value, index) => {
      value.on("click", () => {
        this.selectedAttachment = this.attachmentTextList[index].text;
        this.attachmentDisplayText.setText(this.selectedAttachment);
      });
    });
  }

  setupEmployeeButtons() {
    this.employeeButtonList.forEach((value, index) => {
      let employee = this.employeeButtonOrder[index];

      this.employeeTextList[index].setText(
        `${employeeDataMap.get(employee)?.name}`
      );

      value.on("click", () => {
        this.employeeButtonList.forEach((_button, _index) => {
          _button.setTint(index === _index ? 0xabd1e7 : 0xdfdfdf);
        });
        this.selectedEmployee = employee;
      });
    });
  }

  private send(recipient: employeeKey, attatchmentName: string) {
    EmployeeDirectory.getEmployee(recipient).sendEmail(attatchmentName);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
