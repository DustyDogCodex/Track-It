import React from 'react';
import TaskList from "./components/TaskList";

function App() {

  /* hardcoded task list for testing out the current code. User will be able to add and update tasks. */
  const [tasks, setTasks] = React.useState([
    {
        id: 1,
        info: "Task #1"
    },
    {
        id: 2,
        info: "Task #2"
    },
    {
        id: 3,
        info: "Task #3"
    }
  ])

  const [newTask, setNewTask] = React.useState('')

  function handleInputChange(e){
    const newInput = e.target.value
    setNewTask(newInput)
  }

  /* function for adding new task and preventing default event of reloading page after submitting */
  function addNewTask(e){
    const newID = tasks.length + 1

    setTasks(prevTasks => 
      [...prevTasks,
        {
          id: newID,
          info: newTask
        }
    ])
    
    console.log(tasks)

    setNewTask('')
    e.preventDefault()
  }

  return (
    <div className="main">
      <div className="addTask">
        <h1>Track your tasks!</h1>
        <form onSubmit={addNewTask}>
          <label> New Task: 
            <input type="text" placeholder="Enter a new task" value={newTask} onChange={handleInputChange}/>
          </label>
          <input type="submit" value='Add new task'/>
        </form>
      </div>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
