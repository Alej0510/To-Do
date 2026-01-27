import { X } from "lucide-react";
import { useState } from "react";
import type { Task } from "../types";
import { toast } from "sonner";

interface AddTaskProps {
    onAddTask: (task: Task) => void;
    darkMode?: boolean;
}

export default function AddTask({ onAddTask, darkMode = false }: AddTaskProps) {

    const [showAddTask, setShowAddTask] = useState(false);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('👤 personal');
    const [date, setDate] = useState('');

    const handleShowTaskCard = () => {
        setShowAddTask(!showAddTask);
    };

    const handleSubmit = () => {
     if (title.trim() === '') {
        toast.dismiss();
        toast.error(
            'Please add a task',
        );
        return;
     }
     
     const newTask: Task = {
        id: crypto.randomUUID(),
        title,
        category,
        date,
        completed: false
     }

     onAddTask(newTask);

     setTitle('');
     setCategory('👤 personal');
     setDate('');
    }


    return (
        <>
        <button className={`w-full py-4 mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 duration-200 cursor-pointer ${showAddTask ? 'hidden' : ''} duration-200`} onClick={handleShowTaskCard}>+ Add new task</button>

        <div className={`p-4 rounded-lg shadow-md mt-4 ${showAddTask ? '' : 'hidden'} duration-200 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>

            <div className="flex items-center gap-2 justify-between">
            <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-black'}`}>New task</h2>
            <button className={`cursor-pointer ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600'}`} onClick={handleShowTaskCard}><X size={26}/></button>
            </div>

            <input type="text" placeholder="Add a task" className={`w-full border rounded-lg p-2 mt-2 focus:outline-none ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'border-slate-300'
            }`} value={title} onChange={(e) => setTitle(e.target.value)} />

            <div className="grid grid-cols-2 gap-x-6 mt-3 max-w-md">
            <p className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Category</p>
            <p className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Date</p>
            <select name="" id="" className={`border rounded-lg p-2 mt-2 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
            }`} value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="👤 personal">👤 Personal</option>
                <option value="💼 work">💼 Work</option>
                <option value="🔥 urgent">🔥 Urgent</option>    
            </select>
    
            <input type="date" className={`border rounded-lg p-2 mt-2 ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'border-slate-300'
            }`} value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>

            <button className="w-full py-4 mt-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 duration-200 cursor-pointer" onClick={handleSubmit}>Add task</button>
        </div>
        </>
    );
}