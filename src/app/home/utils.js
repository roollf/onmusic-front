'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Carousel } from '@/components';

export function MusicCardGenerator() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3004/playlists').then(
            (response) => {
                setPlaylists(response.data)
            }
        )
    }, [])

    return (
        playlists.map((playlist) => {
            return (
                <Card musicObject={playlist} />
            )
        })
    );
}

export function CarouselGenerator() {
    const data = require('@/mocks/data/carousel.json');
    return (
        <Carousel carouselId={"carouselHome"} image={data} />
    );
}