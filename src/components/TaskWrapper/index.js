import { useState, useEffect } from "react";
import Task from "../Task";

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

  console.log(tasks);

  return (
    <div className="task-wrapper">
      {tasks.map((data) => (
        <Task data={data} />
      ))}
    </div>
  );
}
