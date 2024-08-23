// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App





import { useState , useRef } from "react";

const App = ()=> {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);
    todoVal.current.value = ""
  }



  const deleteTodo = (index)=>{
    console.log("todo deleted" ,index);
    todo.splice(index , 1);
    setTodo([...todo]);
  }





const editTodo  = (index)=>{

  console.log("todo edited" ,index);

  const editVal = prompt("enter value");

  todo.splice(index ,1, editedVal);
  
  setTodo([...todo]);

}




return (
  <>
  <h1 className="text-center">Todo App</h1>

  <form onSubmit={addTodo}>

    <input type="text" placeholder="enter todo" ref={todoVal} />

    <button type="submit">click</button>
  </form>
  <ul>





    {todo.map((item , index)=>{

      return <div key={index}>

        <li >{item}</li>

        <button onClick={()=> deleteTodo(index)}>delete</button>
        <button onClick={()=> editTodo(index) }>edit</button>


        



      </div>
    })}
  </ul>
  
  </>
)
}

export default App