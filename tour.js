// Working out the tour: which shows are still to come, and the words for each one.
// These functions only work with data, with no page involved, so the tests can check them.
// For you to finish.
//
// A show looks like this (tour-data.js has the whole tour):
//   { date: '2026-11-07', city: 'Boise', venue: 'The Basement', soldOut: false }
//
// Requirements:
//
// - upcomingShows(shows, today) returns a new array of the shows on today's date or later, in date
//   order, soonest first. It leaves the array it was given as it was. No shows to come gives [].
//   Dates are text written year-month-day, so they compare the same way as words in a dictionary:
//   '2026-11-07' < '2026-11-14' is true, and so is '2026-10-24' < '2026-11-01'.
//     upcomingShows(tourDates, '2026-11-01')  ->  the Boise, Denver, Austin, Chicago and Nashville
//                                                 shows, in that order
//     upcomingShows(tourDates, '2027-01-01')  ->  []
//
// - formatShow(show) returns the line the page shows for one show: the short month name, the day
//   (with no 0 in front), a colon, the city, a comma and the venue. A sold-out show ends with
//   ' (sold out)', so the words say it, not only the gray color.
//     formatShow({ date: '2026-11-07', city: 'Boise', venue: 'The Basement', soldOut: false })
//       ->  'Nov 7: Boise, The Basement'
//     formatShow({ date: '2026-12-05', city: 'Chicago', venue: 'Lakeside Ballroom', soldOut: true })
//       ->  'Dec 5: Chicago, Lakeside Ballroom (sold out)'
//
// - showCountText(count) describes how many shows are still to come:
//     showCountText(0)  ->  'No upcoming shows yet'
//     showCountText(1)  ->  '1 upcoming show'
//     showCountText(5)  ->  '5 upcoming shows'

// The short month names, in order: MONTHS[0] is 'Jan' and MONTHS[11] is 'Dec'.
export const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function upcomingShows(shows, today) {
  return [];
}

export function formatShow(show) {
  return '';
}

export function showCountText(count) {
  return '';
}
