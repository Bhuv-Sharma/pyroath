
"use client";

import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (task.trim() === "") {
      return;
    }

    // Send the new task to the parent component
    onAddTask(task.trim());

    // Clear the text field after adding a task
    setTask("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit" className="add-btn">
        + Add Task
      </button>
    </form>
  );
}
