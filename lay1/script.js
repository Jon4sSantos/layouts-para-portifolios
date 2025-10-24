let slides = document.querySelector('#slides');
let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function mudarSlide() {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }

    // Move o container para mostrar o slide correspondente
    slides.style.transform = `translateX(-${index * 50}%)`; // 50% porque cada slide ocupa metade da largura total
    slides.style.transition = 'transform 1s ease'; // animação suave
}

// Troca a imagem a cada 3 segundos
setInterval(mudarSlide, 3000);
