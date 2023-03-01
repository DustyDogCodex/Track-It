/* component that renders a list of tasks that have been set by the user. */
import Task from "./Task"

function TaskList({ tasks, onDelete, onToggle }) {

    /* an array containing all individual tasks */
    const taskList = tasks.map(task => {
        return (
            <Task key={task.id} id={task.id} info={task.info} date={task.date} reminder={task.reminder} onDelete={onDelete} onToggle={onToggle}/>
        )
    })

    return(
        <div>
            {taskList}
        </div>
    )
}

export default TaskList