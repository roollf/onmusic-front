'use client';
import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "@/components";

export function MusicCardGenerator() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/albums').then(
            (response) => setAlbums(response.data)
        )
    }, [])

    return (
        albums.map((album) => {
            return (
                <Card musicObject={album} />
            )
        })
    );
}