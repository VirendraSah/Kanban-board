let data = {
    "todo": [
        { "id": 1, "title": "Task 1" },
        { "id": 2, "title": "Task 2" },
        { "id": 3, "title": "Task 3" }
    ],
    "inProgress": [
        { "id": 4, "title": "Task 4" },
        { "id": 5, "title": "Task 5" },
        { "id": 6, "title": "Task 6" }
    ],
    "done": [
        { "id": 7, "title": "Task 7" },
        { "id": 8, "title": "Task 8" },
        { "id": 9, "title": "Task 9" }
    ]
}

function FetchData() {
    let columns = document.querySelectorAll('.column ul');

    Object.keys(data).forEach((key, index) => {
        let items = "";
        data[key].forEach((task, index) => {
            items += `<li draggable="true">${task.title}</li>`;
        });
        columns[index].innerHTML = items;
    });
}


function DragandDrop() {
    let items = document.querySelectorAll('.column ul li'); 
    let columns = document.querySelectorAll('.column ul');
    let selectedItem = null;

    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            selectedItem = e.target;
        });
    });

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        column.addEventListener('drop', (e) => {
                column.appendChild(selectedItem);
                selectedItem = null; 
        });
    });
}


FetchData();
DragandDrop();