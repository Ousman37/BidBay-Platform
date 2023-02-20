function showBids(listingId) {
  // Make an AJAX request to retrieve the bids for the given listing ID
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/bids?listingId=' + listingId);
  xhr.onload = function () {
    if (xhr.status === 200) {
      // Parse the JSON response and add the bids to the table
      var bids = JSON.parse(xhr.responseText);
      var tableBody = document.querySelector('#bidsTable tbody');
      tableBody.innerHTML = '';
      bids.forEach(function (bid) {
        var row = document.createElement('tr');
        row.innerHTML =
          '<td>' +
          bid.bidder +
          '</td>' +
          '<td>' +
          bid.amount +
          '</td>' +
          '<td>' +
          bid.date +
          '</td>';
        tableBody.appendChild(row);
      });
    }
  };
  xhr.send();
}
