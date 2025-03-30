// To do list needs to do the things i ned
// 1. a way to type a new item
// 2. a way to read that new item (string) and put it in an array
// 3. a way to list out that array
// 4. a way to rearrange items
// 5. a way to delete items from that array

//imports the useState Hook from react.
// useState accepts an initial state

// returns two values:
// The current state.
// A function that updates the state.

//import { useState } from "react";
// function FavoriteColor() {
// const [color, setColor] = useState("");}
import React, { useState } from "react";

//a function that holds an array in a value/type that can not be changed ie. a string
function ToDoList() {
  //tasks is an array of strings
  //setTasks is a setter function used to dynamically update tasks
  //useState to update the tasks
  const [tasks, setTasks] = useState([
    // "Eat Breakfast",
    // "Take a shower",
    // "Walk the cats",
  ]);

  // a state variable called newTask that will be the input for the user a text box
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    //changes the text
    setNewTask(event.target.value);
  }
  //adds tasks into the task array if the inputfield is not empty
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((element, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To Do list</h1>
      <div>
        <input
          //an input that becomes the newTask variable
          //uses the onChange function to dynamically update the input newTask and show that to the user
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        {/* button that runs the function addTask when clicked */}
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {/* dynamic variable that lists the tasks inside the array task in order of its index location */}
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text"> {task} </span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="up-button" onClick={() => moveTaskUp(index)}>
              UP
            </button>
            <button className="down-button" onClick={() => moveTaskDown(index)}>
              DOWN
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
