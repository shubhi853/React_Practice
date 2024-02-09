export default function Login(){
    let formStyle ={
    backgroundColor:"blue"
    }
    return(
        <>
        <h1>Login Page</h1>
        <form style={formStyle} >
            <label>Username : </label>
            <input type="text" required></input> <br/>
            <label>Email</label>
            <input type="email" required></input> <br/>
            <label>Password : </label>
            <input type="password" required></input> <br/>
            <input type="submit"></input>


        </form>
        </>
    )
}