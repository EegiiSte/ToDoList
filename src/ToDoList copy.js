import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([""]);
  const [input, setInput] = useState("");
  const handleADD = () => {
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  console.log(input);
  return (
    <div style={{ backgroundColor: "#ADD8E6" }}>
      <div>This is ToDo component</div>
      <div style={{ margin: " 10px" }}>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Add Task"
          value={input}
        ></input>
        <button onClick={handleADD}>Add</button>
      </div>
      {/* <div>{input}</div> */}
      {tasks.map((task) => {
        return <div type="checkbox">{task}</div>;
      })}
    </div>
  );
};

export default ToDoList;
