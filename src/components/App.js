import React, { useState } from "react";

import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDelete = (text) => {
    const updatedTasks = tasks.filter(task => task.text !== text);
    setTasks(updatedTasks);
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  }

  const handleTaskSubmit = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  const getFilteredTasks = () => {
    return selectedCategory === "All" 
      ? tasks 
      : tasks.filter(task => task.category === selectedCategory);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onSelectCategory={handleCategorySelect} 
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== "All")} 
        onTaskFormSubmit={handleTaskSubmit} 
      />
      <TaskList tasks={getFilteredTasks()} onDelete={handleDelete} />
    </div>
  );
}

export default App;
