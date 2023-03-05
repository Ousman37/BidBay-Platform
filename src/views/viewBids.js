window.addEventListener('load', () => {
  // Get the listing ID from the URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const listingId = urlParams.get('listingId');
  console.log('Listing ID:', listingId);
  console.log('URL:', window.location.href);

  // Define the function to get bids for a specific listing
  async function getBidsForListing(listingId) {
  const bidListElement = document.querySelector('#bids-list');
  console.log('Bid list element:', bidListElement);
  const url = `https://api.noroff.dev/api/v1/auction/listings`;
  await fetch(url)
  .then(response => response.json())
  .then(data => {
  //if (data && data.results) {
    console.log("data" ,data)
  const bids = data.bids;
  // console.log('Count bids:', bids);

  // Generate HTML elements for each bid
  const tableElement  = document.createElement('table');
  tableElement.innerHTML =   `<thead>
  <tr>
    <th>ID</th>
    <th>Bid Amount</th>
    <th>Updated</th>
  </tr>
</thead>
`;
  data?.forEach(bid => {
  const bidRowElement = document.createElement('tr');
  bidRowElement.innerHTML = `
  <td class='text-white'>${bid.id}</td>
  <td class='text-white'>${bid._count.bids}</td>
  <td class="text-white">${new Date(
  bid.updated
  ).toLocaleString()}</td>
  `;
  tableElement.appendChild(bidRowElement);
  // bidListElement.appendChild(bidRowElement);
  });
  bidListElement.appendChild(tableElement);

  })
  .catch(error =>
  console.error('Error fetching data from the API:', error)
  );
  }

  // Call the function to get bids for the listing
  getBidsForListing(listingId);
  });

