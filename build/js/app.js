document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
    navegacionFija();
    scrollNav();
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreConvencion = document.querySelector('.sobre-convencion');

    document.addEventListener('scroll', function() {
        if(sobreConvencion.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    const totalImagenes = 16;

    for(let i = 1; i <= totalImagenes; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = `Imagen ${i} Back To School 2024`;

        imagen.onclick = function() {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = `Imagen ${i} Back To School 2024`;

    //Genera el modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    //Botón para cerrar el modal
    const BtnCerrarModal = document.createElement('BUTTON');
    BtnCerrarModal.textContent = 'X';
    BtnCerrarModal.classList.add('btn-cerrar');
    BtnCerrarModal.onClick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(BtnCerrarModal);

    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);

}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove();

        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: 'smooth'});
        })
    })
}