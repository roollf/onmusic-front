export default function SongList({ playlist }) {
    return (
        <div>
            <ul>
                {playlist.map((track, index) => {
                    return (
                        <li>
                            {track.song}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
