import styles from './Logo.module.scss';


export function Logo() {
    return (
        <div className={styles.Logo}>
            <img 
                src="/logo/logo.svg" 
                alt="" 
            />
            <span>F5STORE</span>
        </div>
    )
}
