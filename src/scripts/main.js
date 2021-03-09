import { getJournalEntries } from "./data/JournalData.js";
import { EntryList } from "./feed/JournalEntryList.js";

const eventElement =document.querySelector("main");

eventElement.addEventListener("click", event => {
    console.log(event);
    if(event.target.id === "calendar") {
        console.log("Open Calendar");
    }else if(event.target.id === "addSaveEntry") {
        console.log("Save Entry");
    } else if(event.target.id === "editDelete") {
        console.log("Edit or Delete entry");
    }
})

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
