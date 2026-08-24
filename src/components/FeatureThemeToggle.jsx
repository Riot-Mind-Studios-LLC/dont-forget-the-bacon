// import dependancies
import { Sun, Moon } from "lucide-react";
// import components

const FeatureThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 transition-colors"
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white text-black flex items-center justify-center transition-transform ${
          isDarkMode ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isDarkMode ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  )
}

export default FeatureThemeToggle;