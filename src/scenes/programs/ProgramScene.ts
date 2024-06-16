/** @format */

// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import DummyInteractive from "../../components/DummyInteractive";
/* START-USER-IMPORTS */
import WindowPrefab from "~/prefabs/WindowPrefab";
import DebugScene from "../DebugScene";
import DesktopScene from "../DesktopScene";
import dataManagerKeys from "~/data/dataManagerKeys";
import eventKeys from "~/data/eventKeys";
import TaskButton from "~/prefabs/TaskButton";
import OverlapScene from "../OverlapScene";
import fullscreenHandler from "~/FullscreenHandler";
/* END-USER-IMPORTS */

export default class ProgramScene extends Phaser.Scene {
  constructor() {
    super("program");

    /* START-USER-CTR-CODE */
  }
}

/**
 * This is the scene that programs extend. ProgramScene is a Phaser Editor strawman, don't mistake it!
 */
export class ProgramBaseScene extends Phaser.Scene {
  constructor(key: string) {
    super(key);

    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // dummyInteractive
    const dummyInteractive = this.add.rectangle(0, 60, 700, 500);
    dummyInteractive.setOrigin(0, 0);
    dummyInteractive.isFilled = true;

    // programMaskRect
    const programMaskRect = this.add.rectangle(0, 60, 700, 500);
    programMaskRect.setOrigin(0, 0);
    programMaskRect.isFilled = true;

    // refocusInputRect
    const refocusInputRect = this.add.rectangle(0, 60, 700, 500);
    refocusInputRect.setOrigin(0, 0);
    refocusInputRect.isFilled = true;

    // dummyInteractive (components)
    new DummyInteractive(dummyInteractive);

    this.dummyInteractive = dummyInteractive;
    this.programMaskRect = programMaskRect;
    this.refocusInputRect = refocusInputRect;

    this.events.emit("scene-awake");
  }

  private dummyInteractive!: Phaser.GameObjects.Rectangle;
  private programMaskRect!: Phaser.GameObjects.Rectangle;
  private refocusInputRect!: Phaser.GameObjects.Rectangle;

  /* START-USER-CODE */

  private _width: number;
  private set width(value: number) {
    this._width = value;
  }
  public get width() {
    return this._width;
  }

  private _height: number;
  private set height(value: number) {
    this._height = value;
  }
  public get height() {
    return this._height;
  }

  readonly programMaskOffset = {
    x: 9,
    y: 60,
  };

  readonly windowInitialPosition = {
    x: 387,
    y: 70,
  };

  private dragOffset = {
    x: 0,
    y: 0,
  };

  private windowPrefab!: WindowPrefab;

  private programMask!: Phaser.Display.Masks.GeometryMask;

  // program container
  private _programContainer!: Phaser.GameObjects.Container;
  protected get programContainer() {
    return this._programContainer;
  }
  /**
   * To be set by the extending scene: Also sets the position to windowOpenPosition, as this should only be set on create.
   */
  protected set programContainer(value: Phaser.GameObjects.Container) {
    this._programContainer = value;
    this._programContainer.setPosition(
      this.windowInitialPosition.x,
      this.windowInitialPosition.y
    );
  }

  /**
   * The objects to move on drag.
   *
   * On setup, all objects parented by the display list instead of a container are added. */
  private draggedObjects: Array<Phaser.GameObjects.GameObject>;

  // program info
  public name = "Cool Program";
  public taskBarName = "Program";
  private _hackProgram = false;
  public get hackProgram() {
    return this._hackProgram;
  }
  protected set hackProgram(value: boolean) {
    this._hackProgram = value;
  }
  /** Allow player to drag window? */
  private immobile = false;

  // state
  public minimized: boolean;
  private focused: boolean;

  // scenes
  private debugScene!: DebugScene;
  private desktopScene!: DesktopScene;

  private taskButton: TaskButton;

  init(data: any) {}

  /**
   *
   * @param width
   * @param height
   * @param name
   * @param taskbarName shorter name for taskbar. If `undefined`, will use `name`
   */
  create(
    width: number,
    height: number,
    name: string,
    taskBarName?: string,
    immobile?: boolean
  ) {
    // I have a feeling I'll need to have need to access the width and height in this class later on, which isn't possible this way. But I don't want duplicate vars.

    // usually I'd call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn't seem to run? So I'm calling both in the child class

    this.debugScene = this.scene.get("debug") as DebugScene;
    this.desktopScene = this.scene.get("desktop") as DesktopScene;

    this.name = name;
    if (taskBarName) {
      this.taskBarName = taskBarName;
    } else {
      this.taskBarName = this.name;
    }
    this.minimized = false;

    fullscreenHandler.adjustCamera(this.cameras.main);

    this.setupWindow(width, height);
    this.width = width;
    this.height = height;

    // program mask
    this.programMaskRect.setSize(width, height);
    this.programMaskRect.setPosition(
      this.windowInitialPosition.x + this.programMaskOffset.x,
      this.windowInitialPosition.y + this.programMaskOffset.y
    );
    this.dummyInteractive.setSize(width, height);
    this.dummyInteractive.setPosition(
      this.windowInitialPosition.x + this.programMaskOffset.x,
      this.windowInitialPosition.y + this.programMaskOffset.y
    );

    if (immobile) {
      this.immobile = true;
    }
    this.windowPrefab.dragRect.setInteractive({ draggable: true });
    this.windowPrefab.dragRect.on("drag", this.dragWindow, this);
    this.windowPrefab.dragRect.on("pointerdown", this.setdragOffset, this);

    this.setupRefocus();
    this.game.events.addListener(
      eventKeys.programs.newFocus,
      (args: { focusedSceneKey: string }) => {
        if (this.scene.key !== args.focusedSceneKey) {
          this.setFocus(false);
        }
      }
    );
    this.setFocus(true);
    this.game.events.emit(eventKeys.programs.newFocus, {
      focusedSceneKey: this.scene.key,
    });

    this.events.emit("scene-create");

    let overlapScene = this.scene.get("overlap") as OverlapScene;
    this.taskButton = overlapScene.taskbarPrefab.taskButtonMap.get(
      this.scene.key
    )!;
    this.taskButton.appear(this.taskBarName);
  }

