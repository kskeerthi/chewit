const ItemList = (items) => {
  return (
  
    <div>
       
        {items.items.map((item) => {
        console.log(item.card.info.name),
           <div key={item.card.info.id}>
                <div>
               
                    <span>{item.card.info.name}</span>
                    <span>{item.card.info.price}</span>
                    
                </div>
                <div>
                <span>{item.card.info.description}</span>
                    </div>
            </div>
        }
        )}
    
    </div>
  )
}

export default ItemList;