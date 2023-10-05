'use client';
import { useEffect } from 'react';

export default function AppWrapper({children}) {
    useEffect(() => {
        require("node_modules/bootstrap/dist/js/bootstrap.min.js")
    }, []);

    return (
        <>
            {children}
        </>
    );
}