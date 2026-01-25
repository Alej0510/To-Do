import { useState } from "react";
import { toast } from "sonner";

function ToDoList() {

    const [tasks, setTasks] = useState<string[]>([]);
    const [newTask, setNewTask] = useState<string>("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }
    
    function handleAddTask() {

        if (newTask.trim() === "") {  
            toast.dismiss();    
            toast("Please enter a task");
            return;
        }
        
        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask("");
    }

    function handleDeleteTask(index : number){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index : number){
        if(index === 0){
            toast.dismiss();
            toast("Task is already at the top");
            return;
        }

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
    
    function moveTaskDown(index : number){
        if(index === tasks.length - 1){
            toast.dismiss();
            toast("Task is already at the bottom");
            return;
        }

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
    
    return (
        <>
            <div className="max-w-2xl mx-auto p-6 mt-4 border-2 border-gray-200 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">To-do List</h1>
                
                <div className="flex gap-2 mb-6">
                    <input 
                        type="text" 
                        placeholder="Add a Task" 
                        value={newTask} 
                        onChange={(event) => handleInputChange(event)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button 
                        onClick={handleAddTask}
                        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                        Add Task
                    </button>
                </div>

            <ol className="space-y-2">
                {tasks.map((task, index) => (
                    <li 
                        key={index} 
                        className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-150 flex items-center justify-between group"
                    >
                        <span className="text-gray-800 font-medium flex-1">{task}</span>
                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                            <button 
                                onClick={() => handleDeleteTask(index)}
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-150"
                                title="Delete task"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => moveTaskUp(index)}
                                className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                                title="Move up"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
                                </svg>
                            </button>
                            <button 
                                onClick={() => moveTaskDown(index)}
                                className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-150"
                                title="Move down"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3" />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ol>

            </div>
        </>
    );
}

export default ToDoList;    