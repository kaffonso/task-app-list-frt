import { FaTrash, FaEdit, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "../../styles/task.css";

export default function Task(props) {
  const createdAt = new Date(props.data.createdAt);
  const day = createdAt.getDate();
  const month = createdAt.getMonth() + 1;
  const year = createdAt.getFullYear();
  const [description, setDescription] = useState(props.data.description);
  const status = props.data.completed;
  const id = props.data.id;
  const tasks = props.tasks;
  const setTasks = props.setTasks;
  const setUpdate = props.setUpdate;

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:3333/task/${id}`, {
        method: "DELETE",
      });

      console.log(response);
      // show all tasks except that one I deleted
      setTasks(tasks.filter((tasks) => tasks.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleComplete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3333/task/complete/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // this setUpdate uses a random number everutime
      // triggering the useEffect on the parent component, forcing to update the list
      setUpdate(Math.random);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      const body = { description };
      const response = await fetch(`http://localhost:3333/task/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      setUpdate(Math.random);
      console.log(response.status);

      if( response.status === 400){
        window.location = '/'
      }

    } catch (err) {
      console.log(err)
    }
  };

  const handleOpenModal = async () => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };

  const handleCloseModal = () => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
  };

  const task_style = status === false ? "task" : "task task-completed";
  const btn_style = status === false ? "task-btn btn-edit" : "task-btn-disabled";

  return (
    <>
      <div className={task_style}>
        <input
          type="checkbox"
          className="task-check"
          placeholder="Edit task"
          onChange={handleComplete}
          checked={status}
        />
        <p className="task-description" onClick={handleComplete}>
          {description}
        </p>
        <button className={btn_style} type="button" onClick={handleOpenModal}>
          {<FaEdit size={16} title="Edit" />}
        </button>
        <p className="task-date">{day + "/" + month + "/" + year}</p>
        <button className="task-btn btn-delete" type="button" onClick={handleDelete}>
          {<FaTrash size={15} title="Delete" />}
        </button>
      </div>

      <div id={id} className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <p>Edit Task</p>
            <span className="close" onClick={handleCloseModal}>
              <FaTimes size={20}/>
            </span>
          </div>
          <div className="modal-input">
            <form method="post" onSubmit={handleEdit} id="form-edit">
              <input
                type="text"
                id="edit-task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <button type="submit" id="btn-edit" onClick={handleCloseModal}>
                <FaEdit size={20} title="Edit" /> Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
