const catalogo1 = [
    {
        id: 1,
        nombre: "SMOK G PRIV 4",
        link_producto: "../pages/products.html",
        link_imagen: "https://www.vapewholesaleglobal.com/cdn/shop/products/SMOK-G-PRIV-4-Kit-with-TFV18-MINI-Tank-685732.png?v=1662610615&width=1024",
        },
    
    {
        id: 2,
        nombre: "VAPORESSO GEN 160",
        link_producto: "https://cigarrilloselectronicos.com.ar/products/vaporesso-gen-160-kit?variant=43979823612151",
        link_imagen: "https://cigarrilloselectronicos.com.ar/cdn/shop/products/Numero00122_e68dd1ad-dc60-4bad-a011-7bca7d3e4439.webp?v=1668781856",
    },
    {
        id: 3,
        nombre: "VAPORESSO GTX GO 40",
        link_producto: "https://cigarrilloselectronicos.com.ar/products/vaporesso-gtx-go-40-kit-40w-1500-mah?variant=43960480760055",
        link_imagen: "https://cigarrilloselectronicos.com.ar/cdn/shop/products/Numero001_5dbc749e-7c90-4b6a-83b0-88de9102373e.webp?v=1695994526",
    },
    {
        id: 4,
        nombre: "SMOK FORTIS KIT",
        link_producto: "https://instagrowshop.cl/producto/vaporizador-fortis-kit-7-color-smok/",
        link_imagen: "https://instagrowshop.cl/wp-content/uploads/2023/05/vaporizador-fortis-kit-7-color-smok-1024x1024.jpg",
    },
    
];

let product = document.getElementById("productos_page");


function renderizarPagina (valor) {
    product.innerHTML = `
        <div class="productos">
            <div class="productos">
                <img src=${valor.link_imagen} alt="#" class="productosImage">
        </div>
            </div>
        <div class="productos">
                <button class="button">Comprar</button>
        </div>
        <div>
            <h1 class="text">   Smok trae de vuelta a poderoso y elegante G-PRIV 4.  Una síntesis de poder y estética, haciéndolo más atractivo, con elegancia texturizada y agarre optimizado. El gran regreso de la serie de pantalla táctil más vendida con tecnología actualizada y un mini tanque TFV18 centrado en el sabor.

            El SMOK G-PRIV 4 Kit consiste con el Mod de potencia de 230W y  TFV18 Mini Tank. Es alimentado por baterías duales 18650 y soporta rangos de salida de 5W a 230W. Una pantalla táctil de 2.0 pulgadas se añade a él, lo que hará que la operación interactiva más fácil. Además, una gran tecla de disparo lateral está diseñada para facilitar la operación en el dispositivo. Hay tres modos para satisfacer diferentes necesidades: Modo Power, Modo TC y Modo My. Cuando se trata del modo MI, puede preestablecer 4 conjuntos de datos como su modo predeterminado. El tanque TFV18 Mini puede contener una gran capacidad de 6,5 ml y cuenta con un sistema de llenado superior,  que resulta en enormes nubes.</h1>
        </div>
    `
};