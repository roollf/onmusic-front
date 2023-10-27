export default function SongDropdown({ songs, selectedSong, setSelectedSong }) {
    return (
        <select className="form-control" value={selectedSong} onChange={e => setSelectedSong(e.target.value)}>
        <option value="">Selecionar Música</option>
        {songs.map(song => (
            <option key={song} value={song}>
            {song}
            </option>
        ))}
        </select>
    );
}
