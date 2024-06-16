/** @format */

// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import { employeeKey } from "~/employee/EmployeeData";
import DatabaseProgramScene from "./DatabaseProgramScene";
import { ProgramBaseScene } from "./ProgramScene";
/* END-USER-IMPORTS */

export default class HackingProgramScene extends ProgramBaseScene {
  constructor() {
    super("hacking-program");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // mainContainer
    const mainContainer = this.add.container(0, 0);

    // rectangle_1
    const rectangle_1 = this.add.rectangle(0, 60, 400, 400);
    rectangle_1.setOrigin(0, 0);
    rectangle_1.isFilled = true;
    rectangle_1.fillColor = 2896939;
    mainContainer.add(rectangle_1);

    // bitmaptext_1
    const bitmaptext_1 = this.add.bitmapText(200, 260, "nokia", "HACKING...");
    bitmaptext_1.setOrigin(0.5, 0.5);
    bitmaptext_1.tintTopLeft = 1441542;
    bitmaptext_1.tintTopRight = 1441542;
    bitmaptext_1.tintBottomLeft = 1441542;
    bitmaptext_1.tintBottomRight = 1441542;
    bitmaptext_1.text = "HACKING...";
    bitmaptext_1.fontSize = -24;
    bitmaptext_1.align = 1;
    mainContainer.add(bitmaptext_1);

    // codeText
    const codeText = this.add.bitmapText(
      7,
      16,
      "nokia",
      'create(width: number, height: number, name: string) {\n    // I have a feeling I\'ll need to have need to access the width and height in this class later on, which isn\'t possible this way. But I don\'t want duplicate vars.\n\n    // usually I\'d call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn\'t seem to run? So I\'m calling both in the child class\n\n    this.debugScene = this.scene.get("debug") as DebugScene;\n    this.desktopScene = this.scene.get("desktop") as DesktopScene;\n\n    this.name = name;\n    this.minimized = false;\n\n    fullscreenHandler.adjustCamera(this.cameras.main);\n\n    this.setupWindow(width, height);\n    this.width = width;\n    this.height = height;\n\n    // program mask\n    this.programMaskRect.setSize(width, height);\n    this.programMaskRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n\n    this.windowPrefab.dragRect.setInteractive({ draggable: true });\n    this.windowPrefab.dragRect.on("drag", this.dragWindow, this);\n    this.windowPrefab.dragRect.on("pointerdown", this.setdragOffset, this);\n\n    this.setupRefocus();\n    this.game.events.addListener(\n      eventKeys.programs.newFocus,\n      (args: { focusedSceneKey: string }) => {\n        if (this.scene.key !== args.focusedSceneKey) {\n          this.setFocus(false);\n        }\n      }\n    );\n    this.setFocus(true);\n    this.game.events.emit(eventKeys.programs.newFocus, {\n      focusedSceneKey: this.scene.key,\n    });\n\n    this.events.emit("scene-create");\n\n    let overlapScene = this.scene.get("overlap") as OverlapScene;\n    this.taskButton = overlapScene.taskbarPrefab.taskButtonMap.get(\n      this.scene.key\n    )!;\n    this.taskButton.appear();\n  }\n\nupdate() {}\n\n  /**\n   * Pointer input callback. Moves all necessary objects.\n   * @param pointer\n   * @param dragX\n   * @param dragY\n   * @returns\n   */\n  private dragWindow(pointer: Phaser.Input.Pointer, dragX: any, dragY: any) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    if (this.minimized) {\n      return;\n    }\n\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n\n    let x = Phaser.Math.Clamp(\n      pointerCameraPos.x - this.dragOffset.x,\n      this.desktopScene.desktopRect.x -\n        (this.windowPrefab.windowBorder.width - 50),\n      this.desktopScene.desktopRect.x + this.desktopScene.desktopRect.width - 50\n    );\n    let y = Phaser.Math.Clamp(\n      pointerCameraPos.y - this.dragOffset.y,\n      this.desktopScene.desktopRect.y - 15,\n      this.desktopScene.desktopRect.y +\n        this.desktopScene.desktopRect.height -\n        65\n    );\n    // let x = pointer.x;\n    // let y = pointer.y;\n\n    this.windowPrefab.setPosition(x, y);\n    this.programContainer.setPosition(x, y);\n    this.refocusInputRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n    this.programMaskRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n  }\n\n  public close() {\n    this.scene.stop();\n    this.taskButton.disappear();\n  }\n\n  /**\n   *\n   * @param value if undefined, will toggle state\n   * @returns true if now minimized\n   */\n  public setMinimize(value?: boolean): boolean {\n    if (value == undefined) {\n      value = !this.minimized;\n    }\n    this.scene.setVisible(!value);\n    this.minimized = value;\n    return value;\n  }\n\n  setupWindow(width: number, height: number) {\n    this.windowPrefab = new WindowPrefab(\n      this,\n      this.windowInitialPosition.x,\n      this.windowInitialPosition.y\n    );\n    this.add.existing(this.windowPrefab);\n    this.windowPrefab.setDepth(10);\n    this.windowPrefab.setWindowSize(width + 17, height + 63);\n  }\n\n  /**\n   * Creates a mask from the programMaskRect and sets it to programContainer. To be called by a child class once those are set.\n   */\n  protected setMask() {\n    this.programMask = this.programMaskRect.createGeometryMask();\n    this.programContainer.setMask(this.programMask);\n  }\n\n  /**\n   *\n   * @param value\n   */\n  protected setFocus(value: boolean) {\n    this.refocusInputRect.setVisible(!value);\n    this.windowPrefab.programNameText.setAlpha(value ? 1 : 0.7);\n    this.focused = value;\n\n    if (value) {\n      this.scene.bringToTop();\n      this.scene.bringToTop("overlap");\n      this.scene.bringToTop("debug");\n    }\n\n    if (value) {\n      this.game.events.emit(eventKeys.programs.newFocus, {\n        focusedSceneKey: this.scene.key,\n      });\n    }\n  }\n\n  /** Keep the window origin from jumping to the pointer */\n  setdragOffset(pointer: Phaser.Input.Pointer) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n    this.dragOffset.x = pointerCameraPos.x - this.windowPrefab.x;\n    this.dragOffset.y = pointerCameraPos.y - this.windowPrefab.y;\n  }\n\n  /** Creates `refocusInputRect`  */\n  setupRefocus() {\n    this.refocusInputRect.setSize(\n      this.programMaskRect.width,\n      this.programMaskRect.height\n    );\n    this.refocusInputRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n    this.refocusInputRect.setDepth(100);\n    // this.refocusInputRect.setAlpha(0.2);\n    this.refocusInputRect.setAlpha(0.01);\n    this.refocusInputRect.setInteractive();\n    this.refocusInputRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n    this.windowPrefab.dragRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n  }'
    );
    codeText.alpha = 0.2;
    codeText.alphaTopLeft = 0.2;
    codeText.alphaTopRight = 0.2;
    codeText.alphaBottomLeft = 0.2;
    codeText.alphaBottomRight = 0.2;
    codeText.tintTopLeft = 1441542;
    codeText.tintTopRight = 1441542;
    codeText.tintBottomLeft = 1441542;
    codeText.tintBottomRight = 1441542;
    codeText.text =
      'create(width: number, height: number, name: string) {\n    // I have a feeling I\'ll need to have need to access the width and height in this class later on, which isn\'t possible this way. But I don\'t want duplicate vars.\n\n    // usually I\'d call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn\'t seem to run? So I\'m calling both in the child class\n\n    this.debugScene = this.scene.get("debug") as DebugScene;\n    this.desktopScene = this.scene.get("desktop") as DesktopScene;\n\n    this.name = name;\n    this.minimized = false;\n\n    fullscreenHandler.adjustCamera(this.cameras.main);\n\n    this.setupWindow(width, height);\n    this.width = width;\n    this.height = height;\n\n    // program mask\n    this.programMaskRect.setSize(width, height);\n    this.programMaskRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n\n    this.windowPrefab.dragRect.setInteractive({ draggable: true });\n    this.windowPrefab.dragRect.on("drag", this.dragWindow, this);\n    this.windowPrefab.dragRect.on("pointerdown", this.setdragOffset, this);\n\n    this.setupRefocus();\n    this.game.events.addListener(\n      eventKeys.programs.newFocus,\n      (args: { focusedSceneKey: string }) => {\n        if (this.scene.key !== args.focusedSceneKey) {\n          this.setFocus(false);\n        }\n      }\n    );\n    this.setFocus(true);\n    this.game.events.emit(eventKeys.programs.newFocus, {\n      focusedSceneKey: this.scene.key,\n    });\n\n    this.events.emit("scene-create");\n\n    let overlapScene = this.scene.get("overlap") as OverlapScene;\n    this.taskButton = overlapScene.taskbarPrefab.taskButtonMap.get(\n      this.scene.key\n    )!;\n    this.taskButton.appear();\n  }\n\nupdate() {}\n\n  /**\n   * Pointer input callback. Moves all necessary objects.\n   * @param pointer\n   * @param dragX\n   * @param dragY\n   * @returns\n   */\n  private dragWindow(pointer: Phaser.Input.Pointer, dragX: any, dragY: any) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    if (this.minimized) {\n      return;\n    }\n\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n\n    let x = Phaser.Math.Clamp(\n      pointerCameraPos.x - this.dragOffset.x,\n      this.desktopScene.desktopRect.x -\n        (this.windowPrefab.windowBorder.width - 50),\n      this.desktopScene.desktopRect.x + this.desktopScene.desktopRect.width - 50\n    );\n    let y = Phaser.Math.Clamp(\n      pointerCameraPos.y - this.dragOffset.y,\n      this.desktopScene.desktopRect.y - 15,\n      this.desktopScene.desktopRect.y +\n        this.desktopScene.desktopRect.height -\n        65\n    );\n    // let x = pointer.x;\n    // let y = pointer.y;\n\n    this.windowPrefab.setPosition(x, y);\n    this.programContainer.setPosition(x, y);\n    this.refocusInputRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n    this.programMaskRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n  }\n\n  public close() {\n    this.scene.stop();\n    this.taskButton.disappear();\n  }\n\n  /**\n   *\n   * @param value if undefined, will toggle state\n   * @returns true if now minimized\n   */\n  public setMinimize(value?: boolean): boolean {\n    if (value == undefined) {\n      value = !this.minimized;\n    }\n    this.scene.setVisible(!value);\n    this.minimized = value;\n    return value;\n  }\n\n  setupWindow(width: number, height: number) {\n    this.windowPrefab = new WindowPrefab(\n      this,\n      this.windowInitialPosition.x,\n      this.windowInitialPosition.y\n    );\n    this.add.existing(this.windowPrefab);\n    this.windowPrefab.setDepth(10);\n    this.windowPrefab.setWindowSize(width + 17, height + 63);\n  }\n\n  /**\n   * Creates a mask from the programMaskRect and sets it to programContainer. To be called by a child class once those are set.\n   */\n  protected setMask() {\n    this.programMask = this.programMaskRect.createGeometryMask();\n    this.programContainer.setMask(this.programMask);\n  }\n\n  /**\n   *\n   * @param value\n   */\n  protected setFocus(value: boolean) {\n    this.refocusInputRect.setVisible(!value);\n    this.windowPrefab.programNameText.setAlpha(value ? 1 : 0.7);\n    this.focused = value;\n\n    if (value) {\n      this.scene.bringToTop();\n      this.scene.bringToTop("overlap");\n      this.scene.bringToTop("debug");\n    }\n\n    if (value) {\n      this.game.events.emit(eventKeys.programs.newFocus, {\n        focusedSceneKey: this.scene.key,\n      });\n    }\n  }\n\n  /** Keep the window origin from jumping to the pointer */\n  setdragOffset(pointer: Phaser.Input.Pointer) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n    this.dragOffset.x = pointerCameraPos.x - this.windowPrefab.x;\n    this.dragOffset.y = pointerCameraPos.y - this.windowPrefab.y;\n  }\n\n  /** Creates `refocusInputRect`  */\n  setupRefocus() {\n    this.refocusInputRect.setSize(\n      this.programMaskRect.width,\n      this.programMaskRect.height\n    );\n    this.refocusInputRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n    this.refocusInputRect.setDepth(100);\n    // this.refocusInputRect.setAlpha(0.2);\n    this.refocusInputRect.setAlpha(0.01);\n    this.refocusInputRect.setInteractive();\n    this.refocusInputRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n    this.windowPrefab.dragRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n  }';
    codeText.fontSize = -8;
    mainContainer.add(codeText);

    // bitmaptext
    const bitmaptext = this.add.bitmapText(
      200,
      291,
      "nokia",
      "MASH KEYS TO PROGRESS"
    );
    bitmaptext.setOrigin(0.5, 0.5);
    bitmaptext.tintTopLeft = 1441542;
    bitmaptext.tintTopRight = 1441542;
    bitmaptext.tintBottomLeft = 1441542;
    bitmaptext.tintBottomRight = 1441542;
    bitmaptext.text = "MASH KEYS TO PROGRESS";
    bitmaptext.fontSize = -16;
    bitmaptext.align = 1;
    mainContainer.add(bitmaptext);

    // progressBar
    const progressBar = this.add.rectangle(50, 311, 1, 10);
    progressBar.setOrigin(0, 0);
    progressBar.isFilled = true;
    progressBar.fillColor = 1441542;
    mainContainer.add(progressBar);

    // progressBarOutline
    const progressBarOutline = this.add.rectangle(50, 311, 300, 10);
    progressBarOutline.setOrigin(0, 0);
    progressBarOutline.fillColor = 1441542;
    progressBarOutline.isStroked = true;
    progressBarOutline.strokeColor = 1441542;
    progressBarOutline.strokeAlpha = 0.5;
    mainContainer.add(progressBarOutline);

    // codeText_1
    const codeText_1 = this.add.bitmapText(
      -257,
      31,
      "nokia",
      'create(width: number, height: number, name: string) {\n    // I have a feeling I\'ll need to have need to access the width and height in this class later on, which isn\'t possible this way. But I don\'t want duplicate vars.\n\n    // usually I\'d call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn\'t seem to run? So I\'m calling both in the child class\n\n    this.debugScene = this.scene.get("debug") as DebugScene;\n    this.desktopScene = this.scene.get("desktop") as DesktopScene;\n\n    this.name = name;\n    this.minimized = false;\n\n    fullscreenHandler.adjustCamera(this.cameras.main);\n\n    this.setupWindow(width, height);\n    this.width = width;\n    this.height = height;\n\n    // program mask\n    this.programMaskRect.setSize(width, height);\n    this.programMaskRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n\n    this.windowPrefab.dragRect.setInteractive({ draggable: true });\n    this.windowPrefab.dragRect.on("drag", this.dragWindow, this);\n    this.windowPrefab.dragRect.on("pointerdown", this.setdragOffset, this);\n\n    this.setupRefocus();\n    this.game.events.addListener(\n      eventKeys.programs.newFocus,\n      (args: { focusedSceneKey: string }) => {\n        if (this.scene.key !== args.focusedSceneKey) {\n          this.setFocus(false);\n        }\n      }\n    );\n    this.setFocus(true);\n    this.game.events.emit(eventKeys.programs.newFocus, {\n      focusedSceneKey: this.scene.key,\n    });\n\n    this.events.emit("scene-create");\n\n    let overlapScene = this.scene.get("overlap") as OverlapScene;\n    this.taskButton = overlapScene.taskbarPrefab.taskButtonMap.get(\n      this.scene.key\n    )!;\n    this.taskButton.appear();\n  }\n\nupdate() {}\n\n  /**\n   * Pointer input callback. Moves all necessary objects.\n   * @param pointer\n   * @param dragX\n   * @param dragY\n   * @returns\n   */\n  private dragWindow(pointer: Phaser.Input.Pointer, dragX: any, dragY: any) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    if (this.minimized) {\n      return;\n    }\n\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n\n    let x = Phaser.Math.Clamp(\n      pointerCameraPos.x - this.dragOffset.x,\n      this.desktopScene.desktopRect.x -\n        (this.windowPrefab.windowBorder.width - 50),\n      this.desktopScene.desktopRect.x + this.desktopScene.desktopRect.width - 50\n    );\n    let y = Phaser.Math.Clamp(\n      pointerCameraPos.y - this.dragOffset.y,\n      this.desktopScene.desktopRect.y - 15,\n      this.desktopScene.desktopRect.y +\n        this.desktopScene.desktopRect.height -\n        65\n    );\n    // let x = pointer.x;\n    // let y = pointer.y;\n\n    this.windowPrefab.setPosition(x, y);\n    this.programContainer.setPosition(x, y);\n    this.refocusInputRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n    this.programMaskRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n  }\n\n  public close() {\n    this.scene.stop();\n    this.taskButton.disappear();\n  }\n\n  /**\n   *\n   * @param value if undefined, will toggle state\n   * @returns true if now minimized\n   */\n  public setMinimize(value?: boolean): boolean {\n    if (value == undefined) {\n      value = !this.minimized;\n    }\n    this.scene.setVisible(!value);\n    this.minimized = value;\n    return value;\n  }\n\n  setupWindow(width: number, height: number) {\n    this.windowPrefab = new WindowPrefab(\n      this,\n      this.windowInitialPosition.x,\n      this.windowInitialPosition.y\n    );\n    this.add.existing(this.windowPrefab);\n    this.windowPrefab.setDepth(10);\n    this.windowPrefab.setWindowSize(width + 17, height + 63);\n  }\n\n  /**\n   * Creates a mask from the programMaskRect and sets it to programContainer. To be called by a child class once those are set.\n   */\n  protected setMask() {\n    this.programMask = this.programMaskRect.createGeometryMask();\n    this.programContainer.setMask(this.programMask);\n  }\n\n  /**\n   *\n   * @param value\n   */\n  protected setFocus(value: boolean) {\n    this.refocusInputRect.setVisible(!value);\n    this.windowPrefab.programNameText.setAlpha(value ? 1 : 0.7);\n    this.focused = value;\n\n    if (value) {\n      this.scene.bringToTop();\n      this.scene.bringToTop("overlap");\n      this.scene.bringToTop("debug");\n    }\n\n    if (value) {\n      this.game.events.emit(eventKeys.programs.newFocus, {\n        focusedSceneKey: this.scene.key,\n      });\n    }\n  }\n\n  /** Keep the window origin from jumping to the pointer */\n  setdragOffset(pointer: Phaser.Input.Pointer) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n    this.dragOffset.x = pointerCameraPos.x - this.windowPrefab.x;\n    this.dragOffset.y = pointerCameraPos.y - this.windowPrefab.y;\n  }\n\n  /** Creates `refocusInputRect`  */\n  setupRefocus() {\n    this.refocusInputRect.setSize(\n      this.programMaskRect.width,\n      this.programMaskRect.height\n    );\n    this.refocusInputRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n    this.refocusInputRect.setDepth(100);\n    // this.refocusInputRect.setAlpha(0.2);\n    this.refocusInputRect.setAlpha(0.01);\n    this.refocusInputRect.setInteractive();\n    this.refocusInputRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n    this.windowPrefab.dragRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n  }'
    );
    codeText_1.alpha = 0.1;
    codeText_1.alphaTopLeft = 0.1;
    codeText_1.alphaTopRight = 0.1;
    codeText_1.alphaBottomLeft = 0.1;
    codeText_1.alphaBottomRight = 0.1;
    codeText_1.tintTopLeft = 1441542;
    codeText_1.tintTopRight = 1441542;
    codeText_1.tintBottomLeft = 1441542;
    codeText_1.tintBottomRight = 1441542;
    codeText_1.text =
      'create(width: number, height: number, name: string) {\n    // I have a feeling I\'ll need to have need to access the width and height in this class later on, which isn\'t possible this way. But I don\'t want duplicate vars.\n\n    // usually I\'d call editorCreate() here but for some reason when the child calls super.create() then editorCreate() doesn\'t seem to run? So I\'m calling both in the child class\n\n    this.debugScene = this.scene.get("debug") as DebugScene;\n    this.desktopScene = this.scene.get("desktop") as DesktopScene;\n\n    this.name = name;\n    this.minimized = false;\n\n    fullscreenHandler.adjustCamera(this.cameras.main);\n\n    this.setupWindow(width, height);\n    this.width = width;\n    this.height = height;\n\n    // program mask\n    this.programMaskRect.setSize(width, height);\n    this.programMaskRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n\n    this.windowPrefab.dragRect.setInteractive({ draggable: true });\n    this.windowPrefab.dragRect.on("drag", this.dragWindow, this);\n    this.windowPrefab.dragRect.on("pointerdown", this.setdragOffset, this);\n\n    this.setupRefocus();\n    this.game.events.addListener(\n      eventKeys.programs.newFocus,\n      (args: { focusedSceneKey: string }) => {\n        if (this.scene.key !== args.focusedSceneKey) {\n          this.setFocus(false);\n        }\n      }\n    );\n    this.setFocus(true);\n    this.game.events.emit(eventKeys.programs.newFocus, {\n      focusedSceneKey: this.scene.key,\n    });\n\n    this.events.emit("scene-create");\n\n    let overlapScene = this.scene.get("overlap") as OverlapScene;\n    this.taskButton = overlapScene.taskbarPrefab.taskButtonMap.get(\n      this.scene.key\n    )!;\n    this.taskButton.appear();\n  }\n\nupdate() {}\n\n  /**\n   * Pointer input callback. Moves all necessary objects.\n   * @param pointer\n   * @param dragX\n   * @param dragY\n   * @returns\n   */\n  private dragWindow(pointer: Phaser.Input.Pointer, dragX: any, dragY: any) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    if (this.minimized) {\n      return;\n    }\n\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n\n    let x = Phaser.Math.Clamp(\n      pointerCameraPos.x - this.dragOffset.x,\n      this.desktopScene.desktopRect.x -\n        (this.windowPrefab.windowBorder.width - 50),\n      this.desktopScene.desktopRect.x + this.desktopScene.desktopRect.width - 50\n    );\n    let y = Phaser.Math.Clamp(\n      pointerCameraPos.y - this.dragOffset.y,\n      this.desktopScene.desktopRect.y - 15,\n      this.desktopScene.desktopRect.y +\n        this.desktopScene.desktopRect.height -\n        65\n    );\n    // let x = pointer.x;\n    // let y = pointer.y;\n\n    this.windowPrefab.setPosition(x, y);\n    this.programContainer.setPosition(x, y);\n    this.refocusInputRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n    this.programMaskRect.setPosition(\n      x + this.programMaskOffset.x,\n      y + this.programMaskOffset.y\n    );\n  }\n\n  public close() {\n    this.scene.stop();\n    this.taskButton.disappear();\n  }\n\n  /**\n   *\n   * @param value if undefined, will toggle state\n   * @returns true if now minimized\n   */\n  public setMinimize(value?: boolean): boolean {\n    if (value == undefined) {\n      value = !this.minimized;\n    }\n    this.scene.setVisible(!value);\n    this.minimized = value;\n    return value;\n  }\n\n  setupWindow(width: number, height: number) {\n    this.windowPrefab = new WindowPrefab(\n      this,\n      this.windowInitialPosition.x,\n      this.windowInitialPosition.y\n    );\n    this.add.existing(this.windowPrefab);\n    this.windowPrefab.setDepth(10);\n    this.windowPrefab.setWindowSize(width + 17, height + 63);\n  }\n\n  /**\n   * Creates a mask from the programMaskRect and sets it to programContainer. To be called by a child class once those are set.\n   */\n  protected setMask() {\n    this.programMask = this.programMaskRect.createGeometryMask();\n    this.programContainer.setMask(this.programMask);\n  }\n\n  /**\n   *\n   * @param value\n   */\n  protected setFocus(value: boolean) {\n    this.refocusInputRect.setVisible(!value);\n    this.windowPrefab.programNameText.setAlpha(value ? 1 : 0.7);\n    this.focused = value;\n\n    if (value) {\n      this.scene.bringToTop();\n      this.scene.bringToTop("overlap");\n      this.scene.bringToTop("debug");\n    }\n\n    if (value) {\n      this.game.events.emit(eventKeys.programs.newFocus, {\n        focusedSceneKey: this.scene.key,\n      });\n    }\n  }\n\n  /** Keep the window origin from jumping to the pointer */\n  setdragOffset(pointer: Phaser.Input.Pointer) {\n    if (!this.desktopScene.desktopGeomRect.contains(pointer.x, pointer.y)) {\n      return;\n    }\n    let pointerCameraPos = pointer.positionToCamera(\n      this.cameras.main\n    ) as Phaser.Math.Vector2;\n    this.dragOffset.x = pointerCameraPos.x - this.windowPrefab.x;\n    this.dragOffset.y = pointerCameraPos.y - this.windowPrefab.y;\n  }\n\n  /** Creates `refocusInputRect`  */\n  setupRefocus() {\n    this.refocusInputRect.setSize(\n      this.programMaskRect.width,\n      this.programMaskRect.height\n    );\n    this.refocusInputRect.setPosition(\n      this.windowInitialPosition.x + this.programMaskOffset.x,\n      this.windowInitialPosition.y + this.programMaskOffset.y\n    );\n    this.refocusInputRect.setDepth(100);\n    // this.refocusInputRect.setAlpha(0.2);\n    this.refocusInputRect.setAlpha(0.01);\n    this.refocusInputRect.setInteractive();\n    this.refocusInputRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n    this.windowPrefab.dragRect.on(\n      "pointerdown",\n      () => {\n        this.setFocus(true);\n      },\n      this\n    );\n  }';
    codeText_1.fontSize = -16;
    mainContainer.add(codeText_1);

    this.codeText = codeText;
    this.progressBar = progressBar;
    this.progressBarOutline = progressBarOutline;
    this.codeText_1 = codeText_1;
    this.mainContainer = mainContainer;

    this.events.emit("scene-awake");
  }

