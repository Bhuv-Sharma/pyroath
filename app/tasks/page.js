
"use client";

import { useState } from "react";
import TaskForm from "../../components/TaskForm";
import TaskList from "../../components/TaskList";
import TaskFilter from "../../components/TaskFilter";

export default function TasksPage() {
  // State for all tasks
  const [tasks, setTasks] = useState([]);

  // State for the selected task filter
  const [filter, setFilter] = useState("all");

  // Add a new task
  function addTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  }

  // Toggle a task between completed and active
  function toggleTask(id) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // Delete a task
  function deleteTask(id) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  // Filter the task list based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  // Calculate task statistics
  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const activeCount = tasks.length - completedCount;

  return (
    <section className="tasks-container">
      <div className="tasks-card">
        <div className="section-heading">
          <h1>My Tasks</h1>
          <p>Organize your day, one task at a time.</p>
        </div>

        <TaskForm onAddTask={addTask} />

        <div className="stats-container">
          <div className="stat-box">
            <h3>{tasks.length}</h3>
            <p>Total Tasks</p>
          </div>

          <div className="stat-box">
            <h3>{activeCount}</h3>
            <p>Active</p>
          </div>

          <div className="stat-box">
            <h3>{completedCount}</h3>
            <p>Completed</p>
          </div>
        </div>

        <div className="list-header">
          <h2>Task List</h2>

          <TaskFilter onFilterChange={setFilter} />
        </div>

        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />

        {tasks.length > 0 && activeCount === 0 && (
          <p className="success-message">
            🎉 Great job! You completed all your tasks!
          </p>
        )}
      </div>
    </section>
  );
}
