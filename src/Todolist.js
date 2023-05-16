import { useState } from "react";
const Todolist=()=>{
const Input=()=>{
    const [list,setlist]=useState('')
    const [todo,settodo]=useState([])
    const[count,setcount] =useState(0)
    const addlist=(e)=>{
        if(list.length===0){
            e.preventDefault()
        }else{
        setcount(count+1)
        settodo([...todo,list])   
        setlist("")  
    } 
    }

    return(
        <>
                <div className="Todolist">
                    <h1>Todo List</h1>
        <input type="text" value={list} onChange={e=>setlist(e.target.value)}/>
        <button className="btn" onClick={addlist}>Add list</button>
        </div>
       {todo.map((item)=>(
        <div className="list">
           <ul>
            <li><input key={count} type="checkbox"/>
            <label htmlFor="vehicle1">{item}</label>
        <button className="btn">Edit</button>
        <button className="btn" onClick={addlist}>Delete</button>
        </li>
              </ul>
              </div>
       ))}
        </>
    )
} 
    return(
        <Input />
    )
}
export default Todolist;