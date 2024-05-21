import { useNavigate } from "react-router-dom";

const LoginCheck=(type)=>{
    const navigate=useNavigate()
    const response=localStorage.getItem("info");
    if(response){
        const type=JSON.parse(response).type;
        navigate(`/${type}`);
    }
}
export default LoginCheck