export default function FilterButton({text, darkMode = false}: {text: string, darkMode?: boolean}) {
    return (
        <button className={`px-5 py-2 mt-4 border shadow-sm rounded-lg focus:bg-blue-500 focus:text-white duration-200 cursor-pointer ${
            darkMode ? 'bg-gray-800 border-gray-600 text-white hover:bg-gray-700' : 'bg-white border-slate-300'
        }`}>{text}</button>
    );
}