document.addEventListener('DOMContentLoaded', () => {
    // 1. Получаем ID товара из URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        console.log("Бэкенд должен загрузить данные для ID: " + productId);
        // Здесь бэкендер пропишет fetch запрос к базе данных
        // И заполнит поля: document.getElementById('productTitle').innerText = data.name;
    }

    // Логика "Показать номер"
    const phoneBtn = document.getElementById('sellerPhone');
    phoneBtn.addEventListener('click', function(e) {
        if (this.innerText === 'ПОКАЗАТЬ НОМЕР') {
            e.preventDefault();
            this.innerText = '+994 50 123 45 67'; // API: Сюда подставится реальный номер
            this.style.background = '#000';
            this.style.border = '1px solid white';
        }
    });
});