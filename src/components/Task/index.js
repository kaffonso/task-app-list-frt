import { useState } from "react";
import './styles.css'

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

  return (
    <div className="task">
      <p className="task-description">{props.data.description}</p>
      <p className="task-date">{createdAt.getDay() +
          "/" +
          createdAt.getMonth() +
          "/" +
          createdAt.getFullYear()}
      </p>
      <p className="task-status">{status}</p>
      <input type="button" value="Delete" onClick={handleDelete} />
      <input type="button" value="Edit" />
      <input type="button" value="Complete" onClick={handleComplete} />
    </div>
  );
}
