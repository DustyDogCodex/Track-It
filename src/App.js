import React from 'react';
import './App.css'
import TaskList from "./components/TaskList";
import InputForm from './components/InputForm';
import Header from './components/Header';
import { v4 as uuidv4 } from 'uuid';

function App() {
  //state for toggling display of input form for adding new tasks
  const [showForm, setShowForm] = React.useState(false)


  /* hardcoded task list for testing out the current code. User will be able to add and update tasks. */
  const [tasks, setTasks] = React.useState([
    {
        id: uuidv4(),
        info: "Task #1",
        date: "May 20th at 19:00",
        reminder: true
    },
    {
        id: uuidv4(),
        info: "Task #2",
        date: "May 21st at 07:00",
        reminder: false
    },
    {
        id: uuidv4(),
        info: "Task #3",
        date: "May 22nd at 20:00",
        reminder: false
    }
  ])

  /* function for adding new task. taskToBeAdded is an object consisting of newTask, newDate, newReminder passed as arguments */
  function addNewTask(taskToBeAdded){
    const newID = uuidv4() 

    setTasks(
      [...tasks,
        {
          id: newID,
          ...taskToBeAdded
        }
      ]
    )

  }

  //function for deleting tasks
  function deleteTask(id){
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //function for toggling reminders
  function toggleReminder(id){
  
    setTasks(
      tasks.map(task => 
        task.id === id ?
        {...task, reminder: !task.reminder} : task
      )
    )

  }

  return (
    <div className="main">
      <Header showForm={showForm} displayForm={() => setShowForm(!showForm)} />

      {showForm && <InputForm addNewTask={addNewTask}/>}
     
      {
      tasks.length === 0 ? 
      "No tasks have been scheduled." : 
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      }

    </div>
  );
}

export default App;
