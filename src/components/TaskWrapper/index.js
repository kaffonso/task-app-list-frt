import { useState, useEffect } from "react";
import Task from "../Task";
import '../../styles/taskWrapper.css'

export default function TaskWrapper() {
  const [tasks, setTasks] = useState([]);

  const fecthAll = async () => {
    try {
      const response = await fetch("http://localhost:3333/tasks");
      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthAll();
  }, []);


  return (
    <div className="task-wrapper">
      {tasks.map((task) => (
        <Task key={task.id} data={task} tasks = {tasks}/>
      ))}
    </div>
  );
}
