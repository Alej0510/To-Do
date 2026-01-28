import { Search } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  const { theme } = useTheme();
  return (
    <div
      className={`flex items-center gap-2 p-2 border-2 rounded-lg ${
        theme === "dark"
          ? "bg-slate-600 border-slate-500"
          : "bg-white border-slate-300"
      }`}
    >
      <span>
        <Search color={theme === "dark" ? "white" : "gray"} />
      </span>
      <input
        type="text"
        placeholder="Search task"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full focus:outline-none ${
          theme === "dark" ? "bg-slate-600 text-white" : "bg-white text-black"
        }`}
      />
    </div>
  );
}
