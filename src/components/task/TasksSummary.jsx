export const TasksSummary = ({ tasks }) => {

    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const uncompleted = total - completed;

    return (
        <div className="summary-tasks">
            <p><span>{total}</span> Total Tasks</p>
            <p><span>{completed}</span> Completed</p>
            <p><span>{uncompleted}</span> Uncompleted</p>
        </div>
    )
}
