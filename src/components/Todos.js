import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Icon } from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash'
import {edit2} from 'react-icons-kit/feather/edit2'
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

export const Todos = ({handleEditClick, editFormVisibility}) => {
  const dispatch = useDispatch();

  const todos = useSelector((state)=>state.operationsReducer);
  return todos.map((todo)=>(
    <div key={todo.id} className='todo-box'>
        <div className='content'>
            {editFormVisibility===false&&(
              <input type="checkbox" checked={todo.completed}
              onChange={()=>dispatch(handleCheckbox(todo.id))}></input>
            )}
            <p className='todoText' style={todo.completed===true?{border:'1px solid rgb(41, 189, 51)',padding:'5px'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>
        </div> 
        
        <div className='actions-box'>
              {editFormVisibility===false&& (
                <>
                  <span onClick={()=>handleEditClick(todo)}><Icon className='icon' icon={edit2}/></span>
                  <span onClick={()=>dispatch(removeTodo(todo.id))}><Icon className='icon icon-delete' icon={trash}/></span>
                </>
              )}
        </div>
    </div>
  ))
}
