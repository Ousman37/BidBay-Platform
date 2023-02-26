const searchButton = document.querySelector('#search-button');
const searchModal = document.querySelector('#search');
const searchForm = document.querySelector('#search-form');

// Show the search modal when the search button is clicked
searchButton.addEventListener('click', () => {
  searchModal.style.display = 'block';
});

// Hide the search modal when the close button is clicked
searchModal.addEventListener('click', event => {
  if (event.target.classList.contains('close')) {
    searchModal.style.display = 'none';
  }
});

// Hide the search modal when the user clicks outside the modal
window.addEventListener('click', event => {
  if (event.target === searchModal) {
    searchModal.style.display = 'none';
  }
});

// Submit the search form when the user types a query and presses enter
searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const query = searchForm.q.value.trim();
  if (query !== '') {
    window.location.href = `/search?q=${query}`;
  }
});
