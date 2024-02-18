import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
  const handleClick = () => {
    setShowIndex();
    console.log("clicked");
  };
  
  return (
    <div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 m-auto mx-auto my-4" >
            <div className="flex justify-between" onClick={handleClick}>
            <span className="cursor-pointer">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            
            {showItems && <ItemList  items = {data.itemCards} />}
        </div>
        

    </div>

  )
}

export default RestaurantCategory;