
"use client";

import { useState } from "react";

export default function TaskFilter({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = ["all", "active", "completed"];

  function handleFilterChange(filter) {
    setSelectedFilter(filter);

    // Inform the parent about the selected filter
    onFilterChange(filter);
  }

  return (
    <div className="filter-container">
      {filters.map((filter) => (
        <button
          key={filter}
          className={
            selectedFilter === filter
              ? "filter-btn selected"
              : "filter-btn"
          }
          onClick={() => handleFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
