
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PrototypeScene extends Phaser.Scene {

	constructor() {
		super("prototype");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	preload(): void {

		this.load.pack("prototype-asset-pack", "assets/prototype/prototype-asset-pack.json");
	}

	editorCreate(): void {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(0, 0, 1920, 1080);
		rectangle_1.setOrigin(0, 0);
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 3491697;
		rectangle_1.fillAlpha = 0.75;

		// dopamineButton
		const dopamineButton = this.add.image(1412, 196, "taskbar-window-button");
		dopamineButton.scaleX = 3.106751341815151;
		dopamineButton.scaleY = 4.077769383057117;

		// text_1
		const text_1 = this.add.text(1181, 161, "", {});
		text_1.text = "Dopamine hit";
		text_1.setStyle({ "fontSize": "64px", "fontStyle": "bold" });

		// dismissBossButton
		const dismissBossButton = this.add.image(1406, 569, "taskbar-window-button");
		dismissBossButton.scaleX = 3.106751341815151;
		dismissBossButton.scaleY = 4.077769383057117;

		// text
		const text = this.add.text(1175, 534, "", {});
		text.text = "Dismiss boss";
		text.setStyle({ "fontSize": "64px", "fontStyle": "bold" });

		// dayTimeText
		const dayTimeText = this.add.text(899, 857, "", {});
		dayTimeText.text = "Time left in day: 9999";
		dayTimeText.setStyle({ "fontSize": "64px", "fontStyle": "bold" });

		// resetDayButton
		const resetDayButton = this.add.image(423, 872, "taskbar-window-button");
		resetDayButton.scaleX = 3.106751341815151;
		resetDayButton.scaleY = 4.077769383057117;

		// text_3
		const text_3 = this.add.text(192, 837, "", {});
		text_3.text = "Reset day";
		text_3.setStyle({ "fontSize": "64px", "fontStyle": "bold" });

		// boredomText
		const boredomText = this.add.text(119, 524, "", {});
		boredomText.text = "Boredom: 99";
		boredomText.setStyle({ "fontSize": "64px", "fontStyle": "bold" });

		// dopamineText
		const dopamineText = this.add.text(127, 160, "", {});
		dopamineText.text = "Total dopamine: 99";
		dopamineText.setStyle({ "fontSize": "64px", "fontStyle": "bold" });

		// dopamineButton (components)
		new PointerButton(dopamineButton);

		// dismissBossButton (components)
		new PointerButton(dismissBossButton);

		// resetDayButton (components)
		new PointerButton(resetDayButton);

		this.dopamineButton = dopamineButton;
		this.dismissBossButton = dismissBossButton;
		this.dayTimeText = dayTimeText;
		this.resetDayButton = resetDayButton;
		this.boredomText = boredomText;
		this.dopamineText = dopamineText;

		this.events.emit("scene-awake");
	}

	private dopamineButton!: Phaser.GameObjects.Image;
	private dismissBossButton!: Phaser.GameObjects.Image;
	private dayTimeText!: Phaser.GameObjects.Text;
	private resetDayButton!: Phaser.GameObjects.Image;
	private boredomText!: Phaser.GameObjects.Text;
	private dopamineText!: Phaser.GameObjects.Text;

	/* START-USER-CODE */

	/** For the day */
	private totalDopamine = 0;

	private dayTimer: Phaser.Time.TimerEvent;

	private bossTimer: Phaser.Time.TimerEvent;

	private boredomTimer: Phaser.Time.TimerEvent;
	private boredomCounter = 0;
	private readonly BOREDOM_MAX = 35;

	create() {

		this.editorCreate();

		this.scene.get('desktop-scene').scene.pause();

		this.dopamineButton.on('click', this.dopamineHit, this);
		this.dismissBossButton.on('pointerdown', this.dismissBoss, this);
		this.resetDayButton.on('pointerdown', this.setDay, this);

		this.setDay();
	}

	update() {
		this.dayTimeText.setText(`Day time: ${this.dayTimer.getProgress()}`)
	}

	/** Button callback */
	dopamineHit() {
		this.totalDopamine++;
		this.dopamineText.setText(`Total dopamine: ${this.totalDopamine}`);

		this.boredomCounter -= 5;
		this.boredomText.setText(`Boredom: ${this.boredomCounter}`);

		this.sound.play('dopamine');
	}

	setBossTimer() {
		this.bossTimer = this.time.addEvent({ delay: Phaser.Math.RND.between(15000, 40000), callback: this.bossAppear, callbackScope: this });
	}

	bossAppear() {
		this.sound.play('boss-appear-long');
	}

	/** Button callback */
	dismissBoss() {
		this.sound.play('boss-disappear');
		this.setBossTimer();
	}

	setBoredomTimer() {
		this.boredomTimer = this.time.addEvent({ delay: 2000, loop: true, callback: this.boredomTick, callbackScope: this });
	}

	/** timer callback */
	boredomTick() {
		this.boredomCounter++;
		this.boredomText.setText(`Boredom: ${this.boredomCounter}`);

		if (this.boredomCounter > 0) {
			this.sound.play('boredom-beep', { volume: this.boredomCounter / this.BOREDOM_MAX });
		}

		if (this.boredomCounter >= this.BOREDOM_MAX) {
			this.sound.play('boredom-death', { loop: true });

			this.bossTimer.remove();
			this.boredomTimer.remove();
			this.dayTimer.remove();
		}
	}

	/** Button callback, create() */
	setDay() {
		this.totalDopamine = 0;
		this.dopamineText.setText(`Total dopamine: ${this.totalDopamine}`);

		this.boredomCounter = 0;
		this.boredomText.setText(`Boredom: ${this.boredomCounter}`);

		this.sound.stopAll();

		this.sound.play('office-ambience', { loop: true, volume: 0.2 });

		this.dayTimer = this.time.addEvent({ delay: 180000, callback: this.endDay, callbackScope: this });
		this.setBossTimer();
		this.setBoredomTimer();
	}

	/** Timer callback */
	endDay() {
		this.sound.play('day-end');
		this.sound.stopByKey('office-ambience');

		this.bossTimer.remove();
		this.boredomTimer.remove();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
