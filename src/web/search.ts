/** @format */

import { keywordAlias } from "./searchKeywordAlias";
import { keywordResults } from "./searchKeywords";

export default class search {
  public static search(searchString: string): searchResults {
    let inputtedKeyWords = searchString.split(" ");
    let noResultKeywords = new Array<string>();
    let allResults = new Map<string, link>();

    this.resetLinksResultsCounter(inputtedKeyWords);
    inputtedKeyWords.forEach((keyword) => {
      let results = this.getKeywordResults(keyword);
      if (results) {
        this.incrementResultsCounter(results);
      } else {
        noResultKeywords.push(keyword);
      }
    });

    let sortedResultsCounter = Array.from(resultsCounter).sort(
      (a, b) => a[1] - b[1]
    );
    sortedResultsCounter.reverse();
    let sortedResults = new Array<link>();
    sortedResultsCounter.forEach((value) => {
      sortedResults.push(value[0]);
    });

    // TODO: shuffle link results amongst those of the same count. Currently they're ordered by keyword.

    let searchResults: searchResults;
    searchResults = {
      links: sortedResults,
      noResultKeywords: noResultKeywords,
    };
    return searchResults;
  }

  /**
   * Gets the results for the inputted keyword or keyword alias from `keywordResults`.
   * @param keyword
   * @returns
   */
  private static getKeywordResults(keyword: string): Array<link> | undefined {
    let results = keywordResults.get(keyword);
    if (!results) {
      results = keywordResults.get(keywordAlias.get(keyword)!);
    }
    return results;
  }

  private static incrementResultsCounter(results: Array<link>) {
    results.forEach((result) => {
      if (result.resultCounter) {
        result.resultCounter++;
      } else {
        result.resultCounter = 1;
      }
    });
  }
  private static resetLinksResultsCounter(inputtedKeyWords: Array<string>) {
    inputtedKeyWords.forEach((keyword) => {
      let results = this.getKeywordResults(keyword);
      results?.forEach((link) => {
        if (link) {
          link.resultCounter = 0;
        }
      });
    });
  }
}

/**
 * Returned by `seach()`
 */
export type searchResults = {
  links: Array<link>;
  noResultKeywords: Array<string>;
};

export type link = {
  type: "page" | "file";
  value: string;
  resultCounter: number;
};
