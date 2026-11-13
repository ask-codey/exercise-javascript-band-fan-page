// Puts the tour on the page, using the functions in tour.js. For you to finish.
//
// Requirements:
// - The tour list (#tour-list) starts with a "Loading tour dates..." item (#tour-loading).
//   Take it off the page.
// - For every upcoming show, in order, add an <li> to #tour-list. Its text is formatShow(show).
// - A sold-out show's <li> also gets the class sold-out (styles.css already grays it out).
// - #show-count shows showCountText(...) for the number of upcoming shows.
//
// Stretch goal: give the <li> of the very next show the class next-show as well.

import { tourDates } from './tour-data.js';
import { upcomingShows, formatShow, showCountText } from './tour.js';

// The fan page pretends today is November 1, 2026, so your page matches the checklist in
// README.md. Change it to another date to see the list change.
const TODAY = '2026-11-01';

const upcoming = upcomingShows(tourDates, TODAY);

// TODO: find the elements you need, then build the tour list as described at the top of this file.
