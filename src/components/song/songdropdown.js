export default function SongDropdown({ songs, selectedSong, setSelectedSong }) {
    return (
        <select className="form-control" value={selectedSong} onChange={(e) => setSelectedSong(e.target.value)}>
            <option value="" disabled hidden>Selecionar Música</option>
            {songs.map(({ _id, song, duration }) => (
                <option key={_id} value={_id}>
                    {song} {duration}
                </option>
            ))}
        </select>
    );
}