// import dependancies
// import components
import ListItemCard from "./ListItemCard";

const ListPanel = ({ groceryList, setGroceryList }) => {
  const handleRemove = (name) => {
    setGroceryList(groceryList.filter((item) => item !== name));
  }

  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Your List</h2>
      {groceryList.map((item) => (
        <ListItemCard key={item} name={item} onRemove={handleRemove} />
      ))}
    </div>
  )
}

export default ListPanel;