import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { authActions } from '../../features/auth/authSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import styles from './AccountBig.module.scss';


export function AccountBig() {
    const user = useSelector(authActions.getUser);
    const avatar = useSelector(avatarsActions.getAvatar(user.avatar));

    return (
        <div className={styles.AccountBig}>
            <div className={styles.AvatarWrapper}>
                <img
                    className={styles.Avatar}
                    src={avatar.src}
                    alt={avatar.name}
                />
            </div>
            <div className={styles.Info}>
                <span className={styles.Name}>
                    {user.name}
                </span>
                <span className={styles.Email}>
                    <img src='/icons/email.svg' alt='' />
                    {user.email}
                </span>
                <span className={styles.EditLink}>
                    <img src='/icons/edit.svg' alt='' />
                    <Link to='/account/edit'>Редактировать</Link>
                </span>
            </div>
        </div>
    );
}
