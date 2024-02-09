const ErrorMessage=({items})=>{
    let foodItem =["Vegetabls","Fruits","Milk","Salads","Smoothy","Chocolate" ]
return(
    <>
     {foodItem.length === 0 && <h3>I am still hungry.</h3>}
    </>
   
)
};
export default ErrorMessage;