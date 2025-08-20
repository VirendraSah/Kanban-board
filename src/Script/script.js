// Data for the Kanban board
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

// Fetch the data
function FetchData() {
    let columns = document.querySelectorAll('.column ul');

    Object.keys(data).forEach((key, index) => {
        let items = "";
        data[key].forEach((task, index) => {
            items += `<li draggable="true" data-id="${task.id}" >${task.title}</li>`;
        });
        columns[index].innerHTML = items;
    });
    DragandDrop()
}

// Drag and Drop functionality
function DragandDrop() {
    let items = document.querySelectorAll('.column ul li');
    let columns = document.querySelectorAll('.column ul');
    let selectedItem = null;

    items.forEach((item, index) => {
        item.addEventListener('dragstart', (e) => {
            selectedItem = e.target;
        });
    });

    columns.forEach((column, index) => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        column.addEventListener('drop', (e) => {
            e.preventDefault();

            let oldColumn = selectedItem.parentElement.parentElement.id;
            let taskId = selectedItem.getAttribute('data-id');
            let title = selectedItem.textContent;

            data[oldColumn] = data[oldColumn].filter(task => task.id != taskId);
            
            let newColumn = column.parentElement.id;
            data[newColumn].push({ id: taskId, title });
            selectedItem = null;
            FetchData();
        });

    });
    console.log(data)
}


FetchData();
DragandDrop();