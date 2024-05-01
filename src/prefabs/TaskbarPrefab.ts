
/* TaskbarPrefab: Also creates taskbuttons */

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PointerButton from "../components/PointerButton";
/* START-USER-IMPORTS */
import TaskButton from '~/prefabs/TaskButton';
import DesktopScene from "~/scenes/DesktopScene";
import dataManagerKeys from "~/data/dataManagerKeys";
import ProgramScene, { ProgramBaseScene } from "~/scenes/programs/ProgramScene";
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
		const taskbar_window_button = scene.add.image(340, 155, "taskbar-window-button");
		taskbar_window_button.setOrigin(0, 0);
		this.add(taskbar_window_button);

		// start_button (components)
		new PointerButton(start_button);

		// taskbar_window_button (components)
		new PointerButton(taskbar_window_button);

		/* START-USER-CTR-CODE */

		this.scene.events.once('scene-awake', this.start, this);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/** program scene - it's task button
	 * 
	 * Only to be set in TaskbarPrefab start()
	 */
	public taskButtonMap: Map<string, TaskButton>;

	/**
	 * Setup
	 * 
	 * By this point the scene is created.
	 */
	public start() {
		this.taskButtonMap = new Map();

		// let templateProgram = this.scene.scene.get('template-program');
		// templateProgram.events.on('scene-create', () => {
		// });

		this.scene.scene.manager.getScenes(false).forEach((value, index) => {
			if (value.scene.key.endsWith('-program')) {
				// all program scene keys must end with this or they won't be indentified

				let newTaskButton = this.createButton(value as ProgramBaseScene);
				this.taskButtonMap.set(value.scene.key, newTaskButton);

				value.events.on('scene-create', () => {

				});
			}
		});

		// this.scene.scene.manager.keys
	}

	/**
	 * Creates, adds to scene and returns TaskButton for programScene
	 * @param programScene 
	 * @returns created TaskButton
	 */
	createButton(programScene: ProgramBaseScene): TaskButton {
		let taskButton = new TaskButton(this.scene, programScene, Phaser.Math.RND.between(300, 850), 15);
		this.add(taskButton);
		taskButton.setVisible(false);
		return taskButton
	}

	setButton() {

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
