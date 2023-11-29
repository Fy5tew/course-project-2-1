import styles from './Account.module.scss';


export function Account() {
    return (
        <div className={styles.Account}>
            <span>Гость</span>
            <img src='/images/avatars/guest.png' alt='' />
        </div>
    );
}
