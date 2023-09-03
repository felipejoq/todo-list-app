import { useRef } from "react";
import { TasksSummary } from "./TasksSummary";
import { TaskList } from "./TaskList";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export const AddTask = () => {

    const inputTask = useRef(null);

    const [tasks, setTasks] = useLocalStorage('tasks', []);

    const addTask = () => {
        const textTask = inputTask.current.value.trim();
        if(!textTask){
            inputTask.current.focus();
            return;
        }
        tasks.push({ text: textTask, completed: false })
        setTasks([...tasks])
        inputTask.current.value = '';
        inputTask.current.focus();
    }

    const updateTask = (idTask, completed) => {
        tasks[Number(idTask)].completed = completed;
        setTasks([...tasks])
    }

    const deleteTask = (idTask) => {
        tasks.splice(idTask, 1);
        setTasks([...tasks]);
    }

    const keyEnter = (event) => {
        if (event.key === 'Enter') addTask()
    }

    return (
        <>
            <div className="task-add">
                <input
                    ref={inputTask}
                    className="text-task"
                    type="text"
                    name="task"
                    placeholder="Write a task here..."
                    onKeyDown={keyEnter}
                    autoFocus />
                <button
                    className="add-task-button"
                    onClick={addTask}
                >
                    <i className="fa-regular fa-square-plus"></i> Add Task
                </button>
            </div>

            <TasksSummary tasks={tasks} />

            <TaskList
                tasks={tasks}
                handleDeleteTask={deleteTask}
                handleUpdateTask={updateTask}
            />
        </>
    )
}
