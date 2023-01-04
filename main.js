const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamburguesa = document.querySelector('.menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleDesktopMenuMobile);
shoppingCar.addEventListener('click', toggleShoppingCar);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

/*Aparecer menu desktop*/ 
function toggleDesktopMenu() {
    const ShoppingCarOpen = shoppingCartContainer.classList.contains('inactive');
    console.log('click')
    desktopMenu.classList.toggle('inactive');   
    if (ShoppingCarOpen == false) {
        shoppingCartContainer.classList.toggle('inactive');
    }
   
}

/*Aparecer menu mobile*/ 
function toggleDesktopMenuMobile() {
    const ShoppingCarOpen = shoppingCartContainer.classList.contains('inactive');
    console.log('click hamburguesa')
    mobileMenu.classList.toggle('inactive');   
    if (ShoppingCarOpen == false) {
        shoppingCartContainer.classList.toggle('inactive');
    }

    closeProductDetailAside();
}

/*Aparecer carrito de compras*/

function toggleShoppingCar() {
    const mobileMenuOpen = mobileMenu.classList.contains('inactive');
    console.log('click carrito')
    shoppingCartContainer.classList.toggle('inactive'); 

    if (mobileMenuOpen == false) {
        mobileMenu.classList.toggle('inactive');
    }

    const desktopMenuOpen = desktopMenu.classList.contains('inactive');
    if (desktopMenuOpen == false) {
        desktopMenu.classList.toggle('inactive');
    } 

    if (!productDetail.classList.contains('inactive')) {
        productDetail.classList.add('inactive');
    }


}



/* Arreglo de producto que me da la base de datos*/

const productsList = [];
productsList.push(
{
    name: 'Hola',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Soy',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Un',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Producto',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'De',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Una',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Base de',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},
{
    name: 'Datos',
    price: 120,
    Imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
},

)

/* recoremos todos los productos*/
/*
<div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div>*/

for (product of productsList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const img = document.createElement('img');
    img.setAttribute('src', product.Imagen);
    img.addEventListener('click' , openProductDetailAside);


    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText= '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText= product.name;

    const productFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg' )

    productFigure.appendChild(productImgCard);
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productFigure);
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    

    cardsContainer.appendChild(productCard);
}


/* Abrir y cerrar el Producto Datail */
function openProductDetailAside() {

    productDetail.classList.remove('inactive'); 

    if (!shoppingCartContainer.classList.contains('inactive')) {
        shoppingCartContainer.classList.add('inactive');
    }
    

    
}

function closeProductDetailAside() {

    productDetail.classList.add('inactive');
    
}



