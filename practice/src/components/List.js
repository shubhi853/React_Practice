function List(){
    let products=[
        {title: "Cabbage",id:1},
        {title: "Apple",id:2},
        {title: "Orange",id:3},
        {title: "Papaya",id:4},
        {title: "Plum",id:5}
    ]
    let list = products.map((index)=>
     <li>{index.id}. {index.title}</li>
    )
    return(
        <>
         <ul>
        {list}
       </ul>
        </>
    )
}
export default List;