
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
import TaskButton from '~/prefabs/TaskButton';
import DesktopScene from "~/scenes/DesktopScene";
/* END-USER-IMPORTS */

export default class TaskbarPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// bar
		const bar = scene.add.rectangle(0, 0, 1420, 70);
		bar.setOrigin(0, 0);
		bar.isFilled = true;
		this.add(bar);

		// startButton
		const startButton = scene.add.rectangle(0, 0, 200, 70);
		startButton.setOrigin(0, 0);
		startButton.isFilled = true;
		startButton.fillColor = 13224393;
		this.add(startButton);

		// timeText
		const timeText = scene.add.text(1287, 22, "", {});
		timeText.text = "9:05 am";
		timeText.setStyle({ "color": "#000000ff", "fontSize": "24px", "fontStyle": "bold" });
		this.add(timeText);

		// startButtonText
		const startButtonText = scene.add.text(62, 22, "", {});
		startButtonText.text = "START";
		startButtonText.setStyle({ "color": "#000000ff", "fontSize": "24px", "fontStyle": "bold" });
		this.add(startButtonText);

		// startButton (components)
		new PointerButton(startButton);

		this.startButton = startButton;

		/* START-USER-CTR-CODE */

		this.scene.events.once('scene-awake', this.start, this);

		/* END-USER-CTR-CODE */
	}

	private startButton: Phaser.GameObjects.Rectangle;

	/* START-USER-CODE */

	private taskButtonTest: TaskButton;

	/**
	 * Setup
	 * 
	 * By this point the scene is created.
	 */
	start()
	{
		let desktopScene = this.scene as DesktopScene;
		const taskButtonContainer = new TaskButton(this.scene, desktopScene.window, 217, 10);
		this.add(taskButtonContainer);
		// taskButtonContainer.start();
		// taskButtonContainer.backing.on('click', () =>
		// {
		// 	console.debug('I can hear it...');
		// })

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
