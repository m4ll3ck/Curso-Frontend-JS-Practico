const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleAsideCarrito);

function toggleDesktopMenu() {
  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

  if(!isAsideCarritoClosed){
    asideCarrito.classList.toggle('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

  if(!isAsideCarritoClosed){
    asideCarrito.classList.toggle('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleAsideCarrito() {
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if(!isDesktopMenuClosed){
    desktopMenu.classList.toggle('inactive');
  }

  if(!isMobileMenuClosed){
    mobileMenu.classList.toggle('inactive');
  }

  asideCarrito.classList.toggle('inactive');
}
