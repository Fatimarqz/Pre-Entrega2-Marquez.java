const btnCart = document.querySelector('.container-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () =>{
    containerCartProducts.classList.toggle('hidden-cart')
})

/*--------------*/

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

//  contenedores de productos
const productList = document.querySelector('.container.items');

// arreglos de productos
let allProducts = []

let valorTotal = document.querySelector('.total-pagar');

const containerProduct = document.querySelector('#contador-productos')

document.addEventListener('click', e =>{
    
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProducts = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allProducts.some(product => product.title === infoProducts.title)
        
        if(exits){
            const product = allProducts.map(product => {
                if(product.title === infoProducts.title){
                    product.quantity++;
                    return product
                } else {
                    return product
                }
            })
            allProducts = [...product];
        } else {
            allProducts = [...allProducts, infoProducts];
        }
        
        showHTML();
    }
})

rowProduct.addEventListener('click', e => {
    if(e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter(
            product => product.title !== title
            );

            console.log(allProducts)
            showHTML()
    }
})


// funsion html
const showHTML = () =>{
//limpiar html
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProdutos = 0;


    allProducts.forEach(product => {
    const containerProduct = document.createElement('div');
    containerProduct.classList.add('cart-products');

    containerProduct.innerHTML = `
    <div class="info-cart-product">
    <span class="cantidad-producto-carrito">${product.quantity}</span>
    <p class="titulo.producto-carrito">${product.title}</p>
    <span class="precio-producto-carrito">${product.price}</span>
</div>
<img class="icon-close" src="./assets/img/icono-x.png" alt="">
`;
    
    rowProduct.append(containerProduct)

    total
     = total + parseInt(product.quantity * product.price.slice(1));
totalOfProdutos = totalOfProdutos + product.quantity;

});

valorTotal.innerText = `$${total}`
totalOfProdutos.innerText = totalOfProdutos;
};
