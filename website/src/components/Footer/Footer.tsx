import styles from './Footer.module.scss';


export function Footer() {
    return (
        <div className={styles.Footer}>
            <div className={styles.Social}>
                <p>Не пропускайте важные новости и события</p>
                <div className={styles.Links}>
                    <img src='/icons/logo-discord.svg' alt='' />
                    <img src='/icons/logo-vk.svg' alt='' />
                    <img src='/icons/logo-instagram.svg' alt='' />
                    <img src='/icons/logo-twitch.svg' alt='' />
                    <img src='/icons/logo-youtube.svg' alt='' />
                    <img src='/icons/logo-tiktok.svg' alt='' />
                </div>
            </div>
            <div className={styles.Apps}>
                <p>F5Store также доступен в виде приложений</p>
                <div className={styles.Links}>
                    <img src='/icons/logo-windows.svg' alt='' />
                    <img src='/icons/logo-tux.svg' alt='' />
                    <img src='/icons/logo-apple.svg' alt='' />
                    <img src='/icons/logo-android.svg' alt='' />
                    <img src='/icons/logo-google-playstore.svg' alt='' />
                    <img src='/icons/logo-apple-appstore.svg' alt='' />
                </div>
            </div>
            <div className={styles.Separator}></div>
            <div className={styles.Copyright}>
                <p>© 2023, F5Store, Inc. Все права сохранены.</p>
                <p>F5Store и логотип F5Store являются товарными знаками или зарегистрированными товарными знаками F5Store, Inc. в мире.</p>
                <p>Все прочие марки и наименования продукции являются товарными знаками соответствующих владельцев.</p>
            </div>
            {/* <div className={styles.Separator}></div> */}
            <div className={styles.Agreements}>
                <p>Условия предоставления услуг</p>
                <p>Политика конфиденциальности</p>
                <p>Правила возврата магазина</p>
            </div>
        </div>
    );
}
