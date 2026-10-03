import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // Add this line
import Experience from "./components/Experience"; // 1. Import koro
import Skills from "./components/Skills"; // 1. Import koro
import Projects from "./components/Projects"; // Import koro
import Research from "./components/Research"; // Import it
import Achievements from "./components/Achievements"; // Import
import Contact from "./components/Contact"; // Import koro

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (

    <div className="bg-slate-900 min-h-screen">
      

      {/* Home Section */}
      {/* <main className="flex items-center justify-center h-screen text-white">
        <h1 className="text-4xl font-bold">The Magic Starts Here ✨</h1>
      </main> */}
      <div className="pt-0"> {/* Navbar-er height-er jonno padding */}
        <Navbar />
        <Hero />
        {/* Porer section gulo ektar por ekta niche ashbe */}
        <About /> {/* Add this line */}
        <Skills /> {/* 2. Use koro */}
        <Experience />
        <Projects /> {/* Use koro */}
        <Research /> {/* Boro kore bheshe uthbe eikhane */}
        <Achievements /> {/* Add here */}
        <Contact />
      </div>

      {/* Footer (Optional) */}
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
        © 2026 Tamanna Zaman. Built with Discipline & Code.
      </footer>
    </div>

    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank" >
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     < a href="https://react.dev" target="_blank" >
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   < h1 > Vite + React </h1>
    //   < div className="card" >
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit < code > src / App.tsx </code> and save to test HMR
    //     </p>
    //   </div>
    //   < p className="read-the-docs" >
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

  )
}

export default App
