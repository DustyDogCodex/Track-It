//form for adding new tasks to the task lis tfor display
import React from "react"
import { useState } from "react"

function InputForm(){
    //using state to handle user input
    const [newTask, setNewTask] = React.useState('')
    const [newDate, setNewDate] = React.useState('')
    const [newReminder, setNewReminder] = React.useState(false)

    /* function for adding new task and preventing default event of reloading page after submitting */
    /* function addNewTask(e){
        const newID = tasks.length + 1

        setTasks(prevTasks => 
            [...prevTasks,
                {
                id: newID,
                info: newTask
                }
            ]
        )

        setNewTask('')
        e.preventDefault()
    } */

    return(
        <form className="task-form" /* onSubmit={addNewTask} */>
            <div className="form-element">
                <label> New Task: 
                    <input 
                        type="text" 
                        placeholder="Enter a new task" 
                        value={newTask} 
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-element">
                <label> Date & Time: 
                    <input 
                        type="text" 
                        placeholder="Add date & time" 
                        value={newDate} 
                        onChange={(e) => setNewDate(e.target.value)}
                    />
                </label>
            </div>
            <div className="form-element">
                <label> Reminder: 
                    <input 
                        type="checkbox" 
                        value={newReminder} 
                        onChange={(e) => setNewReminder(e.currentTarget.checked)}
                    />
                </label>
            </div>
            <input type="submit" value='Add new task'/>
        </form>
    )
}

export default InputForm