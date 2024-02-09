import Item from "./Item";

const FoodItems = ({items}) => {
    console.log(items);
    // let foodItems =["Vegetabls","Fruits","Milk","Salads","Smoothy","Chocolate" ]
    return (
        <ul className="list-group">
            {items.map((item) =>(
                <Item key={item} foodItem={item} />
            ))}
        </ul>
    );
};
export default FoodItems;