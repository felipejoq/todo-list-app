import { useEffect } from 'react';
import { Task } from './Task';

export const TaskList = ({ tasks, handleDeleteTask, handleUpdateTask}) => {

    const handleChecked = (idTask, completed) => {
        handleUpdateTask(idTask, completed)
    }

    const handleDelete = (idTask) => {
        handleDeleteTask(idTask)
    }

    return (
        <>
            <h2>
                <i className="fa-solid fa-gear fa-xs"></i> Tasks List
            </h2>

            {
                tasks.length <= 0 &&
                <p className="task empty-tasks-text">
                    There are no scheduled tasks yet...
                </p>
            }

            <div className="list-tasks">
                {
                    tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                            handleChecked={handleChecked}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </>
    )
}
