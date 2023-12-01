import { useMenu } from '../../hooks/useMenu';

import styles from './MenuButton.module.scss';


export function MenuButton() {
    const menu = useMenu();

    const clickHandler = () => menu.toggle();

    const imageProps = {
        className: menu.isOpened ? styles.ImageClosed : styles.ImageOpened,
        src: menu.isOpened ? '/icons/menu-open.svg' : '/icons/menu-close.svg',
        alt: menu.isOpened ? '☰' : '☓',
    };

    return (
        <button 
            className={styles.MenuButton}
            onClick={clickHandler}
        >
            <img 
                className={imageProps.className}
                src={imageProps.src}
                alt={imageProps.alt}
            />
        </button>
    );
}
