// Локальные данные
let items = [
    { id: 1, name: "Retro Item 1" },
    { id: 2, name: "Retro Item 2" },
    { id: 3, name: "Retro Item 3" },
];

// Функция для отображения данных на странице
function renderItems() {
    const dataList = document.getElementById("data-list");
    dataList.innerHTML = ""; // Очищаем список перед добавлением
    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `ID: ${item.id}, Name: ${item.name}`;
        dataList.appendChild(listItem);
    });
}

// Функция для добавления нового элемента
function addItem() {
    const newItem = {
        id: items.length + 1,
        name: `Retro Item ${items.length + 1}`,
    };
    items.push(newItem);
    renderItems();
}

// Отображаем данные при загрузке страницы
renderItems();
