import { useMenu } from '../../hooks/useMenu';

import styles from './MenuButton.module.scss';


export function MenuButton() {
    const menu = useMenu();

    const clickHandler = () => menu.toggle();

    const imageProps = {
        className: menu.isOpened ? styles.ImageOpened : styles.ImageClosed,
        src: menu.isOpened ? '/icons/menu-close.svg' : '/icons/menu-open.svg',
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
