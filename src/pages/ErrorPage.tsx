import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    useEffect(()=>{ 
        navigate('/')
    } , [])
    return (
        <div>
            Error Page
        </div>
    );
};

export default ErrorPage;