# My follow up for this project

### 1. Create the app

https://create-react-app.dev/docs/adding-typescript/
npx create-react-app my-app --template typescript

### 2. Delete unnecessary files

setupTests.ts
reportWebVitals.ts
logo.svg
App.test.tsx

- lösche in index.tsx die reportWebVitals
- lösche in App.tsx den import der logo.svg und den inhalt des Div-Containers "App"
- lösche den kompletten Inhalt aus App.css raus

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

### 7. create a State