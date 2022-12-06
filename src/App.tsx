import React from 'react';
import './App.css';

/* let name : string; name = "Sarah";*/
/* let age : number; */
/* let VarWithTwoDiffTypes : string | number; */
/* let whatEver = any; das definiert einen any Typ */
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

function App() {
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
