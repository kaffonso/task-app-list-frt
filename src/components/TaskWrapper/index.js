import { useState, useEffect } from "react";
import Task from "../Task";
import "../../styles/taskWrapper.css";

export default function TaskWrapper() {
  const [tasks, setTasks] = useState([]);

  const fecthAll = async () => {
    try {
      const response = await fetch("http://localhost:3333/tasks");
      const data = await response.json();

      data.sort((a, b) => a.completed / b.completed); //order task by completed

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthCompleted = async () => {
    try {
      const response = await fetch("http://localhost:3333/tasks/completed");
      const data = await response.json();

      data.sort((a, b) => a.completed / b.completed); //order task by completed

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthUncompleted = async () => {
    try {
      const response = await fetch("http://localhost:3333/tasks/uncompleted");
      const data = await response.json();

      data.sort((a, b) => a.completed / b.completed); //order task by completed

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAll = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3333/tasks`,{
          method: "DELETE",
        }
      );

      const data = await response.json();
      setTasks(data)

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fecthAll();
  }, []);

  return (
    <>
      <div className="task-filters">
        <button onClick={fecthAll}> All </button>
        <button onClick={fecthCompleted}> Done </button>
        <button onClick={fecthUncompleted}> Undone </button>
        <button onClick={handleDeleteAll}> Delete All </button>
      </div>
    
      <div className="task-wrapper">
        {tasks.map((task) => (
          <Task key={task.id} data={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    </>
  );
}
