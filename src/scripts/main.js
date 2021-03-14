import { getJournalEntries, useJournalContents } from "./data/JournalData.js";

import { JournalEntryForm } from "./feed/JournalEntryForm.js";
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
eventElement.addEventListener("change", event => {
  console.log(event);
  if (event.target.value === "date") {
    console.log("filter by date");
  } else if (event.target.value === "concept") {
    console.log("filter by concept");
  } else if (event.target.value === "random") {
    console.log("filter by random");
  } else if (event.target.value === "sunny") {
    console.log("filter by Mood - Sunny");
  } else if (event.target.value === "partlySunny") {
    console.log("filter by Mood - Partly Sunny");
  } else if (event.target.value === "partlyCloudy") {
    console.log("filter by Mood - Partly Cloudy");
  } else if (event.target.value === "overcast") {
    console.log("filter by Mood - Overcast");
  } else if (event.target.value === "mordor") {
    console.log("filter by Mood - Mordor");
  } 
});

eventElement.addEventListener("click", (event) => {
  console.log(event);
  event.preventDefault();
  if (event.target.id === "sunny") {
    console.log("Sunny Mood");
  } else if (event.target.id === "partly-sunny") {      // event.preventDefault();
    console.log("Partly Sunny Mood");
  } else if (event.target.id === "partly-cloudy") {
    console.log("Partly Cloudy Mood");
  } else if (event.target.id === "overcast") {      // event.preventDefault();
    console.log("Overcast Mood");
  } else if (event.target.id === "mordor") {
    console.log("Mordor Mood");
  }
});

const showJournalEntryForm =() => {
  const journalFormDOMTarget =document.querySelector(".journalForm");
  journalFormDOMTarget.innerHTML = JournalEntryForm();
};

const showEntryList = () => {
    const entryLog = document.querySelector("#entryLog");
    getJournalEntries().then((allEntries) => {
        entryLog.innerHTML = EntryList(allEntries);
    });
};

const startFountainPen = () => {
    showJournalEntryForm();
    showEntryList();
}

startFountainPen();
