import type { Task } from "../types";
import { useState } from "react";
import { toast } from "sonner";

interface TaskEditProps {
  task: Task;
  onClose: () => void;
  onSave: (task: Task) => void;
}

export default function TaskEdit({ task, onClose, onSave }: TaskEditProps) {
  const [editedTask, setEditedTask] = useState(task);

  const handleSave = () => {
    if (editedTask.title === "") {
      toast.error("Title is required");
      return;
    }
    onSave(editedTask);
    onClose();
    toast.success("Task updated successfully");
  };
  
  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 transition-opacity duration-300 ease-in-out z-40"
        onClick={onClose}
      />

      <div className="fixed top-0 right-0 h-full w-full sm:w-96 border-2 shadow-xl z-50 flex flex-col bg-white border-slate-400 dark:bg-slate-800 dark:border-slate-500">
        <div className="flex justify-between items-center p-4 sm:p-6 border-b border-slate-400 dark:border-slate-500">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">Edit task</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl cursor-pointer hover:text-gray-700 dark:text-white dark:hover:text-gray-400"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">
              Title
            </label>
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 dark:text-white dark:border-slate-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">
              Category
            </label>
            <select
              name=""
              id=""
              className="border rounded-lg p-2 mt-2 bg-white dark:bg-slate-600 dark:text-white dark:border-slate-500 cursor-pointer"
              value={editedTask.category}
              onChange={(e) =>
                setEditedTask({ ...editedTask, category: e.target.value })
              }
            >
              <option value="👤 personal">👤 Personal</option>
              <option value="💼 work">💼 Work</option>
              <option value="🔥 urgent">🔥 Urgent</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white">
              Date
            </label>
            <input
              type="date"
              value={editedTask.date || ""}
              onChange={(e) =>
                setEditedTask({ ...editedTask, date: e.target.value })
              }
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-600 dark:text-white dark:border-slate-500"
            />
          </div>
        </div>

        <div className="p-4 sm:p-6 border-t flex gap-3 justify-end border-slate-400 dark:border-slate-500">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md cursor-pointer bg-white text-slate-800 border-gray-300 hover:bg-gray-50 dark:bg-slate-600 dark:text-white dark:border-slate-500 dark:hover:bg-slate-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}