/** @format */

import PlaneIcon from "./PlaneIcon";

/**
 * Contains array of plane pairs and the distance between them to be updated each frame
 * **/
export default class PlanePairDistances extends Array {
  constructor() {
    super();

    this.array = new Array();
  }

  public array: Array<planePair>;

  public addPlane(planeToAdd: PlaneIcon, planeArray: Array<PlaneIcon>) {
    if (!planeToAdd.active) {
      console.warn("plane should be active.");
      return;
    }

    planeArray.forEach((planeInArray, index) => {
      if (
        planeToAdd.managerIndex !== planeInArray.managerIndex &&
        planeToAdd.altitude === planeInArray.altitude &&
        planeInArray.active
      ) {
        this.array.push({
          planeA: planeToAdd,
          planeB: planeInArray,
          distance: undefined,
        });
      }
    });
  }

  public removePlane(planeToRemove: PlaneIcon, planeArray: Array<PlaneIcon>) {
    let newArray = this.array.filter(
      (item, index) =>
        item.planeA.managerIndex !== planeToRemove.managerIndex &&
        item.planeB.managerIndex !== planeToRemove.managerIndex
    );
    this.array = newArray;
  }

  public update() {
    this.array.forEach((pair) => {
      let line = new Phaser.Geom.Line(
        pair.planeA.x,
        pair.planeA.y,
        pair.planeB.x,
        pair.planeB.y
      );
      pair.distance = Phaser.Geom.Line.Length(line);
    });
  }
}

export type planePair = {
  planeA: PlaneIcon;
  planeB: PlaneIcon;
  distance: number | undefined;
};
