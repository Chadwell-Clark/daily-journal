/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        quote: "In the final analysis, a booger to one is not a booger to all. -George Duke-",
        mood: "Partly Sunny"
    },
    {
        id: 2,
        date: "07/31/27",
        concept: "Spacetime manipulation",
        entry: "We talked about manipulation of spacetime modalities via electrochemical focus of inner quanta photonic emission.",
        quote: "It's all devistatingly true--except the bits that are lies --Douglas Adams--",
        mood: "Partly Sunny"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}