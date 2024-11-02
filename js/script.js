function openTab(event, tabId) {
    // Сховати всі вкладки
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => content.classList.remove('active'));

    // Прибрати активний клас з усіх кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Показати вибрану вкладку
    document.getElementById(tabId).classList.add('active');
    // Додати активний клас до вибраної кнопки
    event.currentTarget.classList.add('active');
}

// Функція для перемикання елементів вертикального меню
function openMenuContent(menuId) {
    const menuTexts = document.querySelectorAll('.menu-text');
    menuTexts.forEach(text => text.classList.remove('active'));

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    document.getElementById(menuId).classList.add('active');
    document.querySelector(`[onclick="openMenuContent('${menuId}')"]`).classList.add('active');
}

