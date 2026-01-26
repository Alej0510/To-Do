
import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="flex items-center gap-2 p-2 border-2 border-slate-300 bg-white rounded-lg">
            <span><Search color="gray"/></span>
            <input type="text" placeholder="Search task" className="w-full focus:outline-none" />
        </div>
    );
}