import { useState } from "react";
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa'
import '../../styles/task.css'

export default function Task(props) {
  const createdAt = new Date(props.data.createdAt);
  const [description, setDescription] = useState(props.data.description);

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3333/task/${props.data.id}`,
        {
          method: "DELETE",
        }
      );

      console.log(response);
      window.location = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async () => {};

  const handleComplete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3333/task/complete/${props.data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      window.location = "/";
    } catch (err) {
      console.log(err);
    }
  };

  const status = JSON.stringify(props.data.completed);
  
  const style = status === 'false' ? 'task-description' : 'task-description-completed'

  return (
    <div className="task">
      <p className={style}>{props.data.description}</p>
      <p className="task-date">{createdAt.getDay() + "/" +createdAt.getMonth() + "/" + createdAt.getFullYear()}</p>
      
      <button type="button" value="" onClick={handleEdit}> {<FaEdit/>}</button> 
      <button type="button" value="" onClick={handleComplete}> {<FaCheck/>} </button>
      <button type="button" value="" onClick={handleDelete}>{<FaTrash/>}</button> 
    </div>
  );
}
