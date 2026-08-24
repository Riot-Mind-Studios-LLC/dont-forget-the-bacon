// import dependancies
// import components

const PresetItemCard = ({ name, onAdd }) => {
  return (
    <button
      onClick={() => onAdd(name)}
      className="w-full text-left p-2 mb-2 rounded-md bg-white hover:bg-amber-100 transition-colors"
    >
      {name}
    </button>
  )
}

export default PresetItemCard;