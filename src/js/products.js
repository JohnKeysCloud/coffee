
import coffeeImage from '../assets/images/products/coffee.png';
import chaiImage from '../assets/images/products/chai.png';
import latteImage from '../assets/images/products/latte.png';
import cappuccinoImage from '../assets/images/products/cappuccino.png';
import greenTeaImage from '../assets/images/products/green-tea.png';
import hotCocoaImage from '../assets/images/products/hot-cocoa.png';
import bobaTeaImage from '../assets/images/products/boba-tea.png';
import matcha from '../assets/images/products/matcha.png';

const products = {
  coffee: {
    textContent: 'coffee',
    productImage: coffeeImage,
    price: 3.99,
  },
  chai: {
    textContent: 'chai',
    productImage: chaiImage,
    price: 3.99
  },
  latte: {
    textContent: 'latte',
    productImage: latteImage,
    price: 4.99
  },
  cappuccino: {
    textContent: 'cappuccino',
    productImage: cappuccinoImage,
    price: 4.99
  },
  matcha: {
    textContent: 'matcha latte',
    productImage: matcha,
    price: 4.99
  },
  bobaTea: {
    textContent: 'boba tea',
    productImage: bobaTeaImage,
    price: 4.99
  },
  greenTea: {
    textContent: 'green tea',
    productImage: greenTeaImage,
    price: 2.99
  },
  hotCocoa: {
    textContent: 'hot cocoa',
    productImage: hotCocoaImage,
    price: 3.99
  }
};

function createProductGrid() {
  const productGrid = document.createElement('ul');
  productGrid.classList.add('product-grid');

  for (const productKey in products) {
    const product = products[productKey];

    const productCardWrapper = document.createElement('li');
    productCardWrapper.classList.add('product-card-wrapper');

    const productCard = document.createElement('article');
    productCard.classList.add('product-card');

    const itemImage = document.createElement('img');
    itemImage.classList.add('product-image');
    itemImage.setAttribute('src', product.productImage);
    itemImage.setAttribute('alt', product.textContent);

    const productHeader = document.createElement('h3');
    productHeader.classList.add('product-header');
    productHeader.textContent = product.textContent;

    const price = document.createElement('p');
    price.classList.add('product-price');
    price.textContent = `$${product.price}`;

    productCard.append(productHeader, itemImage, price);
    productCardWrapper.appendChild(productCard);
    productGrid.appendChild(productCardWrapper);
  }

  return productGrid;
}

export default createProductGrid;