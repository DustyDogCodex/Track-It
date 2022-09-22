import { useState } from "react";

const Tasks = () => {
    const [tasks, seTasks] = useState([
        {
            id: 1,
            info: "Task #1",
            time: 'March 8th at 5pm',
            reminder: true
        },
        {
            id: 2,
            info: "Task #2",
            time: 'March 9th at 6pm',
            reminder: true
        },
        {
            id: 1,
            info: "Task #1",
            time: 'March 10th at 9am',
            reminder: true 
        }
    ])

    return (
        <>
            {tasks.map((task) => {
                <h3 key={task.id}>{task.text}</h3>
            })}
        </>
    )
}

export default Tasks