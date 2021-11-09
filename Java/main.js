const Fila = document.querySelector('.Cont-Carousel');
const Combo = document.querySelector('.ComboBM');

const FlechIzq = document.getElementById('Flech-Izq');
const FlechDerch = document.getElementById('Flech-Derch');

//Evento de la flecha derecha //
FlechDerch.addEventListener("click", () => {
    Fila.scrollLeft += Fila.offsetWidth;
});

//Eevento de la flecha izquierda//
FlechIzq.addEventListener("click", () => {
    Fila.scrollLeft -= Fila.offsetWidth;
});