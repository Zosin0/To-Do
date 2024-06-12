document.addEventListener('DOMContentLoaded', loadItems);
document.getElementById('add-item-btn').addEventListener('click', addItem);

function loadItems() {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.forEach(item => addItemToDOM(item));
}

function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();
    if (itemText === '') return;

    addItemToDOM(itemText);
    saveItem(itemText);
    itemInput.value = '';
}

function addItemToDOM(itemText) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center t3';
    listItem.textContent = itemText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm b1';
    deleteButton.textContent = 'Remover';
    deleteButton.onclick = () => {
        listItem.remove();
        removeItem(itemText);
    };

    listItem.appendChild(deleteButton);
    document.getElementById('shopping-list').appendChild(listItem);
}

function saveItem(item) {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    items.push(item);
    localStorage.setItem('shoppingList', JSON.stringify(items));
}

function removeItem(item) {
    const items = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const filteredItems = items.filter(i => i !== item);
    localStorage.setItem('shoppingList', JSON.stringify(filteredItems));
}
