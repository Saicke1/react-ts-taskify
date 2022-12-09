# My follow up for this project

### 1. Create the app

https://create-react-app.dev/docs/adding-typescript/
npx create-react-app my-app --template typescript

### 2. Delete unnecessary files and lines

setupTests.ts
reportWebVitals.ts
logo.svg
App.test.tsx
favicon.ico
logo192.png
logo512.png
manifest.json
robots.txt

- lösche in index.tsx die reportWebVitals
- lösche in App.tsx den import der logo.svg und den inhalt des Div-Containers "App"
- lösche den kompletten Inhalt aus App.css raus
- lösche in index.html die refernce raus:
<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

### 3. Push die App in Github

- erstelle deinen ersten Commit
- erstelle einen Repository in Github und kopiere den Link
- git remote add origin XXX(den link hier einfügen)
- git push -u origin master

### 4. Style die App

- in App.tsx änder die Funktion in eine Arrow Funktion und deklariere sie:
const App: React.FC = () => {}
FC = Functional Component
- erstelle einen Span: span.header
<span className="heading">Tasfkiy</span>
- importiere die Googe Font Neucha
Suche nach: Google Font Neucha
importiere sie in App.css in Zeile 1
- füge zudem in App.css folgendes hinzu:
.App{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2f74c0;
    font-family: "Neucha", cursive;
}

.heading{
    text-transform: uppercase;
    font-size: 40px;
    margin: 30px 0;
    color: white;
    z-index: 1;
    text-align: center;
}

@media (max-width: 800px) {
    .heading{
        margin: 15px 0;
        font-size: 35px;
    }
}

### 5. Erstelle ein Input Field mit Submit Button

- erstelle einen neuen Ordner "components" in src Folder
- erstelle dort eine neue Dateil InputField.tsx
- in der Datei erstelle ein Funktionsgrundgerüst mit rafce
- importiere diese Komponente in App.ts um zu sehen, dass sie zu sehen ist
- bei InputField.ts änder den div in ein form tag um und gebe den classname "input"
- in dem form tag schreibe folgendes Input field rein:
<input type='input' placeholder='Enter a task' className='inputBox'/>
- dadrunter den Submit Button:
<button className='inputSubmit' type='submit'>GO!</button>

### 6. Style das Input field mit Button

- erstelle in dem Ordner "components" eine neue Datei: styles.css
- importiere diese css Datei in deine InputField.ts Datei: import "./styles.css";
- style alles mit dem folgenden code:
.input{
    display: flex;
    width: 90%;
    position: relative;
    align-items: center;
}

.inputBox{
    width: 100%;
    border-radius: 50px;
    padding: 20px 30px;
    font-size: 25px;
    border: none;
    transition: 0,2s;
    box-shadow: insent 0 0 5px black;
}

.inputBox:focus{
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outline: none;
}

.inputSubmit{
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 12px;
    border-radius: 50px;
    right: 0px;
    border: none;
    font-size: 15px;
    background-color: #2f74c0;
    color: white;
    transition: 0.2s all;
    box-shadow: 0 0 10px black;
}

.inputSubmit:hover{
    background-color: #388ae2;
}

.inputSubmit:active{
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
}

### 7. Erstelle a State

