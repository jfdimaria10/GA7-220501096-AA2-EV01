function getElement(id) {
    return document.getElementById(id);
}

function createListItem(item, id) {
    const li = document.createElement('li');
    li.id = `item-${id}`;
    li.innerHTML = `
        ${item}
        <span class="edit" onclick="editItem(${id})">Editar</span>
        <span class="delete" onclick="deleteItem(${id})">Eliminar</span>
    `;
    return li;
}
