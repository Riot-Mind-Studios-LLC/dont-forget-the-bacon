// import dependancies
// import components
import PresetPanel from "./PresetPanel";
import ListPanel from "./ListPanel";

const LayoutDashboard = ({ groceryList, setGroceryList }) => {
  return (
    <div className="min-h-screen">
      <header>Header</header>
      <main className="grid grid-cols-[280px_1fr]">

        {/* preset panel */}
        <PresetPanel groceryList={groceryList} setGroceryList={setGroceryList} />

        {/* list panel */}
        <ListPanel groceryList={groceryList} setGroceryList={setGroceryList} />

      </main>
    </div>
  )
}

export default LayoutDashboard;