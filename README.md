# Exercise: Band Fan Page

Exercise code for the lesson **Exercise: Band Fan Page** in the JavaScript in Depth course on [ask-codey.com](https://www.ask-codey.com).

The Midnight Owls, a made-up indie band, have a fan page with the band, a setlist and a newsletter sign-up. The one thing missing is the part fans care about most: where to see them next. The tour is in an array, and you'll write the JavaScript that puts it on the page: one line per upcoming show, sold-out shows marked, and a count at the top. Tests check the functions that work out the tour, and a checklist covers the page.

## What's here

- `index.html`, `styles.css`, `images/owl-logo.svg`: the page and its look. Ready to use.
- `tour-data.js`: the tour, as an array of shows. Ready to use.
- `setlist.js`: makes the **Show more** button under the setlist work. Ready to use.
- `tour.js`: three functions that work out the tour, with no page involved. For you to finish.
- `fan-page.js`: puts the tour on the page with the functions in `tour.js`. For you to finish.
- `tour.test.js`: tests for `tour.js`. You don't need to change this file.
- `package.json`: tells Node.js that this folder's files are modules, and how to run the tests. Ready to use.

The requirements are in the comment at the top of each file you finish, with examples.

## What to do

Open the folder in VS Code, then open its terminal with **Terminal > New Terminal**.

1. Finish `tour.js`, running the tests as you go.
2. Finish `fan-page.js`. Open the page with Live Preview (right-click `index.html` and choose **Show Preview**, or **Live Preview: Show Preview (External Browser)** from the Command Palette to use the browser's DevTools), and go through the checklist below. Press **F12** to see the Console when something doesn't work.

## Check your work

```bash
node --test
```

At first every test fails: that is expected. Each function you finish turns its tests green. A failing test's message says what it expected, for example *On 2026-11-01, five shows are still to come. Leave out the October shows, and sort the rest by date.*

## Checklist for the page

- [ ] *Loading tour dates...* is gone.
- [ ] The tour list shows five shows, in this order: Boise, Denver, Austin, Chicago, Nashville. The two October shows aren't there.
- [ ] Each line reads like *Nov 7: Boise, The Basement*.
- [ ] Denver and Chicago end with *(sold out)* and are grayed out. In DevTools (right-click the line, **Inspect**), their `<li>` has `class="sold-out"`.
- [ ] Above the list, it says *5 upcoming shows*.
- [ ] Change `TODAY` in `fan-page.js` to `'2026-12-01'`: the list shows Chicago and Nashville, and the count says *2 upcoming shows*. With `'2027-01-01'`, the list is empty and it says *No upcoming shows yet*. Change it back afterward.
- [ ] The Console shows no errors.
- [ ] Stretch goal: the Boise show is bold and starts with *Next up:*.

## Tips

- Work out `upcomingShows` in two steps: first keep the shows whose date is today or later, then put those in date order. `filter` makes a new array, so sorting it leaves `tourDates` alone.
- `show.date.slice(5, 7)` is the month, as text such as `'11'`. `Number('07')` is `7`, and an array starts counting at 0.
- `document.getElementById`, `remove()`, `document.createElement`, `textContent`, `classList.add` and `appendChild` do the page work, in about that order.
- A loop such as `for (const show of upcoming)` visits each show once. Make one `<li>` per trip around the loop.
- If the page shows nothing at all, check the Console first. An error in `tour.js` stops `fan-page.js` too, because it imports from it.

## Hand it in

When it works, put your solution in a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. You don't need Git: create the repo on GitHub, choose **Add file**, then **Upload files**, and upload everything in this folder. The lesson page shows each step, and the lesson *Put Your Code on GitHub* walks through every screen.
