// import dependancies
import { X } from "lucide-react";
// import components

const ListItemCard = ({ name, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-2 mb-2 rounded-md bg-white">
      <span>{name}</span>
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