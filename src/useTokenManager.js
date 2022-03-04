import { useState } from "react";

function useTokenManager() {
    const getJWTToken = () => {
        return JSON.parse(sessionStorage.getItem('token'))?.token; 
    };

    const [token, setToken] = useState(getJWTToken());
    
    const saveJWTToken = (token) => {
        sessionStorage.setItem('token', JSON.stringify(token));
        setToken(token.token);
    };

    const clearJWTToken = () => {
        sessionStorage.clear();
    }

    return {
        setToken: saveJWTToken,
        token,
        clearToken: clearJWTToken
    }
}


export default useTokenManager;