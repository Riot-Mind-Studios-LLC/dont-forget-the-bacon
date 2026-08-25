// import dependancies
import { useState } from "react";
import presetCategories from "../data/presetItems";
import { CiBacon } from "react-icons/ci";
// import components
import PresetCategory from "./PresetCategory";

const PresetPanel = ({ handleAdd }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const handleToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  }

  return (
    <div className="p-4">
      <button
        onClick={() => handleAdd({ name: "Bacon", icon: CiBacon })}
        className="w-full flex items-center justify-center gap-2 p-3 mb-6 rounded-full bg-amber-800 text-white font-semibold hover:bg-amber-900 transition-colors"
      >
        <CiBacon size={20} />
        Add The Bacon!
      </button>

      {presetCategories.map((entry) => (
        <PresetCategory
          key={entry.category}
          category={entry.category}
          icon={entry.icon}
          items={entry.items}
          onAdd={handleAdd}
          isOpen={openCategory === entry.category}
          onToggle={() => handleToggle(entry.category)}
        />
      ))}
    </div>
  )
}

export default PresetPanel;