import { useEffect, useState } from "react";
import Skills from "./components/skills.component";
import Intro from "./components/intro.component";
import WorkSection from "./components/workSection.component";

function App() {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const [theme, setTheme] = useState(localStorage.theme);

  const themeToggle = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <Intro />
      <div className="h-auto md:w-2/3 bg-blue-50">
        <button onClick={() => themeToggle()} className="w-20 h-20 ">
          {theme}
        </button>
        <Skills />
        <WorkSection />
      </div>
    </div>
  );
}

export default App;
