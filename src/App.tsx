import { useState, useMemo } from "react";
import { Toaster } from "./components/ui/sonner";
import { useThemeStore } from "./store/useThemeStore";
import { useTaskStore } from "./store/TaskStore";
import type { Filter } from "./types";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskStats from "./components/TaskStats";
import SearchBar from "./components/SearchBar";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import TaskEdit from "./components/TaskEdit";

 
useThemeStore.getState().initTheme();

function App() {
  

  const tasks = useTaskStore((state) => state.tasks);

  const totalTasks = useTaskStore((state) => state.getTotalTasks());

  const completedTasks = useTaskStore((state) => state.getCompletedTasks());

  const remainingTasks = useTaskStore((state) => state.getRemainingTasks());

  const searchTask = useTaskStore((state) => state.searchTask);

  const editTask = useTaskStore((state) => state.editTask);

  const addTask = useTaskStore((state) => state.addTask);
  const toggleTask = useTaskStore((state) => state.toggleTask);
  const deleteTask = useTaskStore((state) => state.deleteTask);
  const updateTask = useTaskStore((state) => state.updateTask);
  const setSearchTask = useTaskStore((state) => state.setSearchTask);
  const setEditTask = useTaskStore((state) => state.setEditTask);

  const [filter, setFilter] = useState<Filter>("all");

  const filteredTasks = useMemo(() => (
    tasks.filter((task) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !task.completed) ||
        (filter === "completed" && task.completed);

      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTask.toLowerCase());

      return matchesFilter && matchesSearch;
    })
  ), [tasks, filter, searchTask]);

    return (
    <>
      <Toaster
        position="top-center"
        visibleToasts={1}
        expand={true}
        duration={2000}
      />

      <div
        className="bg-slate-200 min-h-screen pt-4 px-4 sm:px-6 transition-colors duration-300 dark:bg-slate-900"
      >
        <div className="max-w-4xl mx-auto">
          <Header totalTasks={totalTasks} pendingTasks={remainingTasks} />

          <main className="mt-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <TaskStats
                numberOfTasks={totalTasks}
                text="Total"
                color="text-black dark:text-white"
              />

              <TaskStats
                numberOfTasks={completedTasks}
                text="Completed"
                color={completedTasks === 0 ? "text-red-400" : "text-blue-400"}
              />

              <TaskStats
                numberOfTasks={remainingTasks}
                text="Remaining"
                color={remainingTasks === 0 ? "text-green-400" : "text-red-400"}
              />
            </div>

            <div
              className="bg-white p-3 rounded-lg dark:bg-slate-700"
            >
              <SearchBar value={searchTask} onChange={setSearchTask} />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                className="flex-1 sm:flex-none px-5 py-2 mt-4 rounded-lg duration-200 cursor-pointer focus:bg-blue-500 focus:text-white text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600"
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className="flex-1 sm:flex-none px-5 py-2 mt-4 rounded-lg duration-200 cursor-pointer focus:bg-blue-500 focus:text-white text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600"
                onClick={() => setFilter("active")}
              >
                Active
              </button>
              <button
                className="flex-1 sm:flex-none px-5 py-2 mt-4 rounded-lg duration-200 cursor-pointer focus:bg-blue-500 focus:text-white text-black bg-white hover:bg-gray-100 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600"
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>

            <AddTask onAddTask={addTask} />

            {filteredTasks.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500">There are no tasks to show</p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggleTask={toggleTask}
                  onDeleteTask={deleteTask}
                  onEditTask={setEditTask}
                />
              ))
            )}

            {editTask && (
              <TaskEdit
                task={editTask}
                onClose={() => setEditTask(null)}
                onSave={(updatedTask) => {
                  updateTask(updatedTask);
                  setEditTask(null);
                }}
              />
            )}
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