- importiere useState in App.tsx
- erstelle ein useState in App.tsx und deklariere den Typ dieses states:
const [todo, setTodo] = useState<string>("");
- trage diesen State als Prop beim InputField ein:
<InputField todo={todo} setTodo={setTodo}/>
- trage den prop beim Inputfield.tsx ein:
const InputField = ({ todo, setTodo}) => {....
- erstelle ein interface in InputField.tsx außerhalb der Funktion, wo diese beiden props definiert werden:
interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;  <<< dies kann man sich kopieren vom state selbst, wenn man die Maus drüber hält.
}
- gebe dieses Interface bei den Props an, damit diese definiert werden:
const InputField = ({ todo, setTodo} : Props) => { ....
ODER
const InputField: React.FC<Props> = ({ todo, setTodo}) => { ....
- gib dem input den value des todo: value={todo}
- gibt dem input ein onChange mit setTodo: onChange={(e) => setTodo(e.target.value)}
- console log dies in App.tsx um zu sehen, ob dies funktioniert: console.log(todo);
- entferne danach das console log wieder

### 8. Erstelle eine reuseable todo interface

- erstelle im Ordner src eine neue Datei model.ts <<< es muss eine normale ts file sein
- erstelle in dem model.ts ein interface mit den typen für ein todo:
export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}
- erstelle in App.tsx ein neues State mit todos:
const [todos, setTodos] = useState([]);
- gib dem state den Type vom Model und importiere dadurch das model:
...useState<Todo>([]);
- füge eine handleAdd Funktion hinzu, um todos hinzuzufügen in das state:
const handleAdd = () => {}
- füge diese Funktion als Prop in das Input field ein bei App.tsx: handleAdd={handleAdd} 
- füge diese Funktion bei InputField.tsx als Prop hinzu:
handleAdd: () => void; <<< da die Funktion noch leer ist, wird dies so im interface props geschrieben
- füge es als prop in der Funktion von InputField.tsx ein: ({ todo, setTodo, handleAdd } : Props)
- füge die Funktion als onSubmit in die form ein: <form className='input' onSubmit={handleAdd}>
- füge in App.tsx bei handleAdd ein event preventDefault ein und definiere das event:
const handleAdd = (e: React.FormEvent) => {e.preventDefault();}
- definiere das event ebenfalls in den props beim InputField.tsx

### 9. erstelle die setTodos Logik

- erstelle eine Funktion in dem handleAdd, um zu prüfen, ob was bereits im todo steht und das neue todo hinzuzufügen:
if(todo){ setTodos([...todos, {id:Date.now(), todo:todo, isDone:false}]) }
- statt todo:todo kann man auch nur todo schreiebn, da sie dasselbe sind
- füge danach anbei, dass das input field gelerrt werden muss, nachdem das todo hinzugefügt wurde: setTodo("");
- console log todos ion App.tsx um zu prüfen, ob es funktioniert und lösche es danach wieder

### 10. ertelle ein useRef, damit das Enter beim Todo Eintrag funktioniert und den dunklen Hintergrund entfernt

- füge beim Inoutfield.tsx bei handleAdd ebenfalls ein e event hinzu: <form className='input' onSubmit={(e) => handleAdd(e)}>
- prüfe in App.tsx, ob du die todos auch sehen kannst: {todos.map((t) => (<li>{t.todo}</li>))}
- erstelle in inputField.tsx ein useRef mit null als start value und dem typ <HTMLInputElement>: const inputRef = useRef<HTMLInputElement>(null);
- füge den ref ins input tag ein: ref={inputRef}
- füge in den form tag das useRef ein: <form className='input' onSubmit={(e) => {handleAdd(e); inputRef.current?.blur();}}>
- prüfe ob es funktioniert und lösche danach die liste der todos aus App.tsx

### 11. Erstelle den todoList Komponent

- erstelle eine neue Component Datei TodoList.tsx mit rafce für das Grundgerüst
- definiere bei der funktion :React.FC, damit es als Funktion erkannt wird und importiere sie in unser App.tsx
- gib dem div in TodoList.tsx den classname todos und importiere die sytles.css Datei
- importiere {todos, setTodos} als Prop in TodoLost.tsx
- definiere die Props mit einem interface in TodoList: ({todos, setTodos}: Props)
interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
- importiere das model Todo, damit es definiert ist: import { Todo } from '../model';
- gebe die Props dann in der Funktion an: const TodoList: React.FC<Props> = ({todos, setTodos}) => {
- füge diese Props in App.tsx als Prop in den Component: <TodoList todos={todos} setTodos={setTodos}/>
- style die todo Liste:
.todos{
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    flex-wrap: wrap;
}
- erstelle eine neue Komponente SingleTodo.tsx mit rafce
- installiere React Icons: https://react-icons.github.io/react-icons/
npm install react-icons

### 12. Passing Props zu SingleTodo.tsx

- füge bei TodoList.tsx die Komponente SingleTodo mit den Props beim map ein:
{todos.map(todo => ( <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/> ))}
- Empfange die Props in SingleTodo.tsx:
type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo, todos, setTodos}: Props) => {....
- änder den div in ein form tag um bei SingleTodo.tsx
- gib diesem Form tag eine Klasse: className='todosSingle
- erstelle in diesem folgenden tag: <span className="todosSingleText"></span>
- fülle in diesem span {todo.todo} ein und prüfe ob due die todos siehst

### 13. style und vervollständige SingleTodo.tsx

- füge in dem Form Tag unter dem Span neue Spans ein:
<div>
    <span className="icon"></span>
    <span className="icon"></span>
    <span className="icon"></span>
</div>
- suche dir auf https://react-icons.github.io/react-icons/icons?name=bs die icons für Edit, Delete und Done raus
- importiere sie in SingleTodo.tsx: import { XXIconName } from "react-icons/XX"; <<< Wichtig ist, dass die ersten zweit Buchstaben vom Icon Namen am ende nach dem Slash kommen
- am ende sieht das so aus:
<div>
    <span className="icon"> <AiFillEdit/> </span>
    <span className="icon"> <AiFillDelete/> </span>
    <span className="icon"> <MdOutlineDone/> </span>
</div>
- importiere styles.css in SingleTodo.tsx und style die Todos:
.todosSingle{
    display: flex;
    width: 29.5%;
    border-radius: 5px;
    padding: 20px;
    margin-top: 15px;
    background-image: url("https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg");
}

.todosSingleText{
    flex: 1;
    padding: 5px;
    border: none;
    font-size: 20px;
}

.todosSingleText:focus{
    outline: none;
}

.icon{
    margin-left: 10px;
    font-size: 25px;
    cursor: pointer;
}

@media (max-width: 1100px) {
    .todosSingle {
      width: 45%;
    }
}

@media (max-width: 700px) {
    .input {
      width: 95%;
    }
    .todos {
      width: 95%;
      flex-direction: column;
    }
    .todosSingle {
      width: 95%;
      margin-bottom: 10px;
    }
}

### 14. Gebe den Icons eine Funkionalität

- gebe dem Done Icon eine onClick Funktion mit dem Argmuent todo.id: onClick={() => handleDone(todo.id)}
- erstelle die handleDon Funktion und definiere den Parameter id: const handleDone = (id: number) => {}
- vergleiche in dieser Funktion die ids und setze bei gleicher id die isDone boolean die andere boolean um
setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone} : todo));
- erstelle in dem Form Tag ein Vergleich, ob er das todo normal anzeigen soll oder durchgestrichen <s> tag, wenn is Done true ist
- füge dann den span vom todo entsprechend ein, dass es so aussieht:
{todo.isDone ?(<s className="todosSingleText"> {todo.todo} </s>)
: (<span className="todosSingleText"> {todo.todo} </span>)}

