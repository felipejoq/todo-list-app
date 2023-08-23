const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

export const newTaskInput = document.getElementById('newTaskInput');
export const taskList = document.getElementById('taskList');
const addButton = document.getElementById('addButton');
const textEmptyTasks = document.querySelector('.empty-tasks-text');


addButton.addEventListener('click', (event) => {
    addTask()
});

newTaskInput.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        addTask()
    }
});

taskList.addEventListener('click', event => {
    if (
        event.target.classList.contains('delete-button') ||
        event.target.classList.contains('fa-solid')
    ) {
        const index = event.target.id || event.target.getAttribute('data-index');
        deleteTask(index);
    }
});

taskList.addEventListener('change', event => {
    if (event.target.classList.contains('task-checkbox')) {
        const index = event.target.closest('.task-item').querySelector('.delete-button').getAttribute('data-index');
        toggleTaskCompletion(index);
    }
});

export const addTask = () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        tasks.push({ text: taskText, completed: false });
        saveTasks();
        renderTasks();
        newTaskInput.value = '';
    }
}

export const deleteTask = (index) => {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
    if (isEmptyTasks()) {
        drawEmptyTasksMessage()
    }
}

export const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export const renderTasks = () => {
    taskList.innerHTML = '';
    if (isEmptyTasks()) {
        drawEmptyTasksMessage()
    } else {
        removeEmptyTasksMessage();
        tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');

            taskItem.classList.add('task-item');
            taskItem.id = `task-${index}`;

            taskItem.innerHTML = `
                  <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                  <span class="task-text">
                    ${task.text}
                  </span>
                  <button id="${index}" class="delete-button" data-index="${index}">
                    <i class="fa-solid fa-trash-can fa-lg" data-index="${index}"></i>
                  </button>
              `;

            taskList.appendChild(taskItem);
        });
    }
}

export const toggleTaskCompletion = (index) => {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

const isEmptyTasks = () => {
    return tasks.length === 0;
}

const drawEmptyTasksMessage = () => {
    textEmptyTasks.classList.replace('d-none', 'd-block')
    textEmptyTasks.innerText = 'There are no scheduled tasks yet...'
}

const removeEmptyTasksMessage = () => {
    textEmptyTasks.classList.replace('d-block', 'd-none')
    textEmptyTasks.classList.add('d-none');
}