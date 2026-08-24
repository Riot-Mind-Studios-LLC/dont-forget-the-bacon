// import dependancies
import { Trash2 } from "lucide-react";
// import components
import ListItemCard from "./ListItemCard";
import ListAddInput from "./ListAddInput";
import FeatureBaconMeter from "./FeatureBaconMeter";
import FeatureExportControls from "./FeatureExportControls";

const ListPanel = ({ groceryList, setGroceryList, handleAdd }) => {
  const handleRemove = (name) => {
    setGroceryList(groceryList.filter((item) => item.name !== name));
  }

  const handleClearAll = () => {
    if (window.confirm("Clear your entire grocery list?")) {
      setGroceryList([]);
    }
  }

  return (
    <div className="p-4">
      <FeatureBaconMeter groceryList={groceryList} />

      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-black dark:text-white">Your List</h2>
        {groceryList.length > 0 && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={14} />
            Clear All
          </button>
        )}
      </div>

      <ListAddInput onAdd={handleAdd} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {groceryList.map((item) => (
          <ListItemCard
            key={item.name}
            name={item.name}
            icon={item.icon}
            onRemove={handleRemove}
          />
        ))}
      </div>

      <FeatureExportControls groceryList={groceryList} />
    </div>
  )
}

export default ListPanel;