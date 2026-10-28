import { describe, expect, it } from "vitest";
import { addTask, toggleTask } from "./tasks";

describe("tasks", () => {
  it("adds a trimmed task", () => {
    expect(addTask([], "  write tests ")).toEqual([{ id: "1", title: "write tests", done: false }]);
  });

  it("ignores blank titles", () => {
    expect(addTask([], "   ")).toEqual([]);
  });

  it("toggles one task by id", () => {
    const tasks = addTask(addTask([], "a"), "b");
    expect(toggleTask(tasks, "2").map((t) => t.done)).toEqual([false, true]);
  });
});
