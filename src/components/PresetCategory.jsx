// import dependancies
import { ChevronDown, ChevronUp } from "lucide-react";
// import components
import PresetItemCard from "./PresetItemCard";

const PresetCategory = ({ category, icon: Icon, items, onAdd, isOpen, onToggle }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full gap-2 mb-2 text-black dark:text-white"
      >
        <div className="flex items-center gap-2">
          <Icon size={18} />
          <h3 className="font-semibold">{category}</h3>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div>
          {items.map((item) => (
            <PresetItemCard key={item} name={item} icon={Icon} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  )
}

export default PresetCategory;