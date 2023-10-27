'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Songs(){
    const [songs, setSongs] = useState({ musics: [] })

    useEffect(() => {
        axios.get('http://localhost:3004/albums').then(
            (response) => {
                setSongs(response.data);
            }
        )
    }, [])

    return(
        <>
            {songs.musics.map((song) => {
                {song.song}
            })}
        </>
    )
}