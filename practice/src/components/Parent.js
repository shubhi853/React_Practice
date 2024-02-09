 import Home from './Home'
 import Login from './Login'
function Parent(){
    let isLoggedIn=true;
    return(
        <>
        {isLoggedIn? (<Home/>):(<Login/>)}
        </>
    )
}
export default Parent;