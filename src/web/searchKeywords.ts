/** @format */

import { link } from "./search";

/** Results are ordered by relavence */
export let keywordResults = new Map<string, Array<link>>([
  [
    "games",
    [
      { type: "page", value: "nintendo.com" },
      { type: "page", value: "newgrounds.com/gamesportal" },
      { type: "page", value: "coolmathgames.com" },
      { type: "page", value: "BobbyBurtGames.com" },
    ],
  ],
  [
    "newgrounds",
    [
      { type: "page", value: "newgrounds.com" },
      { type: "page", value: "newgrounds.com/gamesportal" },
      { type: "page", value: "newgrounds.com/audioportal" },
    ],
  ],
  [
    "math",
    [
      { type: "page", value: "mathtutoronline.com" },
      { type: "page", value: "coolmathgames.com" },
    ],
  ],
  [
    "portal",
    [
      { type: "page", value: "portalToAnotherDimension.com" },
      { type: "page", value: "newgrounds.com/gamesportal" },
      { type: "page", value: "newgrounds.com/audioportal" },
    ],
  ],
]);
