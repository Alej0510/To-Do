import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface HeaderProps {
  totalTasks: number;
  pendingTasks: number;
}

export default function Header({ totalTasks, pendingTasks }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="text-2xl font-bold mb-4 pt-4 flex justify-between sm:items-center gap-4 flex-wrap">
      <div>
        <h1
          className={`text-3xl sm:text-4xl ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          To-Do List
        </h1>
        <p
          className={`text-[16px] mt-2 sm:mt-4 ${theme === "dark" ? "text-white" : "text-black"}`}
        >
          {pendingTasks} tasks of {totalTasks} remaining
        </p>
      </div>

      <button
        className={`self-end sm:self-auto p-4.5 rounded-full cursor-pointer shadow-md border duration-200${theme === "dark" ? " bg-slate-700 hover:bg-slate-600 border-slate-700" : " bg-white hover:bg-gray-100 border-gray-100"}`}
        onClick={() => toggleTheme()}
      >
        {theme === "dark" ? <Sun color="yellow" /> : <MoonStar color="black" />}
      </button>
    </div>
  );
}
