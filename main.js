const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const asideCarrito = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleAsideCarrito);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isAsideCarritoClosed){
    asideCarrito.classList.toggle('inactive');
  }

  if(!isProductDetailClosed){
    productDetailContainer.classList.toggle('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isAsideCarritoClosed){
    asideCarrito.classList.toggle('inactive');
  }

  if(!isProductDetailClosed){
    productDetailContainer.classList.toggle('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleAsideCarrito() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if(!isDesktopMenuClosed){
    desktopMenu.classList.toggle('inactive');
  }

  if(!isMobileMenuClosed){
    mobileMenu.classList.toggle('inactive');
  }

  if(!isProductDetailClosed){
    productDetailContainer.classList.toggle('inactive');
  }

  asideCarrito.classList.toggle('inactive');
}

function openProductDetailAside(){
  asideCarrito.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productList.push({
  name: 'Monitor',
  price: 220,
  image: 'https://falabella.scene7.com/is/image/FalabellaPE/122993215_1?wid=800&hei=800&qlt=70'
})
productList.push({
  name: 'Graphic Card',
  price: 1220,
  image: 'https://cyccomputer.pe/49020-large_default/msi-geforce-rtx-4060-ti-8gb-gddr6-128bits-gaming-x-pn912-v515-022.jpg'
})

function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
