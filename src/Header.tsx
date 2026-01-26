import { MoonStar } from "lucide-react";

export default function Header() {
  return (
    <div className="text-2xl font-bold mb-4 pt-4 flex justify-between items-center">
      <div>
        <h1 className="text-4xl">To-Do List</h1>
        <p className="text-[16px] text-gray-600 mt-4">0 tasks of 0 remaining</p>
      </div>

      <button className="p-4.5 rounded-full hover:bg-gray-100 duration-200 cursor-pointer bg-white shadow-md">
        <MoonStar />
      </button>
    </div>
  );
}
