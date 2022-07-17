import { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import Task from "../Task";
import "../../styles/taskWrapper.css";

export default function TaskWrapper(props) {
  const [tasks, setTasks] = useState([]);
  const [update, setUpdate] = useState([]);
  const updateViaInput = props.update

  const fecthAll = async () => {
    try {
      const response = await fetch("https://task-list-app-bck.herokuapp.com/tasks");
      const data = await response.json();

      data.sort((a, b) => a.completed / b.completed); //order task by completed

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthCompleted = async () => {
    try {
      const response = await fetch("https://task-list-app-bck.herokuapp.com/tasks/completed");
      const data = await response.json();

      console.log(data);

      data.sort((a, b) => a.id + b.id); //order task by id

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fecthUncompleted = async () => {
    try {
      const response = await fetch("https://task-list-app-bck.herokuapp.com/tasks/uncompleted");
      const data = await response.json();

      data.sort((a, b) => a.id + b.id); //order task by id

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await fetch(`https://task-list-app-bck.herokuapp.com/tasks`, {
        method: "DELETE",
      });

      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fecthAll();
  }, [update, updateViaInput]);

  const no_tasks_style = tasks.length === 0 ? "no-tasks" : "no-tasks-disabled";
  const task_counter_style = tasks.length === 0 ? "task-counter task-counter-disabled" : "task-counter";

  return (
    <>
      <div className="task-actions">
        <div className="task-filters">
          <span onClick={fecthAll}> All </span>
          <span onClick={fecthUncompleted}> Pending </span>
          <span onClick={fecthCompleted}> Completed </span>
        </div>
        <div className="task-handles">
          <button onClick={handleDeleteAll}> Delete All </button>
        </div>
      </div>

      <div className="task-wrapper">
        {tasks.map((task) => (
          <Task
            key={task.id}
            data={task}
            tasks={tasks}
            setTasks={setTasks}
            setUpdate={setUpdate}
          />
        ))}
        <p className={no_tasks_style}> All Done &nbsp; {<FaCheck/>}</p>
      </div>

      <div className={task_counter_style}>
        <p>Task: {tasks.length}</p>
      </div>
    </>
  );
}
