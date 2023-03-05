window.addEventListener('load', () => {
  // Get the listing ID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const listingId = urlParams.get('id');
  console.log('Listing ID:', listingId);
  console.log('URL:', window.location.href);

  // Define the function to get bids for a specific listing
  async function getBidsForListing(listingId) {
  const bidListElement = document.querySelector('#bid-list');
  console.log('Bid list element:', bidListElement);
  const url = `https://api.noroff.dev/api/v1/auction/listings/${listingId}?_counts/bids=true`;
  await fetch(url)
  .then(response => response.json())
  .then(data => {
  //if (data && data.results) {
    console.log("data" ,data)
  const bids = data.bids;
  // console.log('Count bids:', bids);
  
  // Generate HTML elements for each bid
  bidListElement.innerHTML = '';
  bids?.forEach(bid => {
  const bidRowElement = document.createElement('tr');
  bidRowElement.innerHTML = `
  
  
  <td class="text-white">${new Date(
  bid.created
  ).toLocaleString()}</td>
  `;
  bidListElement.appendChild(bidRowElement);
  });
  // } else {
  //<td class='text-white'>${bid.bidderName}</td>;
  //<td class='text-white'>$${bid.amount.toFixed(2)}</td>;
  // console.error('Unexpected response from API:', data);
  // }
  })
  .catch(error =>
  console.error('Error fetching data from the API:', error)
  );
  }
  
  // Call the function to get bids for the listing
  getBidsForListing(listingId);
  });

