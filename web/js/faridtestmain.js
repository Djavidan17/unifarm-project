document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('sidebarToggle');
    const sideMenu = document.getElementById('sideMenu');
    const profileBtn = document.getElementById('profileStub');

    // Переключение сайдбара
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        sideMenu.classList.toggle('active');
        burger.classList.toggle('open');
    });

    // Закрытие при клике по экрану
    document.addEventListener('click', (e) => {
        if (!sideMenu.contains(e.target) && !burger.contains(e.target)) {
            sideMenu.classList.remove('active');
            burger.classList.remove('open');
        }
    });

    // Заглушка профиля
    profileBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("Заглушка: Профиль будет реализован в следующем обновлении.");
    });
});