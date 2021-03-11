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

eventElement.addEventListener("click", (event) => {
  console.log(event);
  if (event.target.id === "sunny") {
      event.preventDefault();
    console.log("Sunny Mood");
  } else if (event.target.id === "partly-sunny") {
      event.preventDefault();
    console.log("Partly Sunny Mood");
  } else if (event.target.id === "partly-cloudy") {
      event.preventDefault();
    console.log("Partly Cloudy Mood");
  } else if (event.target.id === "overcast") {
      event.preventDefault();
    console.log("Overcast Mood");
  } else if (event.target.id === "mordor") {
      event.preventDefault();
    console.log("Mordor Mood");
  }
});

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
