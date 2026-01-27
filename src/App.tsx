import { Toaster } from "./components/ui/sonner";

import { useState, useEffect } from "react";

import Header from "./components/Header";

import Footer from "./components/Footer";

import TaskStats from "./components/TaskStats";

import SearchBar from "./components/SearchBar";

import FilterButton from "./components/FilterButton";

import TaskItem from "./components/TaskItem";

import AddTask from "./components/AddTask";
import type { Task } from "./types";




function App() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const handleAddTask = (task: Task) => {
    setTasks(prevTask => [...prevTask, task]);
  };

  const handleToggleTask = (id: string) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(task => task.completed).length;

  const remainingTasks = totalTasks - completedTasks;

  return (

    <>

      <Toaster

        position="top-center"

        visibleToasts={1}

        expand={true}

        duration={2000}

      />



      <div className={`min-h-screen pt-4 ${darkMode ? 'bg-slate-900' : 'bg-slate-200'}`}>

        <div className="max-w-4xl mx-auto">

          <Header totalTasks={totalTasks} pendingTasks={remainingTasks} darkMode={darkMode} setDarkMode={setDarkMode} />



          <main className="max-w-4xl mt-4 ">



            <div className="grid grid-cols-3 gap-4 mb-6">  

            <TaskStats numberOfTasks={totalTasks} text="Total" color={darkMode ? "text-white" : "text-black"} darkMode={darkMode}/>

            <TaskStats numberOfTasks={completedTasks} text="Completed" color={completedTasks === 0 ? 'text-red-500' : 'text-green-500'} darkMode={darkMode}/>

            <TaskStats numberOfTasks={remainingTasks} text="Remaining" color={remainingTasks === 0 ? 'text-green-500' : 'text-red-500'} darkMode={darkMode}/>

            </div>

            

            <SearchBar darkMode={darkMode} />



            <div className="flex gap-2">

              <FilterButton text="All" darkMode={darkMode}/>

              <FilterButton text="Active" darkMode={darkMode}/>

              <FilterButton text="Completed" darkMode={darkMode}/>

            </div>



            <AddTask onAddTask={handleAddTask} darkMode={darkMode}/>

            {tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
                darkMode={darkMode}
              />
            ))}

          </main>

        </div>



        <Footer />

      </div>

    </>

  );

}



export default App;

