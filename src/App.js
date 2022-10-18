import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
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
        id: 3,
        info: "Task #3",
        time: 'March 10th at 9am',
        reminder: true 
    }
  ])


  return (
    <div className="main">
      
    </div>
  );
}

export default App;
