import { useState, useEffect } from "react"

export default function TaskWrapper(){
  
  const fecthAll = async () => {
    try {
      const response = await fetch("http://localhost:3333/tasks")
      console.log(await response.json())

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fecthAll()
  })
  


  return(
    <div className="task-wrapper">

    </div>
  )
}