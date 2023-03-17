//form for adding new tasks to the task lis tfor display
import React from "react"

function InputForm({ addNewTask }){
    //using state to handle user input
    const [newTask, setNewTask] = React.useState('')
    const [newDate, setNewDate] = React.useState('')
    const [newReminder, setNewReminder] = React.useState(false)

    //function that will pass task,date,reminder info to addNewTask function and call it
    //this function will also prevent default action of page reloading on submit.
    function pleaseAddTask(e){
        e.preventDefault()

        if(!newTask){
            alert('Please add a task!')
            return
        }

        addNewTask({ info: newTask, date: newDate, reminder: newReminder })

        setNewTask('')
        setNewDate('')
        setNewReminder(false)
    }

    return(
        <form className="task-form" onSubmit={pleaseAddTask}>
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