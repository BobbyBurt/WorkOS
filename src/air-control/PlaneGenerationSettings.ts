/** @format */

export var asdf: Array<{ planeA: planeGenSettings; planeB: planeGenSettings }> =
  [
    {
      planeA: { circle: 5, delay: 0, offset: 5 },
      planeB: { circle: 5, delay: 0, offset: 5 },
    },
    {
      planeA: { circle: 5, delay: 0, offset: 5 },
      planeB: { circle: 5, delay: 0, offset: 5 },
    },
  ];

export type planeGenSettings = {
  circle: number;
  delay: number;
  offset: number;
};
