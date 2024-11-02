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
