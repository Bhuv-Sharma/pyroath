
export default function AboutPage() {
  return (
    <section className="about-container">
      <div className="about-card">
        <h1>About My To-Do List</h1>

        <p>
          My To-Do List is a simple task management
          application developed using Next.js and React.
        </p>

        <h2>Features</h2>

        <ul>
          <li>Add new tasks</li>
          <li>Mark tasks as completed</li>
          <li>Delete tasks</li>
          <li>Filter active and completed tasks</li>
          <li>Track task statistics</li>
        </ul>

        <h2>Technologies Used</h2>

        <p>
          This project uses HTML, CSS, JavaScript,
          React, and Next.js.
        </p>

        <h2>Purpose</h2>

        <p>
          This application was created for CPAN-144
          Assignment 1 to demonstrate React components,
          props, state management, event handling,
          and conditional rendering.
        </p>
      </div>
    </section>
  );
}
