export const JournalEntryForm = () => {
    return `
<form action="">
            <div class="date-filter">
            <fieldset class="formFieldset">
              <label for="date">Date of Entry</label>
              <input type="date" name="date" id="journalDate" />
            </fieldset>
            <fieldset class="formFieldset">
              <div>
              <label for="filterBy"></label>
              <select name="filterBy" id="filterBy">
                <option value="default">Filter By ...&nbsp&nbsp&nbsp&nbsp</option>
                <option value="date">Date</option>
                <!-- <option value="mood">Mood</option> -->
                <option value="concept">Concept</option>
                <option value="random">Random</option>
              </select>
              </div>
              <div>
              <label for="moodFilter"></label>
              <select name="moodFilter" id="moodFilter">
                <option value="default">Filter by Mood</option>
                <option value="sunny">Sunny</option>
                <option value="partlySunny">Partly Sunny</option>
                <option value="partlyCloudy">Partly Cloudy</option>
                <option value="overcast">Overcast</option>
                <option value="mordor">Mordor</option>
              </select>
              </div>
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
              <div class="mood__buttons">
                <button type="submit" id="sunny" class="sunny mood">Sunny</button>
                <button type="submit" id="partly-sunny" class="partly-sunny mood">
                  Partly Sunny
                </button>
                <button type="submit" id="partly-cloudy" class="partly-cloudy mood">
                  Partly Cloudy
                </button>
                <button type="submit" id="overcast" class="overcast mood">Overcast</button>
                <button type="submit" id="mordor" class="mordor mood">Mordor</button>
              </div>
              <!-- <select class="arrows" name="journalMood" id="journalMood">
                <option value="Sunny">Sunny</option>
                <option value="Partly Sunny">Partly Sunny</option>
                <option value="Partly Cloudy">Partly Cloudy</option>
                <option value="Overcast">Overcast</option>
                <option value="Gloom and Doom">Gloom and Doom</option>
              </select> -->
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
            <!-- <button>Record Journal Entry</button> -->
          </form>
          `;

};