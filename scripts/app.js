const itemForm = getElement('item-form');
const itemInput = getElement('item-input');
const itemList = getElement('item-list');

let items = [];
let currentItem = null;

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newItem = itemInput.value.trim();

    if (currentItem === null) {
        addItem(newItem);
    } else {
        updateItem(newItem);
    }

    itemInput.value = '';
    renderItems();
});

function addItem(item) {
    const newItem = {
        id: Date.now(),
        name: item
    };
    items.push(newItem);
}

function renderItems() {
    itemList.innerHTML = '';
    items.forEach(item => {
        itemList.appendChild(createListItem(item.name, item.id));
    });
}

function editItem(id) {
    const item = items.find(item => item.id === id);
    currentItem = item;
    itemInput.value = item.name;
}

function updateItem(name) {
    currentItem.name = name;
    currentItem = null;
}

function deleteItem(id) {
    items = items.filter(item => item.id !== id);
    renderItems();
}

renderItems();
