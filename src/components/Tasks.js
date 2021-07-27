
//rafce to export arrow func template

//to use state inside a function we use a hook called useState

import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {
   
    return (
        <>
           {tasks.map((task, index)=>(
           <Task key={index} task={task} onDelete={onDelete} onToggle = {onToggle}/>
           ))} 
        </>
    )
}

export default Tasks
