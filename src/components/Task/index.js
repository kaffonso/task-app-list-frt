import { FaTrash, FaEdit } from 'react-icons/fa'
import '../../styles/task.css'

export default function Task(props) {
  const createdAt = new Date(props.data.createdAt);
  const description = props.data.description
  // const [description, setDescription] = useState(props.data.description);

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
      window.location = '/'

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
      window.location = '/'

    } catch (err) {
      console.log(err);
    }
  };

  const status = JSON.stringify(props.data.completed);
  
  const task_style = status === 'false' ? 'task' : 'task task-completed'
  const btn_style = status === 'false' ? 'task-btn' : 'task-btn-disabled'
  const task_check = status === 'false' ? false : true

  return (
    <div className={task_style} >
      <input type="checkbox" className="task-check" onChange={handleComplete} checked={task_check} />
      <p className="task-description" onClick={handleComplete}>{description}</p>
      <button className={btn_style} type="button" value="" onClick={handleEdit}> {<FaEdit/>}</button> 
      <p className="task-date">{createdAt.getDay() + "/" +createdAt.getMonth() + "/" + createdAt.getFullYear()}</p>
      <button className="task-btn" type="button" value="" onClick={handleDelete}>{<FaTrash/>}</button> 
    </div>
  );
}
