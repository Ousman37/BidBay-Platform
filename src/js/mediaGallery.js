const form = document.querySelector('form');
// const productList = document.querySelector('#product-list');

form.addEventListener('submit', (event) => {
   event.preventDefault();

   alert("Product Adding");

   const title = document.querySelector('#title').value;
   const deadline = document.querySelector('#deadline').value;
   const media = document.querySelector('#media').value;
   const description = document.querySelector('#description').value;

   const product = {
        title,
        deadline,
        media,
        description,
   };

   console.log('Product -- ', product);

   // save into the product to localStorage..
   const products = JSON.parse(localStorage.getItem('products') || '[]');
   products.push(product);
   localStorage.setItem('products', JSON.stringify(products));

//    const productEl = document.createElement('div');
//    productEl.innerHTML = `
//         <h3>${product.title}</h3>
//         <p>${product.date}</p>
//         <img src="${product.image}" alt="${product.title}">
//     `;
//     productList.appendChild(productEl);
    form.reset();
});