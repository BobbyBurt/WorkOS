/** @format */

export type employeeKey =
  | "employee-B"
  | "employee-F"
  | "employee-G"
  | "employee-J"
  | "employee-K"
  | "employee-L"
  | "employee-O"
  | "employee-X";

export type employeeData = {
  readonly name: string;
  /** Iterates through each response in array before cycling. */
  readonly emailResponsesDismissive: Array<string>;
  readonly distractableFile: string;
  readonly databaseEntry: string;
};

export let employeeDataMap = new Map<employeeKey, employeeData>([
  [
    "employee-B",
    {
      name: "Bertina",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "",
      databaseEntry:
        "EMPLOYEE NAME: Bertina\nSEX: F\nAGE: 29\nBertina has been with the company for 3 years, currently holds the position of Senior Project Manager, and is based in the company's main office.\n\nBertina has a strong background in project management, with over 10 years of experience in the field. She joined the company as a Project Manager and has since been promoted to her current role.\n\nBertina is a detail-oriented and organized individual. She is known for her problem-solving abilities and her excellent communication skills. However, her problem solving skills have been known to become a distraction. She has been repremanded several times for becoming fixated on Wordle puzzles.",
    },
  ],
  [
    "employee-F",
    {
      name: "Fafferd",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "",
      databaseEntry:
        "EMPLOYEE NAME: Fafferd\nSEX: M\nAGE: 40\nFafferd is an office worker who has been a part of our organization for over five years. He is a model employee known for his meticulous attention to detail and his impressive ability to handle multiple tasks simultaneously.\n\nHis primary responsibilities within the office include managing office supplies, ensuring that the office never lacks the essential items needed for smooth operations. He is also in charge of coordinating meetings, a role he executes flawlessly, ensuring all relevant parties are informed and all necessary materials are prepared in advance.\n\nHe has proven to be an indispensable asset in this aspect, thanks to his knack for collating and organizing information in a clear and concise manner.\n\nFafferd has built a reputation for being a reliable individual who consistently meets deadlines. His dedication to his work, coupled with his punctuality, has earned him the respect of his colleagues and superiors alike.\n\nFurthermore, Fafferd has not just performed his duties but has also been instrumental in improving office operations. Oh also he likes funny monkey videos. He has proposed and implemented new administrative systems that have increased our efficiency and productivity. His innovative ideas have greatly benefited the company, and his proactive approach to problem-solving continues to drive our office operations forward.",
    },
  ],
  [
    "employee-J",
    {
      name: "Juff",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "",
      databaseEntry:
        "EMPLOYEE NAME: Juff\nSEX: ?\nAGE: ?\nJuff is an oddity with a strange pattern of speech. Very little is known about Juff aside from this bio included on his resume:\n\nJuff is rough and tough. I've got the stuff. But I knows when enough is enough. Sometimes my presentations are off the cuff.",
    },
  ],
  [
    "employee-K",
    {
      name: "Kalfin",
      emailResponsesDismissive: ["asdf"],
      distractableFile: "",
      databaseEntry: "Kalfin is not to be trusted.",
    },
  ],
]);
