import { recoverUserinformation, singInRequest } from "@/services/auth/use-case"
import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from 'nookies'
import { api } from "@/services/api"
import { Router } from "next/router"


type User = { name: string }

type AuthContextType = {
    isAuthenticated: boolean,
    user: User| null,
    signIn: (data: SignInData) => Promise<void>
}


type SignInData = {
    username: string,
    password: string
}


export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }){
    const [user, setUser] = useState<User | null>(null)
    const isAuthenticated = !!user

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        
        if(token) {
            recoverUserinformation()
            .then(response => setUser(response.user))
        }
    
    }, [])

    async function signIn({username, password}: SignInData) {
        const { token, user } = await singInRequest({username, password})

        setCookie(undefined, 'keyguard-token', token, {
            maxAge: 60 * 60 * 1, // 1 hour
        })

        
        api.defaults.headers['Authorization'] = `Bearer ${token}`
        
        setUser(user)
        
        Router.push('/secure-page')
    }

    return (
        <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
            { children }
        </AuthContext.Provider>
    )
}