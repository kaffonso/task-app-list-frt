export default function Task(props){
  const createdAt = new Date(props.data.createdAt)


  const handleDelete = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`http://localhost:3333/task/${props.data.id}`, {
        method: "DELETE"
      });

      console.log(response)
      window.location = '/'

    } catch (error) {
      console.error(error)
    }
  }

  const handleEdit = async () => {

  }

  const handleComplete = async () => {

  }

  return(
    <div className="task">
      <p className="task-description">{props.data.description}</p>
      <p> {createdAt.getDay() + '/' + createdAt.getMonth() + '/' + createdAt.getFullYear()} </p>
      <input type="button" value="Delete" onClick={handleDelete}/>
      <input type="button" value="Edit" />
      <input type="button" value="Complete" onClick={handleComplete}/>
    </div>
  )
}