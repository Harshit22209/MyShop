
export const PageAuth=(type)=>{
    //const navigate=useNavigate()
    const response=localStorage.getItem("info");
    if(!response || (JSON.parse(response).type!=type)){
        //navigate("/register")
        return false;
    }
    return true;
}
