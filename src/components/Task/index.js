import { FaTrash, FaEdit } from 'react-icons/fa'
import '../../styles/task.css'

export default function Task(props) {
  const createdAt = new Date(props.data.createdAt);
  const description = props.data.description
  const status = props.data.completed;
  const id = props.data.id
  const tasks = props.tasks
  const setTasks = props.setTasks  

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:3333/task/${id}`,
        {
          method: "DELETE",
        }
      );

      console.log(response);
      // show all tasks except that one I deleted
      setTasks(tasks.filter(tasks => tasks.id !== id))

    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async () => {};

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
      props.setUpdate(Math.random)
      console.log(response);

    } catch (error) {
      console.log(error);
    }
  };

  const task_style = status === false ? 'task' : 'task task-completed'
  const btn_style = status ===  false ? 'task-btn' : 'task-btn-disabled'

  return (
    <div className={task_style} >
      <input type="checkbox" className="task-check" onChange={handleComplete} checked={status} />
      <p className="task-description" onClick={handleComplete}>{description}</p>
      <button className={btn_style} type="button" value="" onClick={handleEdit}> {<FaEdit/>}</button> 
      <p className="task-date">{createdAt.getDay() + "/" +createdAt.getMonth() + "/" + createdAt.getFullYear()}</p>
      <button className="task-btn" type="button" value="" onClick={handleDelete}>{<FaTrash/>}</button> 
    </div>
  );
}