- erstelle für den DeleteIcon ein handleFunktion mit der ID als Parameter
- in diesem handle Delete Funktion kommt eine filter funktion rein: setTodos(todos.filter((todo) => todo.id !== id))

- erstelle ein State für das editieren: const [edit, setEdit] = useState<boolean>(false);
- erstelle einen zweiten State um den Text des todos zu editieren: const [editTodo, setEditTodo] = useState<string>(todo.todo);
- erstelle ein onClick beim EditIcon, der zwei booleans prüft von edit und isDone:
onClick={() => {if(!edit && !todo.isDone){setEdit(!edit)}}}
- erstelle einen neuen vergleich in dem Form Tag, wo er ein input field anzeigen soll, wenn edit true ist oder ganz normal den todo, wenn edit false ist:
{edit ? (<input/>) : (todo.isDone ? (<s className="todosSingleText"> {todo.todo} </s>)
: (<span className="todosSingleText"> {todo.todo} </span>))}
- füge in dem neuen input field den value von editTodo ein: value={editTodo}
- füge in dem neuen input field den onChange von setEditTodo ein: onChange={(e) => setEditTodo(e.target.value)}
- füge in dem neuen input field ein ClassName ein: className="todosSingleText"
- füge in der tag Form ein onSubmit ein, wo das event und die id weiter gegeben wird: onSubmit={(e) => handleEdit(e, todo.id)}
- erstelle die Funktion dazu mit den definierten Argumenten: const handleEdit = (e: React.FormEvent, id: number) => {}
- erstelle in dieser Funktion den Abgleich und das update des todos und setze das edit auf false:
setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo} : todo)));    setEdit(false);

### .15 Style das Edit Todo Feld

- create a useRef in SingleTodo.tsx: const inputRef = useRef<HTMLInputElement>(null);
- füge dies in dem input field wo der todo editiert wird, ein: ref={inputRef}
- erstelle ein useEffect, bei dem der cursor sofort im Edit feld ist, sobald man auf editieren drückt:
useEffect(() => {inputRef.current?.focus();}, [edit]);