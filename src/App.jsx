// import dependancies
import { useState } from "react";
// import components
import LayoutDashboard from "./components/LayoutDashboard";

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <LayoutDashboard
        groceryList={groceryList}
        setGroceryList={setGroceryList}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  )
}

export default App;