document.getElementById('fileInput').addEventListener('change', function(e) {
    const container = document.getElementById('previewContainer');
    container.innerHTML = ''; // Очистить старые превью

    Array.from(this.files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.classList.add('img-preview');
            container.appendChild(img);
        }
        reader.readAsDataURL(file);
    });
});

// Анимация отправки
document.getElementById('adForm').addEventListener('submit', function(e) {
    const btn = document.querySelector('.submit-premium-btn');
    btn.innerHTML = 'ЗАГРУЗКА...';
    btn.style.opacity = '0.7';
});