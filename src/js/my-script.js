// Mock data representing the bids made on the user's listing
const bids = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 },
];

// Function to display the bids in the HTML page
function displayBids() {
  const bidsContainer = document.getElementById('bids-container');
  bidsContainer.innerHTML = '';
  bids.forEach(bid => {
    const bidElement = document.createElement('div');
    bidElement.innerText = `Bid ID: ${bid.id} | Amount: ${bid.amount}`;
    bidsContainer.appendChild(bidElement);
  });
}

// Call the displayBids() function to display the bids when the page is loaded
displayBids();
