import { useRef, useState } from 'react';

export const Task = ({ task, index, handleChecked, handleDelete }) => {
    const taskCheckBox = useRef(null)

    const checkTask = () => {
        const checked = !task.completed;
        task.completed = checked;
        handleChecked(taskCheckBox.current.id, checked)
    }

    const deleteTask = () => {
        // setCompleted(!completed);
        handleDelete(taskCheckBox.current.id)
    }

    return (
        <div className='task'>
            <input
                ref={taskCheckBox}
                id={index}
                className="task-checkbox"
                type="checkbox"
                name="completed"
                checked={task.completed}
                onChange={checkTask}
            />
            <div className="body-task">
                <p>{task.text}</p>
            </div>
            <button onClick={deleteTask} className="delete-task">
                <i className="fa-solid fa-trash-can"></i>
            </button>
        </div>
    )
}
