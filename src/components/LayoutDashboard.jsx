// import dependancies
// import components
import PresetPanel from "./PresetPanel";
import ListPanel from "./ListPanel";
import FeatureThemeToggle from "./FeatureThemeToggle";

const LayoutDashboard = ({ groceryList, setGroceryList, isDarkMode, setIsDarkMode }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="flex items-center justify-between p-4">
        <h1 className="font-bold text-lg">Don't Forget The Bacon</h1>
        <FeatureThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>
      <main className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

        {/* preset panel */}
        <PresetPanel groceryList={groceryList} setGroceryList={setGroceryList} />

        {/* list panel */}
        <ListPanel groceryList={groceryList} setGroceryList={setGroceryList} />

      </main>
    </div>
  )
}

export default LayoutDashboard;