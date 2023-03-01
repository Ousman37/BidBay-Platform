// Retrieve the access token for the authenticated user
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJteV91c2VybmFtZSIsImVtYWlsIjoiZmlyc3QubGFzdEBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiY3JlZGl0cyI6MTAwNywid2lucyI6W10sImlhdCI6MTY3NzU5MDA0NH0.eANOA8J3NNqqLsc1ujRO-ae0BHlRNeK0YbOLSWwRefQ';

// Define the ID of the listing to retrieve
const listingId = '778c0ab3-5659-43ac-8451-6d931f9e656c';

// Make the API request to retrieve the listing
fetch(
  `https://api.noroff.dev/api/v1/auction/listings/${listingId}?_bids=true&_seller=true`,
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
  .then(response => response.json())
  .then(data => {
    // Check if the authenticated user is the seller of the listing
    if (data.seller.email !== 'authenticated_user_email') {
      console.log('You are not authorized to view the bids for this listing.');
      return;
    }

    // Get the bids array from the API response
    const bids = data.bids;

    // Display the bids in a table format
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Create the table header
    const headerRow = document.createElement('tr');
    const bidderNameHeader = document.createElement('th');
    bidderNameHeader.textContent = 'Bidder Name';
    const bidAmountHeader = document.createElement('th');
    bidAmountHeader.textContent = 'Bid Amount';
    const bidDateHeader = document.createElement('th');
    bidDateHeader.textContent = 'Bid Date';
    headerRow.appendChild(bidderNameHeader);
    headerRow.appendChild(bidAmountHeader);
    headerRow.appendChild(bidDateHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create a table row for each bid
    bids.forEach(bid => {
      const row = document.createElement('tr');
      const bidderNameCell = document.createElement('td');
      bidderNameCell.textContent = bid.bidderName;
      const bidAmountCell = document.createElement('td');
      bidAmountCell.textContent = `$${bid.amount}`;
      const bidDateCell = document.createElement('td');
      bidDateCell.textContent = bid.created;
      row.appendChild(bidderNameCell);
      row.appendChild(bidAmountCell);
      row.appendChild(bidDateCell);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Add the table to the DOM
    const container = document.querySelector('.container');
    container.appendChild(table);
  })
  .catch(error => console.error(error));
