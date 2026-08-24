// import dependancies
import { useState } from "react";
// import components
import LayoutDashboard from "./components/LayoutDashboard";

function App() {
  const [groceryList, setGroceryList] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleAdd = (newItem) => {
    const alreadyExists = groceryList.some((item) => item.name === newItem.name);
    if (!alreadyExists) {
      setGroceryList([...groceryList, newItem]);
    }
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <LayoutDashboard
        groceryList={groceryList}
        setGroceryList={setGroceryList}
        handleAdd={handleAdd}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
    </div>
  )
}

export default App;