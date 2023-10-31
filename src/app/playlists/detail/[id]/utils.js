'use client';
import { useState, useEffect } from "react";
import axios from "axios";

export default function PlaylistGenerator(props) {
    const idSelecionado = props.params.id;
    const [playlist, setPlaylist] = useState({ musics: [] });
    const [musics, setMusics] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3004/musics').then(
            (musicResponse) => {
                setMusics(musicResponse.data)
            }
        );

        axios.get(`http://localhost:3004/playlists/${idSelecionado}`).then(
            (playlistResponse) => {
                setPlaylist(playlistResponse.data);
            }
        );
    }, [])

    const musicArray = playlist.musics.map((musicId) => {
        const mappedMusic = musics.find((music) => music.id === musicId);
        return mappedMusic;
    })

    return musicArray;
}