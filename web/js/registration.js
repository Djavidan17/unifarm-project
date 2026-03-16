document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const phoneInput = document.getElementById('phone-input');
    const countryCode = "+994";

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Получаем только цифры, которые ввел пользователь
        const inputVal = phoneInput.value.trim();

        if (inputVal.length >= 7) {
            const fullNumber = countryCode + inputVal;
            console.log("Полный номер для отправки:", fullNumber);
            alert("Вход выполнен для номера: " + fullNumber);

            // window.location.href = 'next_page.html';
        } else {
            alert("Пожалуйста, введите номер полностью");
        }
    });

    // Ограничение: разрешаем только цифры
    phoneInput.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});