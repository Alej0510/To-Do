import { MoonStar, Sun } from "lucide-react";

interface HeaderProps {
    totalTasks: number;
    pendingTasks: number;
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

export default function Header({totalTasks, pendingTasks, darkMode, setDarkMode}:  HeaderProps) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="text-2xl font-bold mb-4 pt-4 flex justify-between items-center">
      <div>
        <h1 className="text-4xl">To-Do List</h1>
        <p className={`text-[16px] mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{pendingTasks} tasks of {totalTasks} remaining</p>
      </div>

      <button 
        className={`p-4.5 rounded-full hover:bg-gray-100 duration-200 cursor-pointer shadow-md ${
          darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white'
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun className="text-yellow-400" /> : <MoonStar />}
      </button>
    </div>
  );
}
