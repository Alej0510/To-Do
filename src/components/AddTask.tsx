import { X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Task } from "../types";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

export default function AddTask({ onAddTask }: AddTaskProps) {
  const [showAddTask, setShowAddTask] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("👤 personal");
  const [date, setDate] = useState("");

  const handleShowTaskCard = () => {
    setShowAddTask(!showAddTask);
  };

  const handleSubmit = () => {
    if (title.trim() === "") {
      toast.dismiss();
      toast.error("Please add a task");
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      category,
      date,
      completed: false,
    };

    onAddTask(newTask);

    setTitle("");
    setCategory("👤 personal");
    setDate("");
  };

  return (
    <>
      <button
        className={`w-full py-4 mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 duration-200 cursor-pointer ${showAddTask ? "hidden" : ""} duration-200`}
        onClick={handleShowTaskCard}
      >
        + Add new task
      </button>

      <div
        className={`p-4 rounded-lg shadow-md mt-4 ${showAddTask ? "" : "hidden"} duration-200 bg-white dark:bg-slate-700`}
      >
        <div className="flex items-center gap-2 justify-between">
          <h2
            className="text-lg font-bold text-black dark:text-white"
          >
            New task
          </h2>
          <button
            className="cursor-pointer text-gray-600 hover:text-gray-300 dark:text-gray-300 dark:hover:text-white"
            onClick={handleShowTaskCard}
          >
            <X size={26} />
          </button>
        </div>

        <input
          type="text"
          placeholder="Add a task"
          className="w-full border rounded-lg p-2 mt-2 focus:outline-none border-slate-300 dark:bg-slate-600 dark:border-slate-500 dark:text-white dark:placeholder-gray-200"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-3 w-full">
          <p
            className="font-bold text-black dark:text-white"
          >
            Category
          </p>
          <p
            className="font-bold text-black dark:text-white"
          >
            Date
          </p>
          <select
            name=""
            id=""
            className="border rounded-lg p-2 mt-2 border-slate-300 dark:bg-slate-600 dark:border-slate-500 dark:text-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="👤 personal">👤 Personal</option>
            <option value="💼 work">💼 Work</option>
            <option value="🔥 urgent">🔥 Urgent</option>
          </select>

          <input
            type="date"
            className="border rounded-lg p-2 mt-2 border-slate-300 dark:bg-slate-600 dark:border-slate-500 dark:text-white"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          className="w-full py-4 mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 duration-200 cursor-pointer"
          onClick={handleSubmit}
        >
          Add task
        </button>
      </div>
    </>
  );
}
