// Get the search icon and search form elements
var searchIcon = document.querySelector('.search');
var searchForm = document.querySelector('#search');

// Add click event listener to the search icon
searchIcon.addEventListener('click', function () {
  // Show the search form
  searchForm.style.display = 'block';
});

// Get the close button in the search form
var closeButton = searchForm.querySelector('.close');

// Add click event listener to the close button
closeButton.addEventListener('click', function () {
  // Hide the search form
  searchForm.style.display = 'none';
});
