'use client';
import { useState } from 'react';
import SongDropdown from '../components/Song/SongDropdown';
import SongList from '../components/Song/SongList';

export default function Formplaylist() {
  // Estado para a música selecionada e para a playlist
const [selectedSong, setSelectedSong] = useState('');
const [playlist, setPlaylist] = useState([]);

// Simulação das músicas do backend
const songs = [
'Song 1',
'Song 2',
'Song 3',
// ... outras músicas
];

// Função para adicionar a música à playlist
function addSongToPlaylist() {
if (selectedSong && !playlist.includes(selectedSong)) {
    setPlaylist(prevPlaylist => [...prevPlaylist, selectedSong]);
}
}

return (
    <div>
        <h1>Criar Playlist</h1>
        
        <div>
            <SongDropdown songs={songs} selectedSong={selectedSong} setSelectedSong={setSelectedSong} />
            <button onClick={addSongToPlaylist}>+</button>
        </div>

        <SongList playlist={playlist} />

        <button>Criar</button>
    </div>
);
}

