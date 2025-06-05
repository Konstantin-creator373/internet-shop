// Массив для хранения текущих товаров в корзине
let cartItems = [];

// Функция добавляет товар в корзину
function addToCart(event) {
    event.preventDefault(); // Предотвращаем действие по умолчанию (например, отправку формы)
    const buttonElement = event.target;
    const productName = buttonElement.dataset.productName;
    // Проверяем, есть ли такой товар уже в корзине
    if (!cartItems.includes(productName)) {
        cartItems.push(productName);
        updateCartDisplay();
    }
}

// Функция обновления интерфейса корзины
function updateCartDisplay() {
    document.getElementById("item-count").innerText = cartItems.length;
    let itemsList = document.getElementById("items-list");
    itemsList.innerHTML = "";

    for (const item of cartItems) {
        let newItemLi = document.createElement("li");
        newItemLi.textContent = item;
        itemsList.appendChild(newItemLi);
    }
}

// Добавляем обработчики событий для кнопок заказа
window.addEventListener('DOMContentLoaded', () => {
    const orderButtons = document.querySelectorAll('.product-box button');
    orderButtons.forEach((btn) => btn.addEventListener('click', addToCart));
});

// Инициализация страницы
updateCartDisplay(); // Изначально очищаем список товаров