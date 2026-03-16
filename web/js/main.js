document.addEventListener('DOMContentLoaded', () => {
    console.log("Main page loaded");

    // Обработка клика по карточкам товаров
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            alert(`Открытие товара №${index + 1}`);
        });
    });

    // Логика кнопки создания объявления
    const createBtn = document.querySelector('.create-ad-btn');
    createBtn.addEventListener('click', () => {
        alert("Переход к форме создания объявления...");
    });
});