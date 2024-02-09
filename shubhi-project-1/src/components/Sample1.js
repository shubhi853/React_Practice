import { useState } from "react";

function Sample1(props){
const [value, setValue]= useState("");

    const submit=()=>{
        setValue("102");
    }
    return(
        <>
<h1>{props.value}</h1>
<h1>{value}</h1>
<button onClick={submit}>Click Me</button>
        </>
    )
}
export default Sample1;