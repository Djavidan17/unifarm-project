document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.getElementById('phoneInput');
    const form = document.getElementById('registrationForm');

    // Фокус и позиция курсора
    phoneInput.addEventListener('focus', () => {
        setTimeout(() => {
            phoneInput.setSelectionRange(phoneInput.value.length, phoneInput.value.length);
        }, 10);
    });

    // Защита префикса +994
    phoneInput.addEventListener('keydown', (e) => {
        if (phoneInput.selectionStart < 4 && (e.key === 'Backspace' || e.key === 'Delete')) {
            e.preventDefault();
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Плавное исчезновение перед переходом
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            window.location.href = 'main.html';
        }, 500);
    });
});