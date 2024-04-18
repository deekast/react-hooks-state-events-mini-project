import React, { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // const handleDelete = (text) => {
  //   const undeletedTasks = tasks.filter(taskItem = > taskItem.text !==text)
  //   setTasks([undeletedTasks])
  // };
  



  const handleTaskFormSubmit = (newTask) => {
    // console.log("New task submitted:", newTask);
    // console.log({ tasks });
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);



  // Filter tasks based on the selected category
  const filteredTasks = selectedCategory === "All" 
    ? TASKS 
    : TASKS.filter(task => task.category === selectedCategory);

  return (
    <div className="App">
      <h2>My tasks</h2>
      {/* Pass categories and callback function to CategoryFilter */}
      <CategoryFilter categories={CATEGORIES} onCategoryChange={handleCategoryChange} />
      <NewTaskForm categories={CATEGORIES} tasks={tasks} setTasks={setTasks} />
      {/* Pass filtered tasks to TaskList */}
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
