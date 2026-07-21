import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        restoreSession();
    },[]);

    async function restoreSession() {
        try {
            const storedUser = await AsyncStorage.getItem("user");

            if(storedUser){
                setUser(JSON.parse(storedUser));
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    async function login(email, password) {
        try{

            console.log("Login called");
            const loggedUser = {
                id:1,
                name: "Sam",
                email,
            };
            
            await AsyncStorage.setItem(
                "user",
                JSON.stringify(loggedUser),
            );
            
            setUser(loggedUser);
            setIsAuthenticated(true);
            console.log("is authenticated set to true");
        } catch (error){
            console.log("LOGIN ERROR:",error);
        }
    }

    async function register(data) {
        const newUser = {
            id: Date.now().toString(),
            ...data
        };

        await AsyncStorage.getItem(
            "user",
            JSON.stringify(newUser),
        )

        setUser(newUser);
        setIsAuthenticated(true);
    }

    async function logout() {
        await AsyncStorage.removeItem("user");

        setUser(null);
        setIsAuthenticated(false);
    }

    function updateProfile(data){
        const updated = {
            ...user,
            ...data,
        };

        setUser(updated);

        AsyncStorage.setItem(
            "user",
            JSON.stringify(updated),
        );
    }

    return (
        <AuthContext.Provider value={{user,loading,isAuthenticated,login,register,logout,updateProfile}}>
            {children}
        </AuthContext.Provider>
    )
}