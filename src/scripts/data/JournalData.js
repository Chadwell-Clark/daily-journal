/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
// const journal = [
//     {
//         id: 1,
//         date: "07/24/2025",
//         concept: "HTML & CSS",
//         entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//         quote: "In the final analysis, a booger to one is not a booger to all. -George Duke-",
//         mood: "Partly Sunny"
//     },
//     {
//         id: 2,
//         date: "07/31/27",
//         concept: "Spacetime manipulation",
//         entry: "We talked about manipulation of spacetime modalities via electrochemical crystalization pressure transference of inner quanta photonic emission.",
//         quote: "It's all devistatingly true--except the bits that are lies --Douglas Adams--",
//         mood: "Sunny"
//     },
//     {
//         id: 3,
//         date: "08/14/03",
//         concept: "Flexbox",
//         entry: "Found that the best kind of box is flexbox, cause it flexes. Then some one grid boxed me into oblivion.",
//         quote: "C'mon man. Cornpop was a bad dude. --Joe Biden--",
//         mood: "Partly Cloudy"
//     },
//     {
//         id: 4,
//         date: "11/4/16",
//         concept: "Covfefe",
//         entry: "Shrugs shoulders",
//         quote: "Despite the negative press covfefe",
//         mood: "Gloom and Doom"
//     }
// ]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
// export const getJournalEntries = () => {
//     const sortedByDate = journal.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }

export const getJournalEntries = () => {

  return fetch("http://localhost:8088/journalEntries")
  .then(response => response.json())
  // .then(data => {console.log(data);
  //   })
  .then(data => {
  const sortedByDate = data.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
  })
};
