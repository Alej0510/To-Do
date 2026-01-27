import { Search } from "lucide-react";

export default function SearchBar({ darkMode = false }: { darkMode?: boolean }) {
    return (
        <div className={`flex items-center gap-2 p-2 border-2 rounded-lg ${
            darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-slate-300'
        }`}>
            <span><Search color={darkMode ? "#9CA3AF" : "gray"}/></span>
            <input 
                type="text" 
                placeholder="Search task" 
                className={`w-full focus:outline-none ${
                    darkMode ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white'
                }`} 
            />
        </div>
    );
}