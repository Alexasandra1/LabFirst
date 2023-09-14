document.addEventListener("DOMContentLoaded", function() { 
    // Получаем состояние меню из Local Storage
    var isMenuOpen = localStorage.getItem("isMenuOpen") === "true";

    // Устанавливаем класс для отображения меню в соответствии с состоянием
    var header = document.querySelector("header");
    header.classList.toggle("open", isMenuOpen);
    header.classList.toggle("closed", !isMenuOpen);

    // Добавляем обработчик события на кнопку бургера
    document.getElementById("burger").addEventListener("click", function(){ 
        header.classList.toggle("open");
        header.classList.toggle("closed");

        // Сохраняем состояние меню в Local Storage
        localStorage.setItem("isMenuOpen", header.classList.contains("open"));
    });
});