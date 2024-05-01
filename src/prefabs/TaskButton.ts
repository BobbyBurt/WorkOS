import { ProgramBaseScene } from "~/scenes/programs/ProgramScene";
import TaskButtonPrefab from "./TaskButtonPrefab";
import WindowPrefab from "./WindowPrefab";
import eventKeys from "~/data/eventKeys";

/**
 * Behavioural layer of Task Button. Extends TaskButtonPrefab which is the visual, Phaser Editor generated layer.
 */
export default class TaskButton extends TaskButtonPrefab {
    constructor(scene: Phaser.Scene, programScene: ProgramBaseScene, x?: number, y?: number) {
        super(scene, x ?? 0, y ?? 0);

        this.nameText.setText(programScene.name);
        this.backSlice.setSize(this.nameText.displayWidth + 80, this.backSlice.height);
        // TODO: icon

        this.programScene = programScene;

        this.backSlice.setInteractive();
        this.backSlice.on('pointerup', () => {
            this.onClick();
        });
        this.backSlice.on('pointerover', () => {
            this.setAlpha(.8);
        });
        this.backSlice.on('pointerout', () => {
            this.setAlpha(1);
        });
    }

    private programScene!: ProgramBaseScene;

    /** Callback */
    private onClick() {
        this.programScene.setMinimize();
    }

    public appear() {
        this.setVisible(true);
    }

    public disappear() {
        this.setVisible(false);
    }
}
