import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import '../../styles/inputTask.css'

export default function InputTask() {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(description);
    setDescription(" ");

    try {
      const body = { description };
      const response = await fetch("http://localhost:3333/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      console.log(response);
      window.location = '/'
    } catch (err) {

    }
  };

  return (
    <div className="input-task">
      <form method="post" onSubmit={handleSubmit} id="form-submit">
        <input
          type="text"
          name="task"
          id="input-task"
          placeholder="Add a new task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
       <button type="submit" id="btn-submit">{<FaPlusSquare size={25} title="Add"/>}</button>
      </form>
    </div>
  );
}
