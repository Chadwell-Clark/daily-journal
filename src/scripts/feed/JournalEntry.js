/*
*  Purpose : To render a single joournal entry as an 
*            HTML representation of the data 
*/          
 export const JournalEntryComponent = (entry) => {
     return (`
        <section id="entry--${entry.id}" class="journalEntry">
        <h2 class ="journalEntry__title">${entry.concept}</h2>
        <div>${entry.date}</div>
        <div>${entry.entry}</div>
        <div>${entry.mood}</div>
        <div>${entry.quote}</div>
        </section>
     `)
 };