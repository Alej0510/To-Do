import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  
  return (
    <div
      className={`flex items-center gap-2 p-2 border-2 rounded-lg 
      }`}
    >
      <span>
        <Search />
      </span>
      <input
        type="text"
        placeholder="Search task"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full focus:outline-none`}
      />
    </div>
  );
}
