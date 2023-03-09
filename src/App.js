import React from 'react';
import './App.css'
import TaskList from "./components/TaskList";
import InputForm from './components/InputForm';
import Header from './components/Header';

function App() {

  /* hardcoded task list for testing out the current code. User will be able to add and update tasks. */
  const [tasks, setTasks] = React.useState([
    {
        id: 1,
        info: "Task #1",
        date: "May 20th at 19:00",
        reminder: true
    },
    {
        id: 2,
        info: "Task #2",
        date: "May 21st at 07:00",
        reminder: false
    },
    {
        id: 3,
        info: "Task #3",
        date: "May 22nd at 20:00",
        reminder: false
    }
  ])

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
      <Header />
      <InputForm />
      {
      tasks.length === 0 ? 
      "No tasks have been scheduled." : 
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      }

    </div>
  );
}

export default App;
