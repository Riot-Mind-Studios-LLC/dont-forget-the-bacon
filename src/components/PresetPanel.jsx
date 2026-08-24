// import dependancies
import presetItems from "../data/presetItems";
// import components
import PresetCategory from "./PresetCategory";

const PresetPanel = () => {
  return (
    <div className="p-4">
      {presetItems.map((entry) => (
        <PresetCategory
          key={entry.category}
          category={entry.category}
          icon={entry.icon}
          items={entry.items}
        />
      ))}
    </div>
  )
}

export default PresetPanel;