// import dependancies
import presetCategories from "../data/presetItems";
// import components
import PresetCategory from "./PresetCategory";

const PresetPanel = ({ groceryList, setGroceryList }) => {
  const handleAdd = (name) => {
    if (!groceryList.includes(name)) {
      setGroceryList([...groceryList, name]);
    }
  }

  return (
    <div className="p-4">
      {presetCategories.map((entry) => (
        <PresetCategory
          key={entry.category}
          category={entry.category}
          icon={entry.icon}
          items={entry.items}
          onAdd={handleAdd}
        />
      ))}
    </div>
  )
}

export default PresetPanel;