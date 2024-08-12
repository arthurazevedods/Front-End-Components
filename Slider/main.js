const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function getCardsPerView() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
        return 1; // 1 card is shown
    } else {
        return 3; // 3 cards are shown
    }
}

function updateSliderPosition() {
    const cardWidth = cards[0].offsetWidth + 20; // 20px for margin
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function prev() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
    } else {
        // Se for o primeiro cartão, vá para o último conjunto de cartões
        currentIndex = Math.max(cards.length - getCardsPerView(), 0);
        updateSliderPosition();
    }
}

function next() {
    const cardsPerView = getCardsPerView();

    if (currentIndex < cards.length - cardsPerView) {
        currentIndex++;
        updateSliderPosition();
    } else {
        // Se for o último cartão visível, volte ao início
        currentIndex = 0;
        updateSliderPosition();
    }
}

window.addEventListener('resize', updateSliderPosition);