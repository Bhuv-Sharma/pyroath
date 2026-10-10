
import Link from "next/link";

export default function Home() {
  return (
    <section className="home-container">
      <div className="home-card">
        <div className="home-icon">✓</div>

        <h1>Welcome to My To-Do List</h1>

        <p>
          Stay organized and manage your daily tasks easily.
          Add tasks, mark them as completed, and track your
          progress all in one place.
        </p>

        <Link href="/tasks" className="primary-btn">
          Get Started →
        </Link>
      </div>
    </section>
  );
}
