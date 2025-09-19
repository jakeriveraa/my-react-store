import { useState } from "react";

import "./todo.css";


function Todo() {
    const [allTodos,setAllTodos] = useState([]);
    const [todo, setTodo] = useState({
        text:""
    });


function handleInput(e){
    let text = e.target.value;
    let name = e.target.name;

    let copy = {...todo};
    copy[name] = text;
    setTodo(copy);
}

function save() {
    console.log(todo)

    let copy = [...allTodos];
    copy.push(todo);
    setAllTodos(copy);
}
 return (
    <div className="todo">
      <h1>My Shopping List</h1>

      <div>
        <label className="form-label">Item:</label>
       <input onBlur={handleInput} name="text" type="text" className="form-input" />
      </div>

      <div className="controls">
        <button onClick={save} className="btn-save button-43">
          Save Todo
        </button>
      </div>
      <ul className="list">
        {allTodos.map(todo => <li>{todo.text}</li>)}
      </ul>
    </div>
  );
}

export default Todo;