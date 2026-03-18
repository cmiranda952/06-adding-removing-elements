const form = document.getElementById('form');
const itemInput = document.getElementById('item-input');
const list = document.getElementById('list');

form.addEventListener('submit', function (event) {
	event.preventDefault();

	// Remove extra spaces so empty entries are not added.
	const itemText = itemInput.value.trim();

	if (itemText === '') {
		return;
	}

	const listItem = document.createElement('li');

	const itemTextElement = document.createElement('span');
	itemTextElement.textContent = itemText;

	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete-btn';
	deleteButton.type = 'button';
	deleteButton.setAttribute('aria-label', `Delete ${itemText}`);
	deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

	deleteButton.addEventListener('click', function () {
		listItem.remove();
	});

	listItem.appendChild(itemTextElement);
	listItem.appendChild(deleteButton);

	list.appendChild(listItem);

	// Clear the field and place the cursor back in it for the next item.
	itemInput.value = '';
	itemInput.focus();
});
