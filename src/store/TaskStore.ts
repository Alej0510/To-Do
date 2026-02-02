import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task, Filter } from "../types";

interface TaskStore {
    tasks: Task[];
    filter: Filter;
    searchTask: string;
    editTask: Task | null;

addTask: (task: Task) => void;
toggleTask: (id: string) => void;
deleteTask: (id: string) => void;
updateTask: (updatedTask: Task) => void;
setFilter: (filter: Filter) => void;
setSearchTask: (searchTask: string) => void;
setEditTask: (editTask: Task | null) => void;

getTotalTasks: () => number;
getCompletedTasks: () => number;
getRemainingTasks: () => number;
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      filter: "all",
      searchTask: "",
      editTask: null,

      addTask: (task) => set((state) => ({ 
        tasks: [...state.tasks, task] 
      })),

      toggleTask: (id) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        ),
      })),

      deleteTask: (id) => set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),

      updateTask: (updatedTask) => set((state) => ({
        tasks: state.tasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        ),
      })),

      setFilter: (filter) => set({ filter }),

      setSearchTask: (searchTask) => set({ searchTask }),

      setEditTask: (editTask) => set({ editTask }),

      getTotalTasks: () => get().tasks.length,

      getCompletedTasks: () => 
        get().tasks.filter((task) => task.completed).length,

      getRemainingTasks: () => {
        const state = get();
        return state.tasks.length - state.tasks.filter((task) => task.completed).length;
      },

    }),
    {
      name: "tasks",
    }
  )
);