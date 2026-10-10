
"use client";

import { useState } from "react";

export default function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}) {
  const [lastSelected, setLastSelected] = useState(null);

  function handleToggle(id) {
    setLastSelected(id);
    onToggleTask(id);
  }

  function handleDelete(id) {
    setLastSelected(null);
    onDeleteTask(id);
  }

  // Conditional rendering for an empty task list
  if (tasks.length === 0) {
    return (
      <div className="empty-message">
        <span>📋</span>
        <h3>No tasks to display</h3>
        <p>Add a new task or choose a different filter.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={
            task.completed
              ? "task-item completed"
              : "task-item"
          }
        >
          <label className="task-label">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggle(task.id)}
            />

            <span>{task.text}</span>
          </label>

          <div className="task-actions">
            {lastSelected === task.id && (
              <span className="selected-indicator">
                Updated
              </span>
            )}

            <button
              className="delete-btn"
              onClick={() => handleDelete(task.id)}
              aria-label={`Delete ${task.text}`}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
