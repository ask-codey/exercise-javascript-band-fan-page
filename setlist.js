// The Show more button under the setlist. Ready to use: you don't need to change this file.
//
// Clicking the button shows the songs that have the class "hidden" (by taking the class away), and
// clicking it again hides them. The next chapter, Events: Making Pages Respond, explains
// addEventListener, the line that makes the button answer a click.

const showMoreButton = document.getElementById('show-more');
const extraSongs = document.querySelectorAll('#setlist .extra-song');

showMoreButton.addEventListener('click', () => {
  for (const song of extraSongs) {
    song.classList.toggle('hidden');
  }
  const showingAll = !extraSongs[0].classList.contains('hidden');
  showMoreButton.textContent = showingAll ? 'Show less' : 'Show more';
});
