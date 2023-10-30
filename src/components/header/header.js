import styles from './header.module.css';
import { Search } from '@/components';
import { HeaderList, HeaderListItem, HeaderBrand, HeaderTagLine } from './headerComponents';

export default function Header({ brand, menuItems, tagLine }) {
    const menuItemsArray = menuItems.split(',').map(item => item.trim());
    
    return (
        <nav className={`navbar navbar-expand-lg ${styles["navbar-header"]} ${styles["navbar-header-border"]}`}>
            <div className="container-fluid">
                <HeaderBrand contentLink={"/"} link={brand} />
                <div className={`collapse navbar-collapse ${styles["navbar-header-content"]}`}>
                    <HeaderList>
                        {menuItemsArray.map((item, index) => (
                            <HeaderListItem key={index} contentLink={`/${item.toLowerCase()}`} link={item} />
                        ))}
                    </HeaderList>
                    <Search />
                    <HeaderTagLine content={tagLine} />
                </div>
            </div>
        </nav>
    )
}