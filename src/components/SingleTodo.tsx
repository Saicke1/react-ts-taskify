import React from 'react';
/* import { AiFillEdit } from "react-icons/bs";
import { AiFillDelete } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/bs"; */
import { Todo } from '../model';

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
        <span className="icon"></span>
        <span className="icon"></span>
        <span className="icon"></span>
      </div>
    </form>
  )
}

export default SingleTodo;
