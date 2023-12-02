import { useSelector, useDispatch } from 'react-redux/es/exports';

import { menuActions } from '../../features/menu/menuSlice';

import styles from './MenuButton.module.scss';


export function MenuButton() {
    const dispatch = useDispatch();
    const isOpened = useSelector(menuActions.getOpened);

    const clickHandler = () => dispatch(menuActions.toggle());

    const imageProps = {
        className: isOpened ? styles.ImageClosed : styles.ImageOpened,
        src: isOpened ? '/icons/menu-open.svg' : '/icons/menu-close.svg',
        alt: isOpened ? '☓' : '☰',
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
