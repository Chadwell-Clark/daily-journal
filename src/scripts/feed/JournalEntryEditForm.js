//   ***  Function that returns Journal Entry form for insertion in the DOM  ***   //

export const JournalEntryEditForm = () => {
  return `
<form action="">
              <div class="date-filter">
                <fieldset class="formFieldset">
                  <label for="date">Date of Entry</label>
                  <input type="date" name="date" id="journalDate" />
                </fieldset>
              </div>
              <fieldset class="formFieldset">
                <label for="concepts" class="concepts">Journal Concepts</label>
                <input
                type="text"
                name="concepts"
                id="journalConcepts"
                class="text"
                />
              </fieldset>
              <fieldset class="formFieldset">
                <label for="entry">Journal Entry</label>
                <textarea
                id="journalEntry"
                name="entry"
                rows="6"
                cols="40"
                class="text"
                ></textarea>
              </fieldset>
              <fieldset class="formFieldset">
                <label for="quote">Today's Quote</label>
                <input type="text" name="quote" id="journalQuote" class="text" />
              </fieldset>
              <fieldset class="formFieldset">
                <label for="journalMood">Mood o' Day</label>
                <div class="radio__mood">
                  <input type="radio" name="mood" class="sunny" id="sunny" value="sunny" >
                  <label for="sunny" class="sunny">Sunny</label>
                  <input type="radio" name="mood" class="sunny" id="partlySunny" value="partlySunny" >
                  <label for="partlySunny" class="partlySunny">Partly Sunny</label>
                  <input type="radio" name="mood" class="partlyCloudy" id="partlyCloudy" value="partlyCloudy" >
                  <label for="partlyCloudy" class="partlyCloudy">Partly Cloudy</label>
                  <input type="radio" name="mood" class="overcast" id="overcast" value="overcast">
                  <label for="overcast" class="overcast">Overcast</label>
                  <input type="radio" name="mood" class="mordor" id="mordor" value="mordor">
                  <label for="mordor" class="mordor">Mordor</label>
                </div>
              </fieldset>
              <fieldset class="formFieldset">
                <label for="quoteofDay">Quote of the Day</label>
                <textarea
                id="qod"
                name="quoteOfDay"
                rows="3"
                cols="40"
                class="text"
                ></textarea>
              </fieldset>
              <section id="navbar">
                <!-- <nav class="navbar">
                  <button id="addSaveEntry" class="addEntry">Save Entry</button>
                  <button id="calendar" class="calendar">Calendar</button>
                  <button id="cancelDelete" class="cancelDelete">Cancel Entry</button>
                </nav> -->
              </section>
            </form>
          `;
};
