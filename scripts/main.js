const catalogo = [
    {
        id: 1,
        nombre: "SMOK G PRIV 4",
        link_producto: "../pages/products.html",
        link_imagen: "https://www.vapewholesaleglobal.com/cdn/shop/products/SMOK-G-PRIV-4-Kit-with-TFV18-MINI-Tank-685732.png?v=1662610615&width=1024",
        info_producto: "Smok trae de vuelta a poderoso y elegante G-PRIV 4.  Una síntesis de poder y estética, haciéndolo más atractivo, con elegancia texturizada y agarre optimizado. El gran regreso de la serie de pantalla táctil más vendida con tecnología actualizada y un mini tanque TFV18 centrado en el sabor. El SMOK G-PRIV 4 Kit consiste con el Mod de potencia de 230W y  TFV18 Mini Tank. Es alimentado por baterías duales 18650 y soporta rangos de salida de 5W a 230W. Una pantalla táctil de 2.0 pulgadas se añade a él, lo que hará que la operación interactiva más fácil. Además, una gran tecla de disparo lateral está diseñada para facilitar la operación en el dispositivo. Hay tres modos para satisfacer diferentes necesidades: Modo Power, Modo TC y Modo My. Cuando se trata del modo MI, puede preestablecer 4 conjuntos de datos como su modo predeterminado. El tanque TFV18 Mini puede contener una gran capacidad de 6,5 ml y cuenta con un sistema de llenado superior,  que resulta en enormes nubes."
        },
    
    {
        id: 2,
        nombre: "VAPORESSO GEN 160",
        link_producto: "../pages/products.html",
        link_imagen: "https://cigarrilloselectronicos.com.ar/cdn/shop/products/Numero00122_e68dd1ad-dc60-4bad-a011-7bca7d3e4439.webp?v=1668781856",
        info_producto:"El vape Vaporesso Gen 160 Kit consta de un GEN 160 Mod y GTX 26 Pod Tank. El modelo de caja Vaporesso Gen 160 funciona con baterías duales 18650 con carga tipo C y salida de potencia ajustable de 5-160W. El mod Vaporesso Gen 160 presenta el último conjunto de chips Axon con IPX 5 a prueba de agua y golpes y es compatible con los modos VW, TC, Pulse, Power Eco, Bypass y DIY para satisfacer diferentes necesidades. Vaporesso Gen 160 está equipado con una pantalla OLED de 0,91 pulgadas para mostrar datos detallados de vapeo. Vaporesso GTX 26 Pod Tank tiene una capacidad de 5 ml con un diseño de llenado superior. GTX 26 Pod Tank es compatible con todas las bobinas GTX.",
    },
    {
        id: 3,
        nombre: "VAPORESSO GTX GO 40",
        link_producto: "../pages/products.html",
        link_imagen: "https://cigarrilloselectronicos.com.ar/cdn/shop/products/Numero001_5dbc749e-7c90-4b6a-83b0-88de9102373e.webp?v=1695994526",
        info_producto: "El VAPORESSO GTX GO 40 POD KIT incluye el pod VAPORESSO GTX 22 de REEMPLAZO VACÍO magnético. El POD recientemente mejorado cuenta con un sistema de llenado superior, lo que hace que el proceso de recarga sea sencillo y sin complicaciones; Completo con tecnología resistente a fugas SSS. Junto con un flujo de aire fácilmente ajustable y una batería incorporada de 1500 mAh y una salida máxima de 40 W con capacidades de carga rápida Tipo-C 2A . El VAPORESSO GTX GO 40 POD KIT proporciona una experiencia de vapeo completa.  ",
    },
    {
        id: 4,
        nombre: "SMOK FORTIS KIT",
        link_producto: "../pages/products.html",
        link_imagen: "https://instagrowshop.cl/wp-content/uploads/2023/05/vaporizador-fortis-kit-7-color-smok-1024x1024.jpg",
        info_producto: "El Kit Smok Fortis, evoluciona a partir del probado Kit Thallo 8 Thallo S y los actualiza con un tanque TFV18 Mini de rosca 510, el elegante cuero en la parte superior de su cuerpo, el diseño ergonómico hace que sea fácil de agarrar y antideslizante. Alimentado por una sola batería externa 18650 / 21700 entonces sirve su vaping con potencia ajustable hasta 80w. Construido en el chipset inteligente, cuenta con 0,001s velocidad de disparo instantáneo, los datos de operación directa en la pantalla a color TFT de 0,96 pulgadas, con botones de operación, puede ajustar el vataje y la función o más. ¡El 6,5 ml TFV18 Mini Tank viene con dos bobinas de malla (uno pre-instalado), con una válvula de control de flujo de aire inferior ajustable, TFV18 Mini Tank definitivamente traerá una nueva experiencia de vaping! El sistema de llenado superior es fácil de usar y efectivamente a prueba de fugas.",
    },
    
];


let card = document.getElementById("card_producto");
catalogo.map((producto) => {
    card.innerHTML += `
            <div class="equip" key=${producto.id}>
                <a onclick = 'dato(${producto.id})' href= ${producto.link_producto} >
                <img src=${producto.link_imagen} alt="#" class="equip">
                </a>
                <a href=${producto.link_producto} class="textcenter" onclick = 'renderizarPagina(${producto.id})' style="margin-top: 10px"> ${producto.nombre}</a>
            </div>
    `
});
let objeto;
function dato(valor){
    let objeto = parseInt(valor,10);
    localStorage.setItem("id",objeto);
}
let indice = localStorage.getItem("id");
console.log(indice);
let prod = document.getElementById("productos_page");
catalogo.map ((objeto) => {
    if(objeto.id == indice){
    prod.innerHTML = `
        <div class="productos">
            <div class="productos">
                <img src=${objeto.link_imagen} alt="#" class="productosImage">
        </div>
            </div>
        <div class="productos">
                <button class="button">Comprar</button>
        </div>
        <div>
            <h1 class="text">  ${objeto.info_producto}</h1>
        </div>
    `}
});