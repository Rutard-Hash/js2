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
};

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
