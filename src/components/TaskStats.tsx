
interface TaskStatsProps {
  text: string;
  numberOfTasks: number;
  color: string;
}

export default function TaskStats({
  text,
  numberOfTasks,
  color,
}: TaskStatsProps) {
  return (
    <div
      className="border-2 rounded-2xl p-4 shadow-md border-slate-100 bg-white dark:border-slate-700 dark:bg-slate-700"
    >
      <span className={`text-2xl font-bold ${color}`}>{numberOfTasks}</span>
      <p
        className="text-md font-semibold text-gray-700 dark:text-gray-300"
      >
        {text}
      </p>
    </div>
  );
}