  private codeText!: Phaser.GameObjects.BitmapText;
  private progressBar!: Phaser.GameObjects.Rectangle;
  private progressBarOutline!: Phaser.GameObjects.Rectangle;
  private codeText_1!: Phaser.GameObjects.BitmapText;
  public mainContainer!: Phaser.GameObjects.Container;

  /* START-USER-CODE */

  // Write your code here

  private readonly progressGoal = 100;
  private progress = 0;

  private readonly allLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  /** Employee database entry. Later this will have to accomodate other things. */
  private hackingTarget: employeeKey;

  private mask: Phaser.Display.Masks.GeometryMask;

  /**
   * Boilerplate setup for all program classes
   */
  setupProgram() {
    // create
    super.hackProgram = true;
    super.editorCreate();
    super.create(400, 400, "decryption.exe");
    this.editorCreate();

    super.programContainer = this.mainContainer;
    super.setMask();
  }

  create() {
    this.setupProgram();

    this.progress = 0;

    this.setupTweens();

    this.setupInput();
  }

  init(args: { employee: employeeKey }) {
    this.hackingTarget = args.employee;
  }

  setupTweens() {
    this.tweens.add({
      targets: this.codeText,
      duration: 30000,
      ease: Phaser.Math.Easing.Linear,
      y: -1499,
    });
    this.tweens.add({
      targets: this.codeText_1,
      duration: 30000,
      ease: Phaser.Math.Easing.Linear,
      y: -3494,
    });
  }

  setupInput() {
    this.allLetters.forEach((value) => {
      this.input.keyboard?.on(`keydown-${value}`, () => {
        this.sound.play(`hacking-sfx-${Phaser.Math.Between(1, 4)}`, {
          volume: 0.5,
        });
        this.progress += 1;
        this.progressBar.displayWidth = this.progress;
        if (this.progress === 300) {
          this.completeHacking();
        }
      });
    });
    this.input.keyboard?.on("keydown-ENTER", () => {
      let debugScene = this.scene.get("debug");
      if (debugScene) {
        if (debugScene.scene.isVisible()) {
          this.completeHacking();
        }
      }
    });
  }

  completeHacking() {
    let databaseScene = this.scene.get(
      "database-program"
    ) as DatabaseProgramScene;
    databaseScene.unlockEntry(this.hackingTarget, databaseScene.selectedOption);
    databaseScene.showEntry(this.hackingTarget, databaseScene.selectedOption);
    super.close();
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
