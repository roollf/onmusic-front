'use client';
import styles from './header.module.css';
import Link from 'next/link';
import { Search } from '@/components';
import { HeaderList, HeaderListItem, HeaderBrand, HeaderTagLine } from './headerComponents';
import { UserContext } from '../hooks/userContext';
import { useContext } from 'react';

export default function Header({ brand, menuItems, tagLine }) {
    const menuItemsArray = menuItems.split(',').map(item => item.trim());
    const { autenticado, usuarioLogado, logout } = useContext(UserContext);

    return (
        <nav className={`navbar navbar-expand-lg ${styles["navbar-header"]} ${styles["navbar-header-border"]}`}>
            <div className="container-fluid">
                <HeaderBrand contentLink={"/"} link={brand} />
                <div className={`collapse navbar-collapse ${styles["navbar-header-content"]}`}>
                    <HeaderList>
                        {autenticado ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href={`/users/profile/${usuarioLogado._id}`}>Profile</Link>
                                </li>
                                {menuItemsArray.map((item, index) => (
                                    <HeaderListItem key={index} contentLink={`/${item.toLowerCase()}`} link={item} />
                                ))}
                                <li className="nav-item">
                                    <button variant="link" onClick={logout} className={`nav-link ${styles["navbar-header-button"]}`}>Logout</button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/users/signin">Login</Link>
                                </li>
                                {menuItemsArray.map((item, index) => (
                                    <HeaderListItem key={index} contentLink={`/${item.toLowerCase()}`} link={item} />
                                ))}
                            </>
                        )}
                    </HeaderList>
                    <Search />
                    <HeaderTagLine content={tagLine} />
                </div>
            </div>
        </nav>
    )
}