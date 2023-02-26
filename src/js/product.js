//JavaScript to generate product cards:
const productsContainer = document.getElementById('products');

// Let's take the accessToken
const authToken = localStorage.getItem('authLogin');

const options = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authToken}`,
};

const ListingsURL = 'https://api.noroff.dev/api/v1/auction/listings';

// Just Send the new Product to the API...
fetch(`${ListingsURL}`, {
  method: 'GET',
  headers: options,
})
  .then(response => response.json())
  .then(res => {
    res.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'col-md-4';
      productCard.innerHTML = `<div class="card mb-4 box-shadow"> <img class="card-img-product" src="${product.media[0]}" alt="${product.title}"> <div class="card-body"> <h5 class="card-title">${product.title}</h5> <p class="card-text">${product.description}</p> <div class="d-flex justify-content-between align-items-center"> <a href="/src/public/bid_listing.html?id=${product.id}" class="btn btn-sm btn-outline-secondary">Add Bid Now</a> <small class="text-muted">${product._count.bids}</small> </div> </div> </div> `;
      productsContainer.appendChild(productCard);
    });
  })
  .catch(err => {
    console.log('Error -- ', err.message);
  });

function enlargeImage(event) {
  const card = event.target.closest('.card');
  const image = card.querySelector('.card-img-top');
  image.style.transform = 'scale(1.2)';
}

function addBidNow(event) {
  const card = event.target.closest('.card');
  const title = card.querySelector('.card-title').textContent;
  const price = card.querySelector('.text-muted').textContent;
  console.log(`Added ${title} Bid Now for ${price}`);
}
