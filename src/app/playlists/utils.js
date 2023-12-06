'use client';
import { CardPlaylist } from "@/components";
import axios from "axios";
import { useEffect, useState } from "react";

export function MusicCardGenerator() {
    const [playlist, setPlaylist] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/playlists').then(
            (response) => setPlaylist(response.data)
        )
    }, [])

    return (
        playlist.map((album) => {
            return (
                <CardPlaylist musicObject={album} />
            )
        })
    );
}