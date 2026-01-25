import { Toaster } from "./components/ui/sonner";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

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

     <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-gray-900" : "bg-white"}`}>

       <Header />

    <div className="max-w-2xl mx-auto p-6 mt-4 border-2 border-gray-200 bg-white rounded-lg shadow-lg">

     
  
    
    </div>

    </div>
    
    <Footer />
    </>
  )
}

export default App
