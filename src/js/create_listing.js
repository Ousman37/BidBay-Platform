// const form = document.querySelector('form');
// // const productList = document.querySelector('#product-list');

// const createListingURL = 'https://api.noroff.dev/api/v1/auction/listings';

// form.addEventListener('submit', (event) => {
//    event.preventDefault();

//    alert("Product Adding");

//    const title = document.querySelector('#title').value;
//    const deadline = document.querySelector('#deadline').value;
//    const media1 = document.querySelector('#media').value;
//    const description = document.querySelector('#description').value;

//    const product = {
//         title,
//         deadline,
//         media1,
//         description,
//    };

//    console.log('Product -- ', product);

//    // save into the product to localStorage..
//    const products = JSON.parse(localStorage.getItem('products') || '[]');
//    products.push(product);
//    localStorage.setItem('products', JSON.stringify(products));

//   // Let's take the accessToken
//   const authToken = localStorage.getItem('authLogin');

//   const options = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${authToken}`,
//   };

//   const now = new Date();
//   const createdAt = now.toISOString(); // e.g. "2023-02-22T09:21:47.123Z"

//   // Making the Media with the right way..
//   const mediaInput = document.querySelector('#media').value;
//   const media = mediaInput.split(',').map(url => url.trim());

//    // Just Send the new Product to the API...
//    fetch(`${createListingURL}`, {
//     method: 'POST',
//     headers: options,
//     body: JSON.stringify({
//       id: "string",
//       title,
//       description,
//       tags: ["string"],
//       media,
//       created: new Date().toISOString(),
//       updated: new Date().toISOString(),
//       endsAt: deadline,
//       _count: {
//         bids: 0
//       }
//    }),
//   })
//   .then((response) => response.json())
//   .then(res => {
//     console.log("Response -- ", res);
//   })
//   .catch((err) => {
//     console.log("Error -- ", err.message);
//   });

//     form.reset();
// });

const form = document.querySelector('form');
const createListingURL = 'https://api.noroff.dev/api/v1/auction/listings';

form.addEventListener('submit', event => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const deadline = document.querySelector('#deadline').value;
  const media1 = document.querySelector('#media').value;
  const description = document.querySelector('#description').value;

  const product = {
    title,
    deadline,
    media1,
    description,
  };

  console.log('Product -- ', product);

  // save into the product to localStorage..
  const products = JSON.parse(localStorage.getItem('products') || '[]');
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));

  // Let's take the accessToken
  const authToken = localStorage.getItem('authLogin');

  const options = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };

  const now = new Date();
  const createdAt = now.toISOString(); // e.g. "2023-02-22T09:21:47.123Z"

  // Making the Media with the right way..
  const mediaInput = document.querySelector('#media').value;
  const media = mediaInput.split(',').map(url => url.trim());

  // Send the new Product to the API...
  fetch(`${createListingURL}`, {
    method: 'POST',
    headers: options,
    body: JSON.stringify({
      id: 'string',
      title,
      description,
      tags: ['string'],
      media,
      created: new Date().toISOString(),
      updated: new Date().toISOString(),
      endsAt: deadline,
      _count: {
        bids: 0,
      },
    }),
  })
    .then(response => response.json())
    .then(res => {
      console.log('Response -- ', res);
      const messageDiv = document.createElement('div');
      messageDiv.innerHTML = 'Listing created successfully!';
      messageDiv.classList.add('success-message');
      form.appendChild(messageDiv);
    })
    .catch(err => {
      console.log('Error -- ', err.message);
    })
    .finally(() => {
      form.reset();
    });
});
