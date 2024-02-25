import cloudSaves from './API/SavesData';
import medalScene from './API/medalScene';
import { newgroundsIOWrapper } from './API/newgroundsIOWrapper';
import DebugScene from './scenes/DebugScene';
import DesktopScene from './scenes/DesktopScene';
import OverlapScene from './scenes/OverlapScene';
import Preload from './scenes/Preload';
import ProgramScene from './scenes/programs/ProgramScene';
import TemplateProgramScene from './scenes/programs/TemplateProgramScene';


window.addEventListener('load', function ()
{
	var game = new Phaser.Game( 
	{
		title: 'Template',
		// url: 'https://www.newgrounds.com/projects/games/1923225/preview',
		version: '0',
		
	// visuals
		type: Phaser.AUTO,
		backgroundColor: "#333333",
		input: {
			gamepad: true
		},
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH,
			width: 1920,
			height: 1080
		}
	});
	
	game.scene.add("Preload", Preload);
	game.scene.add("Boot", Boot, true);
	game.scene.add('medal-scene', medalScene);
	game.scene.add('desktop-scene', DesktopScene);
	game.scene.add('overlap-scene', OverlapScene);
	game.scene.add('debug-scene', DebugScene);

	// programs
	game.scene.add('template-program-scene', TemplateProgramScene);
});

class Boot extends Phaser.Scene
{
	private ngWrap: newgroundsIOWrapper;

	/**
	 * load preload assets, then the scene
	 */
	preload()
	{
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));

		if (__DEV__)
		{
			console.clear();
		}
	}

	create()
	{
		// NG.io event callbacks
		this.game.events.once(Phaser.Core.Events.STEP, () => 
		{
			this.ngWrap = new newgroundsIOWrapper();
			this.ngWrap.start();
		});
		this.game.events.on(Phaser.Core.Events.STEP, () => 
		{
			NGIO.keepSessionAlive();
			if (NGIO.isInitialized)
			{
				this.ngWrap.update(this.game);
			}
		});
		
		this.setSaveDataKeys();
	}

	/**
	 * Sets registry data keys that will be included in the save file.
	 */
	setSaveDataKeys()
	{
		let dataKeys = new Array<string>();
	
		dataKeys.push('keys-for-data-that-should-be-saved');

		cloudSaves.setDataKeys(dataKeys);
	}
}