document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const tabContent = document.getElementById('activeAds');

    // 1. Логика переключения вкладок (Активные / Проданные)
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Убираем активный класс у всех вкладок
            tabs.forEach(t => t.classList.remove('active'));
            // Добавляем активный класс нажатой вкладке
            tab.classList.add('active');

            const tabType = tab.getAttribute('data-tab');
            
            // Имитация смены контента для бэкенда
            if (tabType === 'sold') {
                tabContent.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">🤝</div>
                        <p>Здесь будут отображаться ваши проданные товары</p>
                    </div>
                `;
            } else {
                // Возвращаем дефолтное состояние (или реальные данные)
                tabContent.innerHTML = `
                    <div class="empty-state">
                        <p>У вас пока нет активных объявлений</p>
                        <a href="/web/html/faridtestcreateadd.html" class="add-shortcut">+ Разместить новое</a>
                    </div>
                `;
            }
        });
    });

    // 2. Заглушка для редактирования аватара
    const avatarEdit = document.querySelector('.avatar-edit-icon');
    if (avatarEdit) {
        avatarEdit.addEventListener('click', () => {
            alert('Здесь откроется выбор фото для профиля');
        });
    }

    // 3. Заглушка для даты (имитируем получение из БД)
    const dateSpan = document.getElementById('userRegistrationDate');
    if (dateSpan) {
        // В реальности здесь будет дата из API
        const now = new Date();
        const options = { year: 'numeric', month: 'long' };
        dateSpan.innerText = now.toLocaleDateString('ru-RU', options);
    }
});