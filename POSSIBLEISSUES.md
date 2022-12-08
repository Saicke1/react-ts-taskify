# Here are th issues that I noted that I faced

### 1. Die unterschiedliche weiße der Props Übergabe

Eine Variante wäre:
const InputField = ({ todo, setTodo, handleAdd } : Props) => {

Die andere Variante wäre:
const TodoList: React.FC<Props> = ({todos, setTodos}) => {

Ein Mix aus diesen Varianten führt zu Problemen!
Also es ist nicht möglich es so zu schreiben:
const Funktionsname: React.FC = ({todos, setTodos} : Props) => {