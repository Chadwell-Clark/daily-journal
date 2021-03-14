/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// import { JournalEntryForm } from "../feed/JournalEntryForm";

/*
 * 
 * @returns a copy of fetched data to limit redundant api calls
 */

let journalContents = [];
export const useJournalContents = () => {
  return [...journalContents];
}



//*  You export a function that provides a version of the
//*  raw data in the format that you want

export const getJournalEntries = () => {

  return fetch("http://localhost:8080/journalEntries")
  .then(response => response.json())
 
  .then(data => {
  const sortedByDate = data.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    journalContents = sortedByDate;
    return sortedByDate
  })
};


export const createJournalPost = (postEntry) => {
  return fetch("http://localhost:8080/journalEntries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postEntry),
  }).then(response => response.json());
};


