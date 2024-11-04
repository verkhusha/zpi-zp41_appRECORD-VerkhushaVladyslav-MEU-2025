// Функція для перемикання вкладок
function openTab(event, tabId) {
    // Сховати всі вкладки
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
    });

    // Прибрати активний клас з усіх кнопок
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Показати вибрану вкладку
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
    selectedTab.classList.add('active');
    
    // Додати активний клас до вибраної кнопки
    event.currentTarget.classList.add('active');
}

// Функція для перемикання елементів вертикального меню
function openMenuContent(menuId) {
    // Знаходимо активну вкладку
    const activeTab = document.querySelector('.tab-content.active');
    
    // Приховуємо всі елементи вмісту в активній вкладці
    const menuTexts = activeTab.querySelectorAll('.menu-text');
    menuTexts.forEach(text => text.classList.remove('active'));

    // Прибираємо активний клас з усіх кнопок меню в активній вкладці
    const menuItems = activeTab.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Активуємо вибраний вміст і кнопку меню
    activeTab.querySelector(`#${menuId}`).classList.add('active');
    activeTab.querySelector(`[onclick="openMenuContent('${menuId}')"]`).classList.add('active');
}
