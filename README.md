# Kanban Board (Vanilla JS)

A simple Trello-style Kanban board implemented with plain HTML, CSS, and JavaScript—no frameworks or external libraries.

Live Demo: [kanban-board-bkn.vercel.app](https://kanban-board-bkn.vercel.app)  
GitHub: [VirendraSah/Kanban-board](https://github.com/VirendraSah/Kanban-board)

---

## ​ Project Overview

This project is a lightweight Kanban board designed for hands-on learning of drag-and-drop functionality and dynamic UI updates using JavaScript. It includes three columns (`To Do`, `In Progress`, and `Done`) and ensures:

- Board initializes with hard-coded task data.
- **Drag-and-drop** capability to move tasks between and within columns.
- Updates to both the **UI** and internal `data` structure when dragging and dropping tasks.
- Displays “No Task” when any column becomes empty.

---

##  Features

- **Static Data Initialization**  
  Loads tasks from a JavaScript object into the board on page load.

- **Drag-and-Drop Functionality**  
  Move cards between columns (and within columns) using native HTML5 drag-and-drop APIs.

- **Data Binding**  
  After a drop, the internal `data` object is updated and used to re-render the board, keeping UI in sync with the underlying data.

- **Empty Column Handling**  
  If a column is emptied of tasks, it shows a “No Task” placeholder until a new card is dropped.

---

##  Usage

### 1. Clone the Repository

```bash
git clone https://github.com/VirendraSah/Kanban-board.git
cd Kanban-board
