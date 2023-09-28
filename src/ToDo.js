import React, { useState } from "react";
import "./App.css"; // Import your CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, { text: inputTask, status: "todo" }]);
      setInputTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // const todoTasks = tasks.filter((task) => task.status === "todo");/

  const updateStatus = (index, newStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = newStatus;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 id="headLine">ToDo List App</h1>
      <div className="sectionBoxAdd">
        <div className="inputTaskContainer">
          <h1 id="headLine">Add Item</h1>
          <input
            type="text"
            placeholder="Enter a task"
            value={inputTask}
            onChange={(e) => setInputTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
      </div>
      <div className="secondContainer">
        <div className="sectionBoxList">
          <h2 className="headLine">To Do List </h2>
          <div className="listContainer">
            {tasks.map((task, index) => {
              if (task.status === "todo") {
                return (
                  <div className="listLineBox">
                    <li className="listBox" key={index}>
                      {task.text}
                    </li>
                    <div className="listButtonBox">
                      <button
                        className="startButton"
                        onClick={() => updateStatus(index, "inprogress")}
                      >
                        Start
                      </button>
                      <button
                        class="w3-btn w3-white delButton"
                        onClick={() => removeTask(index)}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="sectionBoxList">
          <h2 className="headLine">in Progress </h2>
          <div className="listContainer">
            {tasks.map((task, index) => {
              if (task.status === "inprogress") {
                return (
                  <div className="listLineBox">
                    <li className="listBox" key={index}>
                      {task.text}
                    </li>
                    <div className="listButtonBox">
                      <button
                        className="startButton"
                        onClick={() => updateStatus(index, "done")}
                      >
                        Done
                      </button>
                      <button
                        class="w3-btn w3-white delButton"
                        onClick={() => removeTask(index)}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
        <div className="sectionBoxList">
          <h2 className="headLine">Completed </h2>
          <div className="listContainer">
            {tasks.map((task, index) => {
              if (task.status === "done") {
                return (
                  <div className="listLineBox">
                    <li className="listBox" key={index}>
                      {task.text}
                    </li>
                    <div className="listButtonBox">
                      <button
                        class="w3-btn w3-white delButton"
                        onClick={() => removeTask(index)}
                      >
                        <i class="glyphicon glyphicon-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
