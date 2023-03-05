const productsContainer = document.getElementById('products');
const searchInput = document.getElementById('search');

// Let's take the accessToken
const authToken = localStorage.getItem('authLogin');
const checkUser = localStorage.getItem('authCheck');

const options = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${authToken}`,
};

const ListingsURL = 'https://api.noroff.dev/api/v1/auction/listings';

// Fetch data and create product cards
function createProductCards(products) {
  productsContainer.innerHTML = '';

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'col-md-4';
    productCard.innerHTML = `
      <div class="card mb-4 box-shadow">
        <img class="card-img-product" src="${product.media[0]}" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <a href="/src/public/bid_listing.html?id=${product.id}" class="btn btn-sm btn-outline-secondary">Add Bid Now</a>
<<<<<<< HEAD
            <a href="/src/public/view-Bids.html?id=${product.id}" class="btn btn-sm btn-outline-secondary">View Bids</a>
            
=======
            <a href="/src/public/view-bids.html" class="btn btn-sm btn-outline-secondary">View Now</a>
>>>>>>> development
          </div>
        </div>
      </div>
    `;
    productsContainer.appendChild(productCard);
  });
}

const search = document.getElementById('search-product');
// Get all products from API and create product cards
function getAllProducts(event) {
  const searchTerm = event ? event.target.value.toLowerCase() : '';
  // Check if user is logged in
  if (checkUser === 'true') {
    // Retrieve user ID from authToken or another source
    const userId = getUserIdFromAuthToken(authToken);

    // Fetch only listings created by the logged-in user
    fetch(`${ListingsURL}?sellerId=${userId}`, {
      method: 'GET',
      headers: options,
    })
      .then(response => response.json())
      .then(res => {
        if(searchTerm)
        {
          const filteredProducts = res.filter(product => {
            return (
              product.title.toLowerCase().includes(searchTerm)
            );
          });
          createProductCards(filteredProducts);
        }
        else{
          createProductCards(res);
        }
      
      })
      .catch(err => {
        console.log('Error -- ', err.message);
      });
  } else {
    // Fetch all listings for unregistered users

    const searchPhrase = search.value;

    fetch(`${ListingsURL}`, {
      method: 'GET',
      headers: options,
    })
      .then(response => response.json())

      .then(res => {
<<<<<<< HEAD
        if (!searchPhrase === '') {
          createProductCards(res);
        } else {
          const searchedData = res.filter(item => {
            return item.title
              .toLowerCase()
              .includes(searchPhrase.toLowerCase());
          });
          createProductCards(searchedData);
        }
=======
        if(searchTerm)
        {
          const filteredProducts = res.filter(product => {
            return (
              product.title.toLowerCase().includes(searchTerm)
            );
          });
          createProductCards(filteredProducts);
        }
        else{
          createProductCards(res);
        }
      
>>>>>>> development
      })
      .catch(err => {
        console.log('Error -- ', err.message);
      });
  }
}

<<<<<<< HEAD
search.addEventListener('keydown', () => {
  getAllProducts();
});
=======
// // Search products based on input value
// function searchProducts(event) {
//   const searchTerm = event.target.value.toLowerCase();
//   fetch(`${ListingsURL}`, {
//     method: 'GET',
//     headers: options,
//   })
//     .then(response => response.json())
//     .then(res => {
//       const filteredProducts = res.filter(product => {
//         return (
//           product.title.toLowerCase().includes(searchTerm) ||
//           product.description.toLowerCase().includes(searchTerm)
//         );
//       });
//       createProductCards(filteredProducts);
//     })
//     .catch(err => {
//       console.log('Error -- ', err.message);
//     });
// }

// // Add event listeners
searchInput.addEventListener('input', getAllProducts);

// // Create product cards on page load
//
>>>>>>> development

getAllProducts();
