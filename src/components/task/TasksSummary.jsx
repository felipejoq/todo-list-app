import { useEffect, useState } from "react";

export const TasksSummary = ({ tasks }) => {

    const [summary, setSummary] = useState({total: 0, completed: 0, uncompleted: 0})

    useEffect(() => {
        const newSummary = {
            total: tasks.length,
            completed: tasks.filter(task => task.completed).length,
            uncompleted: tasks.filter(task => !task.completed).length
        }

        setSummary(newSummary);

    }, [tasks]);
    
    const { total, completed, uncompleted } = summary;

    return (
        <div className="summary-tasks">
            <p><span>{total}</span> Total Tasks</p>
            <p><span>{completed}</span> Completed</p>
            <p><span>{uncompleted}</span> Uncompleted</p>
        </div>
    )
}
