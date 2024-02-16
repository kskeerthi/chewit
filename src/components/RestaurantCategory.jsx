import ItemList from "./ItemList";

const RestaurantCategory = (data) => {
   
  return (
    <div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 m-auto mx-auto my-4 " >
            <div className="flex justify-between">
            <span>{data.data.title}({data.data.itemCards.length})</span>
            <span>🔽</span>
            </div>
            <ItemList  items = {data.data.itemCards} />
        </div>
        

    </div>

  )
}

export default RestaurantCategory;