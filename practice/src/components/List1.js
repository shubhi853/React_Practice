function List1 (){
let data= [
    {
      id: 1,
      first_name: "Devin",
      last_name: "Donne",
      email: "ddonne0@jalbum.net",
      gender: "Male"
    },
    {
      id: 2,
      first_name: "Marilin",
      last_name: "Zisneros",
      email: "mzisneros1@digg.com",
      gender: "Female"
    },
    {
      id: 3,
      first_name: "Granville",
      last_name: "Fullick",
      email: "gfullick2@rakuten.co.jp",
      gender: "Male"
    },
    {
      id: 4,
      first_name: "Ardis",
      last_name: "Bootton",
      email: "abootton3@fastcompany.com",
      gender: "Female"
    },
    {
      id: 5,
      first_name: "Angy",
      last_name: "Smiley",
      email: "asmiley4@homestead.com",
      gender: "Female"
    },
    {
      id: 6,
      first_name: "Matthieu",
      last_name: "McKune",
      email: "mmckune5@github.com",
      gender: "Male"
    },
    {
      id: 7,
      first_name: "Aristotle",
      last_name: "Norheny",
      email: "anorheny6@chronoengine.com",
      gender: "Male"
    },
    {
      id: 8,
      first_name: "Sabina",
      last_name: "Grumbridge",
      email: "sgrumbridge7@hhs.gov",
      gender: "Female"
    },
    {
      id: 9,
      first_name: "Stoddard",
      last_name: "Antonomoli",
      email: "santonomoli8@networkadvertising.org",
      gender: "Female"
    },
    {
      id: 10,
      first_name: "Hilary",
      last_name: "Powys",
      email: "hpowys9@mediafire.com",
      gender: "Female"
    }
  ]
 let listData= data.map((res)=>
 <>
 <ul>
 <li>{res.id}, {res.first_name}, {res.last_name}, {res.email}, {res.gender}</li>
 
 
 </ul>
 </>
 )
    return(
        <>
        {listData}
        </>
    )
}
export default List1;