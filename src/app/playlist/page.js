import Link from 'next/link';
import playlists from '@/mocks/data/music.json';

export default function Playlists() {
    const playlistsFormat = playlists.map((playlist) => {
        return (
            <>
                <Link href={`/playlists/detail/${playlist.id}`}>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={playlist.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{playlist.name}</h5>
                        </div>
                    </div>
                </Link>
            </>
        )
        })
        return playlistsFormat;
}