import { useEffect, useRef, useState } from 'react';

export const Task = ({ task, index, handleChecked, handleDelete }) => {

    const [checked, setChecked] = useState(task.completed)

    const taskCheckBox = useRef(null);

    const checkTask = () => {
        const newChecked = !checked;
        setChecked(newChecked);
    }

    const deleteTask = () => {
        handleDelete(taskCheckBox.current.id)
    }

    useEffect(() => {
        handleChecked(taskCheckBox.current.id, checked)
    }, [checked]);

    return (
        <div className='task'>
            <input
                ref={taskCheckBox}
                id={index}
                className="task-checkbox"
                type="checkbox"
                name="completed"
                checked={checked}
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
