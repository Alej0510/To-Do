import { Toaster } from "./components/ui/sonner";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import TaskCounter from "./TaskCounter";
import SearchBar from "./SearchBar";
import FilterButton from "./FilterButton";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <Toaster
        position="top-center"
        visibleToasts={1}
        expand={true}
        closeButton={true}
        duration={2000}
      />

      <div className="bg-slate-200 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Header />

          <main className="max-w-4xl mt-4 ">

            <div className="grid grid-cols-3 gap-4 mb-6">  
            <TaskCounter />
            <TaskCounter />
            <TaskCounter />
            </div>
            
            <SearchBar />

            <div className="flex gap-2">
              <FilterButton />
              <FilterButton />
              <FilterButton />
            </div>

            <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg shadow-md">+ Add new task</button>

          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
