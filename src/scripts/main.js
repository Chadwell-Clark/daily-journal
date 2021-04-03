import { getJournalEntries, useJournalContents, createJournalPost, deleteEntry } from "./data/JournalData.js";
import { JournalEntryForm } from "./feed/JournalEntryForm.js";
import { EntryList } from "./feed/JournalEntryList.js";
import { NavBar } from "./feed/NavBar.js";

//   ***  Variable to hold Event Element Target  ***   //
const eventElement =document.querySelector("main");

//   ***  Click Event Handler for Journal Entry save/delete/calendar  ***   //
eventElement.addEventListener("click", event => {
    // console.log(event);
    if(event.target.id === "calendar") {
        console.log("Open Calendar");
    }else if(event.target.id === "addSaveEntry") {
        console.log("Save Entry");
    } else if(event.target.id === "edit") {
        console.log("Edit entry");
    }
})



//   ***  Change Event Handler for filtering of Journal Entries  ***   //
eventElement.addEventListener("change", event => {
  // console.log(event);
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

//   ***  Click Event Handler for Mood Selection in Journal Entry  ***   //
eventElement.addEventListener("input", (event) => {
  // console.log(event);
  event.preventDefault();
  if (event.target.id === "sunny") {
    console.log("Sunny Mood");
  } else if (event.target.id === "partlySunny") {      // event.preventDefault();
    console.log("Partly Sunny Mood");
  } else if (event.target.id === "partlyCloudy") {
    console.log("Partly Cloudy Mood");
  } else if (event.target.id === "overcast") {      // event.preventDefault();
    console.log("Overcast Mood");
  } else if (event.target.id === "mordor") {
    console.log("Mordor Mood");
  }
});

//   ***  Click Event Handler for Journal Entry save/delete/calendar  ***   //
eventElement.addEventListener("click", event => {
    console.log(event);
    if (event.target.id === "addSaveEntry") {
      const date = document.querySelector("input[name='date']");
      console.log(date.value);
      const concept =document.querySelector("input[name='concepts']");
      console.log(concept.value);
      const entry = document.querySelector("#journalEntry");
      console.log(entry.value);
      const quote = document.querySelector("input[name='quote']");
      console.log(quote.value);
      const mood = document.querySelector("input[name='mood']");
      console.log(mood.value);
      const postEntryObject = {
        date: date.value,
        concept: concept.value,
        entry: entry.value,
        quote: quote.value,
        mood: mood.value,
      };

      createJournalPost(postEntryObject).then(response => {
        console.log("JSON Response: ", response);
        showEntryList();
        // showJournalEntryForm();
      });
      
    }
});

eventElement.addEventListener("click", event => {
  if(event.target.id.startsWith("delete")){
    event.preventDefault();
    const entryId = event.target.id.split("--")[1];
    console.log("delete journal entry", entryId)
    deleteEntry(entryId)
    .then(response => {
      console.log(response)
      showEntryList();
    })
  }
})

//   ***  Click Event Handler for Journal Entry cancel 
eventElement.addEventListener("click", event => {
    console.log(event);
    if (event.target.id === "cancel") {
      console.log("cancel")
      // showJournalEntryForm();
    }
  }); 

//   ***  Function renders the NavBar to the DOM at #navbar  ***   //
const showNavBar =() =>{
  document.querySelector("#navbar").innerHTML = NavBar();
}


//   ***  Function renders Journal Entry Form to DOM at .journalForm  ***   //
// const showJournalEntryForm =() => {
//   const journalFormDOMTarget =document.querySelector(".journalForm");
//   journalFormDOMTarget.innerHTML = JournalEntryForm();
// };

//   ***  Function renders Journal Entries to DOM at #entryLog  ***  //
const showEntryList = () => {
    const entryLog = document.querySelector("#entryLog");
    getJournalEntries().then((allEntries) => {
        entryLog.innerHTML = EntryList(allEntries);
    });
};

//   ***  Function initates DOM rendering sequence  ***   //
const startFountainPen = () => {
  showNavBar();
    // showJournalEntryForm();
    showEntryList();
}

//   ***  Start Daily Journal App  ***   //
startFountainPen();
