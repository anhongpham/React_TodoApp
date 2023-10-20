import React from 'react';
import './App.css';

function App() {

  // add usestates to save input and todos
  const [input, setInput] = React.useState('')
  const [todos, setTodos] = React.useState([])
 

  // When the component mounts, fetch todos from local storage


  // addTodo Function
  const addTodo = () => {
    if(input) {
      const newTodo = [...todos, input]
      setTodos(newTodo)
      setInput('')
    }
  }
  

  // Remove Todo Function
  const removeTodo = (index) => {
    const newTodo = [...todos]
    newTodo.splice(index, 1)
    setTodos(newTodo)
  }
 

  //create a UI with
  return (
    <div className="App">
      <h1>Simple To-Do List</h1>
      <div className="todoadd">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='add input here'/>
        <button onClick={addTodo} >Add Todo</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;