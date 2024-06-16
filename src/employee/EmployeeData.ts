/** @format */

/** Forms `employeeKey` user type.
 *
 * Use this to iterate employeeKeys. Solution from https://danielbarta.com/literal-iteration-typescript/
 */
export const employeeKeys = [
  "employee-B",
  "employee-F",
  "employee-G",
  "employee-J",
  "employee-K",
  "employee-L",
  "employee-O",
  "employee-X",
] as const;

/** Created from `employeeKeys` array
 *
 * Solution from https://danielbarta.com/literal-iteration-typescript/
 */
export type employeeKey = (typeof employeeKeys)[number];

export type employeeData = {
  readonly name: string;
  /** Iterates through each response in array before cycling. */
  readonly emailResponsesDismissive: Array<string>;
  readonly distractableFile: string;
  readonly profileEntry: string;
  readonly profilePicKey: string;
  readonly internetHistory: string;
  readonly screenPeekKey: string;
  readonly officeCamKey: string;
};

export let employeeDataMap = new Map<employeeKey, employeeData>([
  [
    "employee-B",
    {
      name: "Bertina",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "NyanCatTHEGAME.exe",
      profileEntry:
        "EMPLOYEE NAME: Bertina\nSEX: F\nAGE: 29\n\n\n\n\n\n\n\n\n\n\nBertina has been with the company for 3 years, currently holds the position of Senior Project Manager, and is based in the company's main office.\n\nBertina has a strong background in project management, with over 10 years of experience in the field. She joined the company as a Project Manager and has since been promoted to her current role.\n\nBertina is a detail-oriented and organized individual. She is known for her problem-solving abilities and her excellent communication skills. However, she has been known to become somewhat distracted with videos she leaves on while working. At the end of the day, Bertina is a good, salt of the earth worker.\n\nIt is important to note that this information is classified and should not be shared without proper authorization. Bertina's role in our office is significant, and any information regarding her duties and contributions should be handled with the utmost discretion.",
      profilePicKey: "employee-B-working",
      internetHistory:
        "RECENT INTERNET HISTORY LOG FOR <Bertina>\n\n6-10-2004\ngaltcom.com/home\ngaltcom.com/about-us\n\n6-11-2004\ngenericorp.com/associate-log-in\ngenericorp.com/quarterly-report-archive\ngenericorp.com/quarterly-report-archive/3-22-2002.pdf\ngenericorp.com/quarterly-report-archive/3-23-2002.pdf\ngenericorp.com/quarterly-report-archive/3-24-2002.pdf\ngroogle/search='how to open pdf files'\ngroogle/search='adobe acrobat alternatives'\nmail.com/mail/u/1/#inbox",
      screenPeekKey: "screen-peek-hint",
      officeCamKey: "security-camera-B",
    },
  ],
  [
    "employee-F",
    {
      name: "Fafferd",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "CoolMathGames.com",
      profileEntry:
        "EMPLOYEE NAME: Fafferd\nSEX: M\nAGE: 40\n\n\n\n\n\n\n\n\n\n\nFafferd is a programmer worker who has been a part of our organization for over five years. He is a model employee known for his meticulous attention to detail and his impressive ability to handle multiple tasks simultaneously.\n\nHe has proven to be an indispensable asset in this aspect, thanks to his knack for collating and organizing information in a clear and concise manner.\n\nFafferd has built a reputation for being a reliable individual who consistently meets deadlines. His dedication to his work, coupled with his punctuality, has earned him the respect of his colleagues and superiors alike.\n\nFafferd shows unwavering resolve, however he is to be monitored. Management has noted decreased productivity from Fafferd, which was resolved by recently blocking access to certain websites. However, Fafferd has not just performed his duties but has also been instrumental in improving office operations. He has proposed and implemented new administrative systems that have increased our efficiency and productivity. His innovative ideas have greatly benefited the company.",
      profilePicKey: "employee-F-working",
      internetHistory:
        "RECENT INTERNET HISTORY LOG FOR <Fafferd>\n\n6-9-2004\nstackoverflow.com/questions/37362178/this-scope\nrefactoring.guru/design-patterns/state\ncodepen.io/rexrainbow/pen/abvJZmz\n\n6-10-2004\ntypescriptlang.org/docs/handbook/2/everyday-types.html#working-with-union-types\ntypescriptlang.org/docs/handbook/2/union-types\n\n6-11-2004\ngroogle/search='omnicorp inc'\nomnicorp-inc.com/home\ngroogle/search='cool_math_games'\nwww.coolmathgames.com\nwww.coolmathgames.com/0-papas-freezeria\nomnicorp-inc.com/contact-us\n\n6-12-2004\nmail.com/mail/u/1/#inbox\ngenericorp.com/backdoor\ngenericorp.com/456938745697345\ngenericorp.com/324524\ngenericorp.com/manifesto\nmail.com/mail/u/1/#inbox\n\n6-13-2004\ngroogle/search='cool_math_games'\nwww.404-blocker-popup\njavascript.info/object-copy\ngithub.com/internet-cleanser-source\nreddit.com/r/js/comments/how_to_combine_patterns\nreddit.com/r/js/comments/command_pattern_questtion",
      screenPeekKey: "data-not-found",
      officeCamKey: "security-camera-F",
    },
  ],
  [
    "employee-J",
    {
      name: "Juff",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "Thunderstruck.mp3",
      profileEntry: `EMPLOYEE NAME: Juff\nSEX: ?\nAGE: ?\n\n\n\n\n\n\n\n\n\n\nJuff is a unique individual who brings a distinct energy to the workplace. His unconventional approach to tasks and his one-of-a-kind personality add a splash of color to the everyday monotony. Juff always finds a way to inject his own personal flair into any project he's a part of, making even the most mundane tasks an adventure.\n\nIn the corporate landscape of suits and ties, Juff stands out as an oddity. His quirky demeanor, peculiar habits, and nontraditional work methods may seem out of place in the conventional work environment, but they are exactly what makes him special. His creativity, fueled by his distinctive perspective, often leads to out-of-the-box thinking and consequently, innovative solutions.\n\nHis eccentricities might make him stand out like a sore thumb, but his colleagues have come to appreciate his unique perspective. They recognize that his unconventional methods challenge the status quo and often result in more efficient, creative solutions. The initial shock of his peculiar work style has evolved into an admiration for his innovative approach.\n\nDespite his quirks, or perhaps because of them, Juff is a valuable member of our team. His approach may be different, but it is effective. He does not shy away from taking risks, and his ability to think differently is something we value in our diverse and dynamic work environment."`,
      profilePicKey: "employee-J-working",
      internetHistory: "DATA NOT FOUND.",
      screenPeekKey: "data-not-found",
      officeCamKey: "security-camera-J",
    },
  ],
  [
    "employee-K",
    {
      name: "Kalfin",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "vid.com/top-10-locomotives",
      profileEntry:
        "EMPLOYEE NAME: Kalfin\nSEX: M\nAGE: 45\n\n\n\n\n\n\n\n\n\n\nKalfin's involvement with the organization dates back to year one. Starting in the mail room, he's climbed the corperate ladder. He's got a strong work ethic and unshakeable resolve.\n\nHowever, Kalfin has been found to be easily distracted. Management has blocked his computer from accessing any contents related to trains.",
      profilePicKey: "employee-K-working",
      internetHistory: "DATA NOT FOUND.",
      screenPeekKey: "data-not-found",
      officeCamKey: "security-camera-K",
    },
  ],
]);
