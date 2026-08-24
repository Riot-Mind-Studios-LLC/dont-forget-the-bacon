// import dependancies
// import components

const PresetItemCard = ({ name, icon: Icon, onAdd }) => {
  return (
    <button
      onClick={() => onAdd({ name, icon: Icon })}
      className="w-full text-left p-2 mb-2 rounded-md bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-amber-100 dark:hover:bg-gray-700 transition-colors"
    >
      {name}
    </button>
  )
}

export default PresetItemCard;