// import dependancies
import { X } from "lucide-react";
// import components

const ListItemCard = ({ name, icon: Icon, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-2 rounded-md border border-gray-200 dark:border-transparent bg-white dark:bg-gray-800 text-black dark:text-white">
      <div className="flex items-center gap-2">
        <Icon size={16} />
        <span>{name}</span>
      </div>
      <button
        onClick={() => onRemove(name)}
        className="text-gray-400 dark:text-gray-500 hover:text-red-500 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  )
}

export default ListItemCard;