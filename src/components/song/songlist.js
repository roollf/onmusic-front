export default function SongList({ playlist }) {
    return (
    <div>
        <ul>
            {playlist.map(song => (
            <li key={song}>{song}</li>
            ))}
        </ul>
    </div>
);
}
