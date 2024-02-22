
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

		// taskbar
		const taskbar = scene.add.image(0, 0, "taskbar");
		taskbar.setOrigin(0, 0);
		this.add(taskbar);

		// start_button
		const start_button = scene.add.image(66, -9, "start-button");
		start_button.setOrigin(0, 0);
		this.add(start_button);

		// taskbar_window_button
		const taskbar_window_button = scene.add.image(301, 15, "taskbar-window-button");
		taskbar_window_button.setOrigin(0, 0);
		this.add(taskbar_window_button);

		// text_1
		const text_1 = scene.add.text(325, 29, "", {});
		text_1.text = "Program name";
		text_1.setStyle({ "fontFamily": "Verdana", "fontSize": "20px" });
		this.add(text_1);

		// text
		const text = scene.add.text(1094, 29, "", {});
		text.text = "9:04 am";
		text.setStyle({ "fontFamily": "Verdana", "fontSize": "24px" });
		this.add(text);

		// start_button (components)
		new PointerButton(start_button);

		// taskbar_window_button (components)
		new PointerButton(taskbar_window_button);

		/* START-USER-CTR-CODE */

		this.scene.events.once('scene-awake', this.start, this);

		/* END-USER-CTR-CODE */
	}

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
