import { getJournalEntries, useJournalContents } from "./data/JournalData.js";
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

eventElement.addEventListener("change", event => {
  console.log(event);
  if (event.target.value === "date") {
    console.log("filter by date")
  } else if (event.target.value === "mood") {
    console.log("filter by mood");

  } else if (event.target.value === "concept") {
      console.log("filter by concept");
  } else if (event.target.value === "random") {
    console.log("filter by random");
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
