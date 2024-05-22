const addProduct = () => {
  const productNameD = document.getElementById("productName");
  const productPriceD = document.getElementById("productPrice");

  const productName = productNameD.value;
  const productPrice = productPriceD.value;
  console.log(productName, productPrice);
  displayProducts(productName, productPrice);
  productNameD.value = "";
  productPriceD.value = "";
  saveToLocalStorage(productName, productPrice);
};

const displayProducts = (productName, productPrice) => {
  const productContainer = document.getElementById("productContainer");
  const li = document.createElement("li");
  li.innerText = `${productName} : ${productPrice}`;
  productContainer.appendChild(li);
};

const localStoragecart = () => {
  let cart = {};
  const localStorages = localStorage.getItem("cart");
  if (localStorages) {
    cart = JSON.parse(localStorages);
  }
  return cart;
};

const saveToLocalStorage = (productName, productPrice) => {
  const cart = localStoragecart();
  cart[productName] = productPrice;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
  console.log(cart);
};

const displayLocalStorage = () => {
  const cart = localStoragecart();
  for (const productName in cart) {
    const productPrice = cart[productName];
    displayProducts(productName, productPrice);
  }
};

displayLocalStorage();
