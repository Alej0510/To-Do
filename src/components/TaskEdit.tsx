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
        className="fixed inset-0 bg-black/40 transition-opacity duration-300 ease-in-out z-40"
        onClick={onClose}
      />

      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 border-l shadow-xl z-50 flex flex-col`}>
        <div className={`flex justify-between items-center p-4 sm:p-6 border-b`}>
          <h2 className={`text-xl font-semibold `}>Edit task</h2>
          <button
            onClick={onClose}
            className={`text-gray-500 text-2xl cursor-pointer `}
          >
            ✕
          </button>
        </div>

        <div className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <div className="mb-4">
            <label className={`block text-sm font-medium text-gray-700 mb-2`}>
              Title
            </label>
            <input
              type="text"
              value={editedTask.title}
              onChange={(e) =>
                setEditedTask({ ...editedTask, title: e.target.value })
              }
              className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>

          <div className="mb-4">
            <label className={`block text-sm font-medium text-gray-700 mb-2`}>
              Category
            </label>
            <select
              name=""
              id=""
              className={`border rounded-lg p-2 mt-2`}
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
            <label className={`block text-sm font-medium text-gray-700 mb-2`}>
              Date
            </label>
            <input
              type="date"
              value={editedTask.date || ""}
              onChange={(e) =>
                setEditedTask({ ...editedTask, date: e.target.value })
              }
              className={`px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
          </div>
        </div>

        <div className={`p-4 sm:p-6 border-t flex gap-3 justify-end`}>
          <button
            onClick={onClose}
            className={`px-4 py-2 border rounded-md cursor-pointer `}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className={`px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600`}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
