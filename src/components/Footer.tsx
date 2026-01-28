import { useTheme } from "../hooks/useTheme";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      className={`max-w-4xl mx-auto text-sm text-slate-700 mt-4 px-4 pb-6 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 ${theme === "dark" ? "text-white" : "text-black"}`}
    >
      <p>Made with ❤️ by Alej</p>
      <p>© 2026 Portfolio project</p>
    </footer>
  );
}
