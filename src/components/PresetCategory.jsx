// import dependancies
// import components
import PresetItemCard from "./PresetItemCard";

const PresetCategory = ({ category, icon: Icon, items, onAdd }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={18} />
        <h3 className="font-semibold">{category}</h3>
      </div>
      {items.map((item) => (
        <PresetItemCard key={item} name={item} onAdd={onAdd} />
      ))}
    </div>
  )
}

export default PresetCategory;