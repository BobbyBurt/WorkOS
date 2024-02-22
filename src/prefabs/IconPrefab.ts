
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import DesktopScene from "~/scenes/DesktopScene";
/* END-USER-IMPORTS */

export default class IconPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		// iconImage
		const iconImage = scene.add.image(0, 0, "ToidSketch");
		iconImage.scaleX = 0.2919594302647729;
		iconImage.scaleY = 0.2919594302647729;
		iconImage.setOrigin(0, 0);
		this.add(iconImage);

		// nameText
		const nameText = scene.add.text(45, 129, "", {});
		nameText.setOrigin(0.5, 0.5);
		nameText.text = "Untitled Icon";
		nameText.setStyle({ "align": "center", "backgroundColor": "", "fontSize": "24px", "fontStyle": "bold", "stroke": "#000000ff", "strokeThickness":5,"shadow.offsetY":1});
		nameText.setWordWrapWidth(100);
		this.add(nameText);

		// selectRect
		const selectRect = scene.add.rectangle(-25, 0, 140, 170);
		selectRect.setOrigin(0, 0);
		selectRect.alpha = 0.001;
		selectRect.isFilled = true;
		selectRect.fillColor = 1544191;
		selectRect.fillAlpha = 0.2;
		selectRect.isStroked = true;
		selectRect.strokeColor = 1544191;
		selectRect.strokeAlpha = 0.5;
		selectRect.lineWidth = 2;
		this.add(selectRect);

		this.iconImage = iconImage;
		this.nameText = nameText;
		this.selectRect = selectRect;

		/* START-USER-CTR-CODE */

		this.scene.events.once('scene-awake', this.start, this);

		/* END-USER-CTR-CODE */
	}

	private iconImage: Phaser.GameObjects.Image;
	private nameText: Phaser.GameObjects.Text;
	private selectRect: Phaser.GameObjects.Rectangle;
	public programName: string = "";
	public iconTextureKey: string = "ToidSketch";
	public sceneKey: string = "";

	/* START-USER-CODE */

	private start()
	{
		// apply properties
		this.iconImage.setTexture(this.iconTextureKey);
		this.nameText.setText(this.programName);

		// setup input
		this.selectRect.setInteractive();
		this.selectRect.on('pointerover', this.pointerOver, this);
		this.selectRect.on('pointerout', this.pointerOut, this);
		this.selectRect.on('pointerdown', this.pointerDown, this);
		this.selectRect.on('pointerup', this.pointerUp, this);
	}

	private pointerOver()
	{
		this.selectRect.setAlpha(.5);
	}

	private pointerOut()
	{
		this.selectRect.setAlpha(.001);
	}

	private pointerDown()
	{
		this.selectRect.setAlpha(1);
	}

	private pointerUp()
	{
		// fullscreen
		if (this.programName === 'Fullscreen')
		{
			this.scene.scale.startFullscreen();

			return;
		}
		// TODO: put this somewhere else

		let desktopScene = this.scene as DesktopScene;
		desktopScene.addWindow(this.sceneKey);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
