// import assets
// import dependancies
import { useState } from "react";
// import components
import LayoutDashboard from "./components/LayoutDashboard";


function App() {

  const [groceryList, setGroceryList] = useState([]);

  return (
    <>
     <LayoutDashboard 
      groceryList={groceryList}
      setGroceryList={setGroceryList}
     />
     
    </>
  )
  
}

export default App;
