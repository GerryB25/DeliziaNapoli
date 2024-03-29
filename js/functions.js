mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VycnliZzI1IiwiYSI6ImNscGFkdDV0ZzA1cW8yam5sdGNhdTA1YnMifQ.n2hhAD_kceSaclZhfXB5Zw';

let template1 = `<div class="marker-image"><img src="/media/Sucursal-Parque-Central.webp"></div>`;
let template2 = `<div class="marker-image"><img src="/media/Sucursal-Plaza.webp"></div>`;

var map1 = new mapboxgl.Map({
    container: 'ubication1',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-92.94661514359038, 18.002907663373197],
    zoom: 17,
    interactive: false,
});

const marker1 = new mapboxgl.Marker({
    color: "red",
})
    .setLngLat([-92.94661514359038, 18.002907663373197])
    .setPopup(new mapboxgl.Popup().setHTML(template1))
    .addTo(map1);

var map2 = new mapboxgl.Map({
    container: 'ubication2',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-92.91778596658575, 17.991279487463647],
    zoom: 17,
    interactive: false,
});

const marker2 = new mapboxgl.Marker({
    color: "blue",
})
    .setLngLat([-92.91778596658575, 17.991279487463647])
    .setPopup(new mapboxgl.Popup().setHTML(template2))
    .addTo(map2);

var slideLeft = {
    distance: '150%',
    origin: 'left',
    opacity: null,
    duration: 700,
    delay: 400,
};

var slideBottom = {
    distance: '150%',
    origin: 'bottom',
    duration: 500,
    viewFactor: 0.5
};

ScrollReveal().reveal('.inicioA', slideLeft);
ScrollReveal().reveal('.history', { delay: 200, viewFactor: 0.3, duration: 1000 });
ScrollReveal().reveal('.revealA', slideBottom);
ScrollReveal().reveal('.revealB', slideBottom);
ScrollReveal().reveal('.grid-img', { delay: 500, duration: 500 });
ScrollReveal().reveal('.revealC', { delay: 500, duration: 500, viewFactor: 0.3 });
ScrollReveal().reveal('.mapas', { delay: 1000, duration: 500, viewFactor: 0.4 });

const promociones = [
    {
        nombre: 'Pizza Fussione',
        ingredientes: 'Mozzarella, Jamon y Tocino',
        tamaño: 'Mediana',
        precio: '$10.99',
        image: '/media/pizza1.webp'
    },
    {
        nombre: 'Pina Express',
        ingredientes: 'Tomate, Mozzarella y Piña',
        tamaño: 'Grande',
        precio: '$12.99',
        image: '/media/pizza2.webp'
    },
    {
        nombre: 'Pizza Margherita',
        ingredientes: 'Tomate, Mozzarella, Cebolla y Albahaca',
        tamaño: 'Familiar',
        precio: '$14.99',
        image: '/media/pizza3.webp'
    },
    {
        nombre: 'Quattro Formaggi',
        ingredientes: 'Tomate, Queso Mozzarella, de cabra, parmesano y roquefort',
        tamaño: 'Mediana',
        precio: '$11.99',
        image: '/media/pizza4.webp'
    },
    {
        nombre: 'La Marinara',
        ingredientes: 'Tomate y Mozzarella',
        tamaño: 'Grande',
        precio: '$13.99',
        image: '/media/pizza5.webp'
    },
    {
        nombre: 'Pizza Diavola',
        ingredientes: 'Tomate, Mozzarella, Peperoni',
        tamaño: 'Familiar',
        precio: '$15.99',
        image: '/media/pizza6.webp'
    },
    {
        nombre: 'La Napoli',
        ingredientes: 'Tomate, Mozzarella, Pimiento, Champiñones y Cilantro',
        tamaño: 'Familiar',
        precio: '$11.99',
        image: '/media/pizza7.webp'
    },
    {
        nombre: 'Pizza Gourmet',
        ingredientes: 'Tomate, Mozzarella, Aceitunas, Espinaca y Champiñones',
        tamaño: 'Individual',
        precio: '$15.99',
        image: '/media/pizza8.webp'
    },
    {
        nombre: 'Pizza Ortolana',
        ingredientes: 'Tomate, Mozzarella, Pimiento y Espinaca',
        tamaño: 'Familiar',
        precio: '$13.99',
        image: '/media/pizza9.webp'
    }
];

function template(promo) {
    return `
    <div class="promo-content">
        <img loading="lazy" class="img-fluid" src=${promo.image} alt=${promo.nombre}>
        <div class="promo-text">
            <p>${promo.nombre}</p>
            <p>${promo.tamaño}</p>
            <p>${promo.ingredientes}</p>
        </div>
        <div class="text-footer"><p>${promo.precio}</p></div>
    </div>
    `
}

const modalBody = document.getElementById('modalBody');
const imgModal = new bootstrap.Modal(document.getElementById('myModal'));
function showModal(promo) {
    modalBody.innerHTML = template(promociones[promo - 1]);
    imgModal.show();
}