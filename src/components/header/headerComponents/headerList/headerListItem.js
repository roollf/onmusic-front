import Link from 'next/link';

export default function HeaderListItem({ contentLink, link }) {
    return (
        <li className="nav-item">
            <Link className="nav-link" href={contentLink}>{link}</Link>
        </li>
    )
}