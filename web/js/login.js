document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('phoneInput');
    const form = document.getElementById('registrationForm');
    const prefix = "+994";

    // Инициализация фокуса
    input.focus();

    // Защита префикса и управление курсором
    input.addEventListener('keydown', (e) => {
        const start = input.selectionStart;
        
        // Блокируем удаление префикса через Backspace или Delete
        if (start <= prefix.length && (e.key === "Backspace" || e.key === "Delete")) {
            e.preventDefault();
        }
    });

    // Не даем переместить курсор в область префикса кликом
    input.addEventListener('click', () => {
        if (input.selectionStart < prefix.length) {
            input.setSelectionRange(prefix.length, prefix.length);
        }
    });

    // Обработка ввода (только цифры после префикса)
    input.addEventListener('input', (e) => {
        if (!input.value.startsWith(prefix)) {
            input.value = prefix;
        }
        
        // Удаляем любые нецифровые символы после префикса
        const val = input.value.substring(prefix.length);
        input.value = prefix + val.replace(/\D/g, '');
    });

    // Анимация при сабмите
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (input.value.length < 13) {
            input.parentElement.classList.add('shake-animation');
            setTimeout(() => input.parentElement.classList.remove('shake-animation'), 500);
            return;
        }

        form.style.transform = "scale(0.9) opacity(0)";
        form.style.transition = "0.4s ease";
        
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 400);
    });
});