import { Toaster } from "./components/ui/sonner";

import { useState } from "react";

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



      <div className="bg-slate-200 min-h-screen pt-4">

        <div className="max-w-4xl mx-auto">

          <Header totalTasks={totalTasks} pendingTasks={remainingTasks} />



          <main className="max-w-4xl mt-4 ">



            <div className="grid grid-cols-3 gap-4 mb-6">  

            <TaskStats numberOfTasks={totalTasks} text="Total" color="text-black"/>

            <TaskStats numberOfTasks={completedTasks} text="Completed" color={completedTasks === 0 ? 'text-red-500' : 'text-blue-500'}/>

            <TaskStats numberOfTasks={remainingTasks} text="Remaining" color={remainingTasks === 0 ? 'text-green-500' : 'text-red-500'}/>

            </div>

            

            <SearchBar />



            <div className="flex gap-2">

              <FilterButton text="All"/>

              <FilterButton text="Active"/>

              <FilterButton text="Completed"/>

            </div>



            <AddTask onAddTask={handleAddTask}/>

            {tasks.map(task => (
              <TaskItem 
                key={task.id}
                task={task}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
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

