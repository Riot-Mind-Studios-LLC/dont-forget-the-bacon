// import dependancies
// import components
import PresetPanel from "./PresetPanel";
import ListPanel from "./ListPanel";
import FeatureThemeToggle from "./FeatureThemeToggle";
import FeatureToast from "./FeatureToast";
import FeatureBaconMeter from "./FeatureBaconMeter";
import headerBanner from "../assets/header-banner.jpg";
import baconMarker from "../assets/bacon-marker.svg";

const LayoutDashboard = ({
  groceryList,
  setGroceryList,
  handleAdd,
  isDarkMode,
  setIsDarkMode,
  toastMessage,
  setToastMessage,
}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <FeatureToast message={toastMessage} onClear={() => setToastMessage("")} />

      <header
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${headerBanner})` }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-4 py-10 md:py-16 text-center">
          <div className="flex justify-end mb-4">
            <FeatureThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>

          <div className="flex items-center justify-center gap-3 mb-2">
            <img src={baconMarker} alt="" className="w-12 h-12 md:w-16 md:h-16" />
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white">
              Don't Forget The Bacon
            </h1>
          </div>

          <p className="text-white/90 text-base md:text-lg mb-4">
            Your grocery list, minus the goldfish memory.
          </p>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Tap a preset to add it, type your own, and hit the bacon button when you're really ready to shop.
          </p>
        </div>
      </header>

      <div className="px-4 pt-8">
        <FeatureBaconMeter groceryList={groceryList} />
      </div>

      <main className="grid grid-cols-1 md:grid-cols-[280px_1fr]">

        {/* preset panel */}
        <PresetPanel groceryList={groceryList} setGroceryList={setGroceryList} handleAdd={handleAdd} />

        {/* list panel */}
        <ListPanel groceryList={groceryList} setGroceryList={setGroceryList} handleAdd={handleAdd} />

      </main>
    </div>
  )
}

export default LayoutDashboard;