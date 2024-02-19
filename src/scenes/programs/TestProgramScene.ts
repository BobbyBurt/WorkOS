

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */


export function preload(): void {

	this.load.pack("lazy-load-asset-pack", "assets/lazy-load-asset-pack.json");
}


export function editorCreate(): void {

	// rectangle_1
	const rectangle_1 = this.add.rectangle(0, 0, 2000, 1000);
	rectangle_1.setOrigin(0, 0);
	rectangle_1.isFilled = true;

	// desktop_gen
	const desktop_gen = this.add.image(511, 298, "desktop-gen");
	desktop_gen.scaleX = 0.23635837612124844;
	desktop_gen.scaleY = 0.23635837612124844;

	// tank
	const tank = this.add.image(224, 370, "Tank");

	// tank_1
	this.add.image(532, 378, "Tank");

	// tank_2
	this.add.image(839, 398, "Tank");

	// lists
	const lazyLoading = [desktop_gen, tank];

	this.desktop_gen = desktop_gen;
	this.lazyLoading = lazyLoading;

	this.events.emit("scene-awake");
}

/* END OF COMPILED CODE */

// You can write more code here
