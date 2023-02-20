//JavaScript to generate product cards:

const products = [
  {
    name: 'luxury car',
    image: '/assets/img/pexels-car1.jpg',
    description:
      'A sleek and stylish car with advanced features for a smooth and comfortable .',
    price: '$19.99',
  },
  {
    name: 'luxury car',
    image: '/assets/img/pexels-car2.jpg',
    description:
      'A sleek and stylish car with advanced features for a smooth and comfortable .',
    price: '$29.99',
  },
  {
    name: 'luxury car',
    image: '/assets/img/pexels-car3.jpg',
    description:
      'A sleek and stylish car with advanced features for a smooth and comfortable .',
    price: '$39.99',
  },
  {
    name: 'luxury car',
    image: '/assets/img/pexels-car4.jpg',
    description:
      'A sleek and stylish car with advanced features for a smooth and comfortable .',
    price: '$49.99',
  },
  {
    name: 'luxury car',
    image: '/assets/img/pexels-car5.jpg',
    description:
      'A sleek and stylish car with advanced features for a smooth and comfortable .',
    price: '$59.99',
  },
  {
    name: 'House',
    image: '/assets/img/pexels-home3jpg.jpg',
    description:
      'A sleek and stylish car with advanced features for a smooth and comfortable .',
    price: '$69.99',
  },
  {
    name: 'House',
    image: '/assets/img/pexels-home3jpg.jpg',
    description:
      'Wrap yourself in warmth and comfort with our Cozy Home Blanket. Perfect for snuggling up on the couch or adding a pop of color to your bedding.',
    price: '$79.99',
  },
  {
    name: 'House',
    image: '/assets/img/pexels-home3jpg.jpg',
    description:
      'Wrap yourself in warmth and comfort with our Cozy Home Blanket. Perfect for snuggling up on the couch or adding a pop of color to your bedding.',
    price: '$89.99',
  },
  {
    name: 'House',
    image: '/assets/img/pexels-home4.jpg',
    description:
      'Wrap yourself in warmth and comfort with our Cozy Home Blanket. Perfect for snuggling up on the couch or adding a pop of color to your bedding.',
    price: '$99.99',
  },
  {
    name: 'Ally ring',
    image: '/assets/img/rings.jpg',
    description:
      'This beautiful ring is a stunning piece of jewelry that will make a great addition to any collection. Made from high-quality materials, it features a unique design that is sure to turn heads. Perfect for any occasion, this ring is a must-have for anyone who loves stylish accessories.',
    price: '$109.99',
  },
  {
    name: 'Product 11',
    image: '/assets/img/sam-pearce.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lectus at aliquet rhoncus.',
    price: '$119.99',
  },
  {
    name: 'Ally ring',
    image: '/assets/img/luisana.jpg',
    description:
      'This beautiful ring is a stunning piece of jewelry that will make a great addition to any collection. Made from high-quality materials, it features a unique design that is sure to turn heads. Perfect for any occasion, this ring is a must-have for anyone who loves stylish accessories.',
    price: '$129.99',
  },
  {
    name: 'IPhone 13 Pro',
    image: '/assets/img/product-3.jpg',
    description:
      'Experience the power and performance of the new iPhone 13 Pro. With its stunning Super Retina XDR display, A15 Bionic chip, and advanced camera system, you can capture your world in amazing detail and enjoy your favorite content like never before. And with 5G connectivity, you can stay connected wherever you go. Get your hands on the iPhone 13 Pro today!',
    price: '$139.99',
  },
  {
    name: ' luxury watch',
    image: '/assets/img/luxury_watch.jpg',
    description:
      'Indulge in the ultimate luxury with our exquisite timepiece. Crafted with precision and elegance, this watch features a sleek design that exudes sophistication. Made with the finest materials and expert craftsmanship, it is sure to last for generations to come. Elevate any outfit with this statement piece that combines style and function seamlessly. Experience the prestige of owning a truly exceptional luxury watch.',
    price: '$149.99',
  },
  {
    name: 'Camera',
    image: '/assets/img/pexels-math-90946.png',
    description:
      'just starting out, this camera is perfect for capturing memories that will last a lifetime. Do not miss out on this amazing camera!',
    price: '$159.99',
  },
  {
    name: 'Product 15',
    image: '/assets/img/pexels-math-90946.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lectus at aliquet rhoncus.',
    price: '$159.99',
  },
  {
    name: 'Product 15',
    image: '/assets/img/pexels-math-90946.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius lectus at aliquet rhoncus.',
    price: '$159.99',
  },
];


const productsContainer = document.getElementById('products');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'col-md-4';
  productCard.innerHTML = `<div class="card mb-4 box-shadow"> <img class="card-img-product" src="${product.image}" alt="${product.name}"> <div class="card-body"> <h5 class="card-title">${product.name}</h5> <p class="card-text">${product.description}</p> <div class="d-flex justify-content-between align-items-center"> <div class="btn-group"> <button type="button" class="btn btn-sm btn-outline-secondary">View</button> <button type="button" class="btn btn-sm btn-outline-secondary">Add Bid Now </button> </div> <small class="text-muted">${product.price}</small> </div> </div> </div> `;
  productsContainer.appendChild(productCard);
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
