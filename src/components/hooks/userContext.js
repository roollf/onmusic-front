'use client';
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [usuarioLogado, setUsuarioLogado] = useState(null);
    const [autenticado, setAutenticado] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem('usuarioLogado');
        if (storedUser) {
            setUsuarioLogado(JSON.parse(storedUser));
            setAutenticado(true);
        }
    }, [])

    const login = (usuario) => {
        setUsuarioLogado(usuario);
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
        setAutenticado(true);
        router.push('/');
    }

    const logout = () => {
        setUsuarioLogado(null);
        localStorage.removeItem('usuarioLogado');
        setAutenticado(false);
        router.push('/users/signin');
    }

    return (
        <UserContext.Provider value={{ usuarioLogado, autenticado, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext }