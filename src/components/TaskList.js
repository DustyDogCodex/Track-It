/* component that renders a list of tasks that have been set by the user. */

function TaskList({ tasks }) {

    const taskList = tasks.map(task => {
        return <div>{task.info}</div>
    })

    return(
        <div>
            {taskList}
        </div>
    )
}

export default TaskList