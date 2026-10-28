export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export function addTask(tasks: readonly Task[], title: string): Task[] {
  const trimmed = title.trim();
  if (trimmed === "") return [...tasks];
  return [...tasks, { id: String(tasks.length + 1), title: trimmed, done: false }];
}

export function toggleTask(tasks: readonly Task[], id: string): Task[] {
  return tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t));
}
