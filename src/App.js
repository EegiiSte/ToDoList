import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import ToDo from "./ToDo";
import ToDoList from "./ToDoList";

const App = () => {
  // const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <Counter /> */}
      <ToDo />
      {/* <ToDoList /> */}
    </div>
  );
};
export default App;
