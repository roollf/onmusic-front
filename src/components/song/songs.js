'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Songs(){
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/musics').then(
            (response) => {
                console.log(response.data)
                setSongs(response.data);
            }
        )
    }, [])

    return(
        <>
            {songs?.musics?.map((song) => {
                return (
                    <p> {song} </p>
                )
            })}
        </>
    )
}