  update() {}

  /**
   * Pointer input callback. Moves all necessary objects.
   * @param pointer
   * @param dragX
   * @param dragY
   * @returns
   */
  private dragWindow(pointer: Phaser.Input.Pointer, dragX: any, dragY: any) {
    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {
      return;
    }
    if (this.minimized) {
      return;
    }
    if (this.immobile) {
      return;
    }

    let pointerCameraPos = pointer.positionToCamera(
      this.cameras.main
    ) as Phaser.Math.Vector2;

    let x = Phaser.Math.Clamp(
      pointerCameraPos.x - this.dragOffset.x,
      this.desktopScene.desktopRect.x -
        (this.windowPrefab.windowBorder.width - 50),
      this.desktopScene.desktopRect.x + this.desktopScene.desktopRect.width - 50
    );
    let y = Phaser.Math.Clamp(
      pointerCameraPos.y - this.dragOffset.y,
      this.desktopScene.desktopRect.y - 15,
      this.desktopScene.desktopRect.y +
        this.desktopScene.desktopRect.height -
        65
    );

    this.setWindowPosition(x, y);
  }

  protected setWindowPosition(x: number, y: number) {
    this.windowPrefab.setPosition(x, y);
    this.programContainer.setPosition(x, y);
    this.refocusInputRect.setPosition(
      x + this.programMaskOffset.x,
      y + this.programMaskOffset.y
    );
    this.programMaskRect.setPosition(
      x + this.programMaskOffset.x,
      y + this.programMaskOffset.y
    );
    this.dummyInteractive.setPosition(
      x + this.programMaskOffset.x,
      y + this.programMaskOffset.y
    );
  }

  public close() {
    this.scene.stop();
    this.taskButton.disappear();
  }

  /**
   *
   * @param value if undefined, will toggle state
   * @returns true if now minimized
   */
  public setMinimize(value?: boolean): boolean {
    if (value == undefined) {
      value = !this.minimized;
    }

    if (value) {
      this.scene.pause(this.scene.key);
    } else {
      this.scene.resume(this.scene.key);
    }

    this.scene.setVisible(!value);
    this.minimized = value;
    return value;
  }

  setupWindow(width: number, height: number) {
    this.windowPrefab = new WindowPrefab(
      this,
      this.windowInitialPosition.x,
      this.windowInitialPosition.y
    );
    this.add.existing(this.windowPrefab);
    this.windowPrefab.setDepth(10);
    this.windowPrefab.setWindowSize(width + 17, height + 63);
  }

  /**
   * Creates a mask from the programMaskRect and sets it to programContainer. To be called by a child class once those are set.
   */
  protected setMask() {
    this.programMask = this.programMaskRect.createGeometryMask();
    this.programContainer.setMask(this.programMask);
  }

  /**
   *
   * @param value
   */
  protected setFocus(value: boolean) {
    this.refocusInputRect.setVisible(!value);
    this.windowPrefab.programNameText.setAlpha(value ? 1 : 0.7);
    this.focused = value;

    if (value) {
      this.scene.bringToTop();
      this.scene.bringToTop("overlap");
      this.scene.bringToTop("debug");
    }

    if (value) {
      this.game.events.emit(eventKeys.programs.newFocus, {
        focusedSceneKey: this.scene.key,
      });
    }

    this.taskButton?.setFocused(value);
  }

  /** Keep the window origin from jumping to the pointer */
  setdragOffset(pointer: Phaser.Input.Pointer) {
    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {
      return;
    }
    let pointerCameraPos = pointer.positionToCamera(
      this.cameras.main
    ) as Phaser.Math.Vector2;
    this.dragOffset.x = pointerCameraPos.x - this.windowPrefab.x;
    this.dragOffset.y = pointerCameraPos.y - this.windowPrefab.y;
  }

  /** Creates `refocusInputRect`  */
  setupRefocus() {
    this.refocusInputRect.setSize(
      this.programMaskRect.width,
      this.programMaskRect.height
    );
    this.refocusInputRect.setPosition(
      this.windowInitialPosition.x + this.programMaskOffset.x,
      this.windowInitialPosition.y + this.programMaskOffset.y
    );
    this.refocusInputRect.setDepth(100);
    // this.refocusInputRect.setAlpha(0.2);
    this.refocusInputRect.setAlpha(0.01);
    this.refocusInputRect.setInteractive();
    this.refocusInputRect.on(
      "pointerdown",
      () => {
        this.setFocus(true);
      },
      this
    );
    this.windowPrefab.dragRect.on(
      "pointerdown",
      () => {
        this.setFocus(true);
      },
      this
    );
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
