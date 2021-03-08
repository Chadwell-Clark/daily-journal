// import { getJournalEntries } from "../data/JournalData.js";
import { JournalEntryComponent } from "./JournalEntry.js";
/*
 * Purpose:
 *     To render as many journal entry components as
 *     there are items in the collection exposed by the
 *     data module component
 */

// DOM reference to where all entries will be rendered
// const entryLog = document.querySelector("#entryLog");

// export const EntryListComponent = () => {
//   // Use the journal entry data from the data module component
//   const entries = getJournalEntries();

//   for (const entry of entries) {
//     // Invoke the component that returns an HTML
//     //    representaion of a single entry

//     entryLog.innerHTML += JournalEntryComponent(entry);
//   }
// };


export const EntryList = (allEntries) => {
  let entryHTML = "";
  for (const entry of allEntries) {
    entryHTML += JournalEntryComponent(entry)
  }
  return entryHTML;
};