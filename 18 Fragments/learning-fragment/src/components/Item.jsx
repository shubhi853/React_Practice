const Item=({foodItem})=>{
    console.log(foodItem);
return(
    <li className="list-group-item">
                {foodItem}
            </li>
);
};
export default Item;