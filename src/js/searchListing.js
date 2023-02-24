const queryInput = document.getElementById('query');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();

  const query = queryInput.value;

  // Send the search query to the server
  fetch(`/api/listings?q=${query}`)
    .then((response) => response.json())
    // eslint-disable-next-line no-unused-vars
    .then((data) => {
      // Display the search results
    });
});
