import { useTheme } from "../hooks/useTheme";
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
  const { theme } = useTheme();
  return (
    <div
      className={`border-2 rounded-2xl p-4 shadow-md ${
        theme === "dark"
          ? "border-slate-700 bg-slate-700"
          : "border-slate-100 bg-white"
      }`}
    >
      <span className={`text-2xl font-bold ${color}`}>{numberOfTasks}</span>
      <p
        className={`text-md font-semibold ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
      >
        {text}
      </p>
    </div>
  );
}
