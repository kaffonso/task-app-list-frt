import { useState } from "react";
import InputTask from "../../components/InputTask";
import TaskWrapper from "../../components/TaskWrapper";

import '../../styles/app.css'

export default function Home(){
  const [update, setUpdate] = useState()
 
  return(
    <div className="App">
      <div className="container">
        <h1>TODO LIST APP</h1>
        <InputTask setUpdate={setUpdate}/>
        <TaskWrapper update={update}/>
      </div>
    </div>
  )
}