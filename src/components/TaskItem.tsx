import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import { Calendar } from "lucide-react";
import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
  onEditTask: (task: Task) => void;
}

export default function TaskItem({
  task,
  onToggleTask,
  onDeleteTask,
  onEditTask,
}: TaskItemProps) {

  const getCategoryColors = (category: string) => {
    switch (category) {
      case "👤 personal":
        return "bg-yellow-100 text-black dark:bg-yellow-500 dark:text-white";
      case "💼 work":
        return "bg-blue-200 text-black dark:bg-blue-800 dark:text-white";
      case "🔥 urgent":
        return "bg-red-200 text-black dark:bg-red-800 dark:text-white";
      default:
        return "bg-slate-200 text-black dark:bg-slate-800 dark:text-white";
    }
  };
  return (
    <>
      <div
        className={`flex flex-col sm:flex-row sm:justify-between items-stretch sm:items-center gap-4 p-4 rounded-lg shadow-md border mt-4 py-6 transition-all duration-200 bg-white dark:bg-slate-700 ${task.completed ? "border-slate-300 opacity-75" : "border-transparent"}`}
      >
        <div className="flex-1">
          <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="completionBtn"
              className="mt-1 cursor-pointer size-5 rounded-full border-2 border-slate-300 accent-blue-500"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <div className="flex-1">
              <p
                className={`font-semibold text-xl leading-tight ${task.completed ? "line-through text-slate-400" : "text-slate-800 dark:text-white"}`}
              >
                {task.title}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                task.completed
                  ? "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  : getCategoryColors(task.category)
              }`}
            >
              {task.category}
            </span>
            {task.date && (
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                  task.completed
                    ? "bg-slate-200 text-black dark:bg-slate-800 dark:text-white"
                    : "bg-green-200 text-black dark:bg-green-800 dark:text-white"
                }`}
              >
                <Calendar size={14} />
                {task.date}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={() => onEditTask(task)}
            className={`${task.completed ? "text-slate-400" : "text-slate-600 dark:text-slate-300"} hover:text-blue-500 transition-colors cursor-pointer`}
          >
            <Pencil />
          </button>
          <button
            className={`${task.completed ? "text-slate-400" : "text-slate-600 dark:text-slate-300"} hover:text-red-500 transition-colors cursor-pointer`}
            onClick={() => onDeleteTask(task.id)}
          >
            <Trash />
          </button>
        </div>
      </div>
    </>
  );
}
