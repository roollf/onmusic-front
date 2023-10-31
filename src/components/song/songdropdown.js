export default function SongDropdown({ songs, selectedSong, setSelectedSong }) {
    return (
        <select className="form-control" value={selectedSong} onChange={e => setSelectedSong(e.target.value)}>
        <option value="" disabled hidden>Selecionar Música</option>
        {songs.map(song => (
            <option key={song.id} value={song.id}>
                {song.song} {song.duration}
            </option>
        ))}
        </select>
    );
}
