// Tests for tour.js. Run them with: node --test
// They call your functions with shows from the tour and check what comes back.
// You don't need to change this file.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { upcomingShows, formatShow, showCountText } from './tour.js';
import { tourDates } from './tour-data.js';

const boise = { date: '2026-11-07', city: 'Boise', venue: 'The Basement', soldOut: false };
const chicago = { date: '2026-12-05', city: 'Chicago', venue: 'Lakeside Ballroom', soldOut: true };

// The cities of a list of shows, in order, so a failing test's message is short.
const cities = (shows) => shows.map((show) => show.city);

test('upcomingShows: keeps the shows still to come, soonest first', () => {
  const upcoming = upcomingShows(tourDates, '2026-11-01');
  assert.deepEqual(cities(upcoming), ['Boise', 'Denver', 'Austin', 'Chicago', 'Nashville'],
    'On 2026-11-01, five shows are still to come. Leave out the October shows, and sort the rest by date.');
});

test('upcomingShows: a show on today\'s date still counts', () => {
  assert.deepEqual(cities(upcomingShows(tourDates, '2026-11-14')), ['Denver', 'Austin', 'Chicago', 'Nashville'],
    'On 2026-11-14 the Denver show is tonight, so it is still upcoming: keep shows whose date is today or later.');
});

test('upcomingShows: after the last show, nothing is left', () => {
  assert.deepEqual(cities(upcomingShows(tourDates, '2026-12-01')), ['Chicago', 'Nashville'],
    'On 2026-12-01, only Chicago and Nashville are still to come.');
  assert.deepEqual(upcomingShows(tourDates, '2027-01-01'), [],
    'After the tour is over, upcomingShows returns an empty array.');
});

test('upcomingShows: leaves the tour as it was', () => {
  const before = cities(tourDates);
  const upcoming = upcomingShows(tourDates, '2026-11-01');
  assert.equal(upcoming.length, 5, 'On 2026-11-01, five shows are still to come.');
  assert.deepEqual(cities(tourDates), before,
    'upcomingShows changed the tour array it was given. Work on a new array (filter makes one), and sort that.');
});

test('formatShow: month, day, city and venue', () => {
  assert.equal(formatShow(boise), 'Nov 7: Boise, The Basement');
  assert.equal(formatShow({ date: '2026-11-21', city: 'Austin', venue: 'The Night Owl Club', soldOut: false }),
    'Nov 21: Austin, The Night Owl Club');
  assert.equal(formatShow({ date: '2027-01-09', city: 'Tucson', venue: 'Desert Sky Hall', soldOut: false }),
    'Jan 9: Tucson, Desert Sky Hall', 'January is month 01, and MONTHS[0] is Jan.');
});

test('formatShow: a sold-out show says so', () => {
  assert.equal(formatShow(chicago), 'Dec 5: Chicago, Lakeside Ballroom (sold out)');
});

test('showCountText: none, one and many', () => {
  assert.equal(showCountText(0), 'No upcoming shows yet');
  assert.equal(showCountText(1), '1 upcoming show');
  assert.equal(showCountText(5), '5 upcoming shows');
});
