import React from 'react';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { Todo } from '../model';
import "./styles.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='todosSingle'>
      <span className="todosSingleText">
        {todo.todo}
      </span>
      <div>
        <span className="icon">
            <AiFillEdit/>            
        </span>
        <span className="icon">
            <AiFillDelete/>
        </span>
        <span className="icon">
            <MdOutlineDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleTodo;
