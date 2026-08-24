// import dependancies
import { useState } from "react";
import { User, Plus } from "lucide-react";
// import components

const ListAddInput = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    onAdd({ name: value.trim(), icon: User });
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add your own item..."
        className="flex-1 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white"
      />
      <button
        type="submit"
        className="flex items-center justify-center px-3 rounded-md bg-amber-800 text-white hover:bg-amber-900 transition-colors"
      >
        <Plus size={18} />
      </button>
    </form>
  )
}

export default ListAddInput;