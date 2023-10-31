import axios from "axios";
import { useState, useEffect } from "react";

export default function PlaylistGenerator(playlist) {
    const [musics, setMusics] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/musics').then(
            (musicResponse) => {
                setMusics(musicResponse.data)
            }
        );
    }, [])

    const musicArray = playlist.map((musicId) => {
        const mappedMusic = musics.find((music) => music.id === musicId);
        return mappedMusic;
    })

    return musicArray;
}