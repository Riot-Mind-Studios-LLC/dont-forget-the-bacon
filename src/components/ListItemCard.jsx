// import dependancies
import { X } from "lucide-react";
// import components

const ListItemCard = ({ name, icon: Icon, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-6 rounded-md bg-white">
      <div className="flex items-center gap-2">
        <Icon size={16} />
        <span>{name}</span>
      </div>
      <button
        onClick={() => onRemove(name)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default ListItemCard;