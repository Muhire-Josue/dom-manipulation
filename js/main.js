const form = document.getElementById('addForm');
const items = document.getElementById('items');
const filter = document.getElementById('filter')

form.addEventListener('submit', addItem);
items.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItem)

function addItem (event) {
    event.preventDefault();
    
    //Get input value
    const newItem = document.getElementById('item').value;

    //Create new li element
    const li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
    

    //Create and append delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    items.appendChild(li);
    
    
}

function deleteItem(event) {
    if(event.target.classList.contains('delete')) {
        const li = event.target.parentElement;
        items.removeChild(li);
    }
}

function filterItem (event) {
      const text = event.target.value.toLowerCase();
      const itemList = items.getElementsByTagName('li');

      Array.from(itemList).forEach(function(item) {
          const itemName = item.textContent;
          if(itemName.toLowerCase().indexOf(text) != -1) {
              item.style.display ='block';
          } else {
              item.style.display = 'none';
          }
      });        
}