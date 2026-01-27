interface TaskStatsProps {
    text: string;
    numberOfTasks: number;
    color: string;
    darkMode?: boolean;
}

export default function TaskStats({ text, numberOfTasks, color, darkMode = false }: TaskStatsProps) {
    return (
        <div className={`border-2 rounded-2xl p-4 shadow-md ${
            darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-100 bg-white'
        }`}>
            <span className={`text-2xl font-bold ${color}`}>{numberOfTasks}</span>
            <p className={`text-md font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{text}</p>
        </div>
    );
}