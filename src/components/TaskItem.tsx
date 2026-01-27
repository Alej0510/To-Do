import { Pencil } from "lucide-react";
import { Trash } from "lucide-react";
import { Calendar } from "lucide-react";
import type { Task } from "../types";

interface TaskItemProps {
    task: Task;
    onToggleTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
    darkMode?: boolean;
}

export default function TaskItem({ task, onToggleTask, onDeleteTask, darkMode = false }: TaskItemProps) {

    return (
        <>
        <div className={`flex justify-between items-center gap-2 p-4 rounded-lg shadow-md border mt-4 py-6 transition-all duration-200 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
        } ${task.completed ? 'opacity-75 border-gray-300' : 'border-transparent'}`}>
            <div className="flex items-center gap-4">
                <input type="checkbox" name="completionBtn" id="" className="mt-1 cursor-pointer size-4 rounded-lg" checked={task.completed} onChange={() => onToggleTask(task.id)} />
                <p className={`font-semibold text-xl ${task.completed ? 'line-through text-gray-400' : darkMode ? 'text-white' : 'text-black'}`}>{task.title}</p>

                <div className="flex items-center gap-6 ml-5">
                    <p className={`p-2 rounded-lg text-sm ${task.completed ? (darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500') : (darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-200')}`}>{task.category}</p>
                    <p className={`p-2 rounded-lg text-sm flex items-center gap-1.5 ${task.date === "" ? 'hidden' : 'visible'} ${task.completed ? (darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500') : (darkMode ? 'bg-green-900 text-green-200' : 'bg-green-200')}`}><Calendar size={16} />{task.date}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className={`${task.completed ? 'text-gray-400' : (darkMode ? 'text-gray-300' : 'text-gray-600')} hover:text-blue-500 transition-colors cursor-pointer`}><Pencil /></button>
                <button className={`${task.completed ? 'text-gray-400' : (darkMode ? 'text-gray-300' : 'text-gray-600')} hover:text-red-500 transition-colors cursor-pointer`} onClick={() => onDeleteTask(task.id)}><Trash /></button>
            </div>
        </div>
        </>
    );  
}
