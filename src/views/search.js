// const url = 'https://api.noroff.dev/api/v1/auction/listings';

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const currentDate = data.date;
//     console.log('Current date:', currentDate);
//   })
//   .catch(error => console.error('Error fetching data from the API:', error));


function searchListings(searchTerm) {
  const url = 'https://api.noroff.dev/api/v1/auction/listings';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const listings = data.results;
      const filteredListings = listings.filter(listing => {
        return listing.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      console.log(filteredListings);
    })
    .catch(error => console.error('Error fetching data from the API:', error));
}

// Example usage
searchListings('camera');
