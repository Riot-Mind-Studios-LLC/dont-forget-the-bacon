// import dependancies
// import components
import ListItemCard from "./ListItemCard";
import FeatureExportControls from "./FeatureExportControls";

const ListPanel = ({ groceryList, setGroceryList }) => {
  const handleRemove = (name) => {
    setGroceryList(groceryList.filter((item) => item.name !== name));
  }

  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2 text-black dark:text-white">Your List</h2>
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