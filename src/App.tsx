import { useState } from "react";
import { addTask, toggleTask, type Task } from "./tasks";

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  return (
    <main>
      <h1>Tasks</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTasks((prev) => addTask(prev, title));
          setTitle("");
        }}
      >
        <input aria-label="New task" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <label>
              <input type="checkbox" checked={t.done} onChange={() => setTasks((prev) => toggleTask(prev, t.id))} />
              {t.title}
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
