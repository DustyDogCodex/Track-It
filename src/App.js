/* import { useState } from "react"; */
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {
  /* const [tasks, setTasks] = useState([
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
 */
  return (
    <div className="container">
      <Header />
      <Tasks /* tasks={tasks} */ />
    </div>
  );
}

export default App;
