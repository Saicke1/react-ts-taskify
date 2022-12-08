import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Tasfkiy</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

/* let name : string; name = "Sarah";*/
/* let age : number; */
/* let VarWithTwoDiffTypes : string | number; */
/* let whatEver : any; das definiert einen any Typ => nicht empfohlen, da es TS sinnlos macht */
/* let newType : unknown;  Anstelle von Any ist dieser Type empfohlen*/
/* let isLoggedIn : boolean; */
/* let hobbies : string[]; array of objects with strings */
/* let role : [number, string]; can only contain one number and one string in exactly this order*/
/* let person : object; einfachste Variante ein Objekt zu definieren */

/* korrekte Variante ein Objekt zu definieren in TS 
type Person = {
  name: string;
  age?: number; optionaler Eintrag/Property
};

let person : Person = {
  name: "Sarah",
  age: 33,
};*/

/* let LotsOfPeople : Person[]; So definiert man ein array mit Objekten */

/* Wie man eine variable in einer Funktion deklariert
let name : string;
name = "Sarah";
function showName(name : string){
  console.log(name);
}
showName(name); */
/* 
let showMyName : Function; einfache deklarierung einer Funktion */

/* let printName : (name:string) => void; korrekte deklarierung einer Funktion */
/* let printName : (name:string) => never; diese Funktion gibt nichts zurück */
/* 
interface Person {
  name: string;
  age?: number;
};

interface Guy extends Person {
  profession: string;
} */

/* type X = {
  a: string;
  b: number;
}

type Y = X & {
  c: string;
  d: number;
}

let y:Y = {
  a: "Nicole",
  b: 35,
  c: "Sarah",
  d: 33,
} */