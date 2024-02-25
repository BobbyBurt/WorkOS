import TaskButtonPrefab from "./TaskButtonPrefab";
import WindowPrefab from "./WindowPrefab";

export default class TaskButton extends TaskButtonPrefab
{
    constructor(scene: Phaser.Scene, window: WindowPrefab, x?: number, y?: number)
    {
		super(scene, x ?? 0, y ?? 0);

        // set ref
        this.window = window;

        // callbacks
        // this.backing.on('click', this.onClick, this);
        // this.window.on('destroy', this.onClose, this);

        // set name text
        // this.nameText.setText(window.displayName);
        // TODO: Get window name
    }

    private window: WindowPrefab;

    private onClick()
    {
        this.window.setMinimize();
    }

    private onClose()
    {
        this.destroy();
    }
}
