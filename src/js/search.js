const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function () {
  const searchText = document.getElementById('search-input').value;
  // perform search with searchText
  console.log("Search for '" + searchText + "' was performed.");
});
