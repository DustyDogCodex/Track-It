/* component that renders a list of tasks that have been set by the user. */
import Task from "./Task"

function TaskList({ tasks }) {

    const taskList = tasks.map(task => {
        return (
            <Task info={task.info}/>
        )
    })

    return(
        <div>
            {taskList}
        </div>
    )
}

export default TaskList