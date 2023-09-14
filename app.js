const select = document.querySelector('select');
const allLang = ['en', 'ru'];

select.addEventListener('change', changeLanguage);

// Загрузка выбранного языка из Local Storage при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang && allLang.includes(savedLang)) {
        select.value = savedLang;
        applyLanguage(savedLang);
    }
});

// Обработчик изменения языка
function changeLanguage() {
    let lang = select.value;
    applyLanguage(lang);
    localStorage.setItem('lang', lang);
}

// Применение выбранного языка к элементам страницы
function applyLanguage(lang) {
    for (let key in langArr) {
        document.querySelector('.lng-' + key).innerHTML = langArr[key][lang];
    }
}
