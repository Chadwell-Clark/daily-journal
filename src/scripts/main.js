import { getJournalEntries } from "./data/JournalData.js";
import { EntryList } from "./feed/JournalEntryList.js";

const showEntryList = () => {
    const entryLog = document.querySelector("#entryLog");
    getJournalEntries().then((allEntries) => {
        entryLog.innerHTML = EntryList(allEntries);
    });
};

const startFountainPen = () => {
    showEntryList();
}

startFountainPen();
