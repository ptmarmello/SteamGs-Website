import React, { cerateContext, useState, useContext, useEffect } from ' react';
import Cookies from 'js-cookies';
import Router, { useRouter } from 'next/router';

import api from '../api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUserFromCookies(){
            const token = Cookies.get('token')
            if (token){
                console.log("got it ")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data: user } = await api.get(`users/me`)
                if(user) setUser(user);
            }
            setLoading(false);
        }
        loadUserFromCookies()
    },[])

    const login = async (email, password)=> {
        const {data:token} = await api.post('auth/login', {email, password:password})
        if(token){
            console.log('got coooookies');
            Cookies.set('token', token,{expires: 60})
            api.defaults.headers.Authorization = `Bearer ${token.token}`
            const { data: user} = await api.get('users/me')
            setUser(user)
            console.log("got user", user);
        }
    }

    const logout = (email, password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/login'
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated : !!user, user, login, loading, logout }} >
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext)


export const ProtectRoute = ({children}) =>{
    const { isAuthenticated, isLoading } = useAuth();
    if( isLoading || (!isAuthenticated && window.location.pathname !== '/login')){
        return( <LoadingScreen/> )
    }
    return children;
}