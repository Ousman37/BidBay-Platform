const url = 'https://api.noroff.dev/api/v1/auction/listings';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const currentDate = data.date;
    console.log('Current date:', currentDate);
  })
  .catch(error => console.error('Error fetching data from the API:', error));
