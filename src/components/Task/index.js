export default function Task(props){

  const createdAt = new Date(props.data.createdAt)

  return(
    <div className="task">
      <p className="task-description">{props.data.description}</p>
      <p> {createdAt.getDay() + '/' + createdAt.getMonth() + '/' + createdAt.getFullYear()} </p>
    </div>
  )
}