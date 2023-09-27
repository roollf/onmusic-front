import Link from 'next/link';
import styles from '@/components/header/header.module.css';

export default function HeaderBrand({contentLink, link}) {
    return (
        <Link className={`navbar-brand ${styles["navbar-header-brand"]}`} href={contentLink}>{link}</Link>
    )
}