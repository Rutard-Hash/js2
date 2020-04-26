class ProductList {
  constructor(container = ".products") {
    this.totalPrice = null;
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
    this._render();
  }
    _fetchProducts() {
      this.goods = [
        {id: 1, title: 'Notebook', price: 20000},
        {id: 2, title: 'Mouse', price: 1500},
        {id: 3, title: 'Keyboard', price: 5000},
        {id: 4, title: 'Gamepad', price: 4500},
      ]
    }
    _render() {
    const block = document.querySelector(this.container);

    for (let product of this.goods) {
      const productObject = new ProductItem(product);
      this.totalPrice += productObject.price;
      this.allProducts.push(productObject);
      block.insertAdjacentHTML("beforeend", productObject.render());

    }
    }
}
class ProductItem {
  constructor(product, img = "https://placehold.it/150x30") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Img">
                <div class="description">
                    <h3 class="product__title">${this.title}</h3>
                    <p class="product__price">${this.price}</p>
                    <button class="by-btn">Добавить в корзину</button>
                </div>
           </div>`
  }
}
class basket {
  constructor() {
    this.totalSum = null;
    this.goods = [];
    this._render();

  }
}

class basketItem {
  constructor(product) {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
  }
  render() {
    return ``
  }
}
new ProductList();
/*
const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const prod = document.querySelector(".products");
const renderProduct = (title = "КрЯ", price = "FREE") => {
  return `<div class="product-item">
            <h3 class="product__title">${title}</h3>
            <p class="product__price">${price} &#8364;</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
}

const renderProducts = (list) => {
  // const productList = list.map((good) => {
  //   return renderProduct(good.title, good.price);
  // });
  const productList = [];
  list.forEach(good => {
    productList.push(renderProduct(good.title, good.price));
    prod.insertAdjacentHTML("afterbegin", productList[productList.length - 1]);
  });
};

renderProducts(products);
*/