import styles from './header.module.css';
import { HeaderList, HeaderListItem, HeaderBrand, HeaderTagLine } from './headerComponents';

export default function Header({ brand, menuItems, tagLine }) {
    const menuItemsArray = menuItems.split(',').map(item => item.trim());
    
    return (
        <nav className={`navbar navbar-expand-lg ${styles["navbar-header"]} ${styles["navbar-header-border"]}`}>
            <div className="container-fluid">
                <HeaderBrand contentLink={"/"} link={brand} />
                <div className="collapse navbar-collapse">
                    <HeaderList>
                        {menuItemsArray.map((item, index) => (
                            <HeaderListItem key={index} contentLink={`/${item.toLowerCase()}`} link={item} />
                        ))}
                    </HeaderList>
                    <HeaderTagLine content={tagLine} />
                </div>
            </div>
        </nav>
    )
}