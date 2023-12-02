import { useSelector } from 'react-redux';

import { userActions } from '../../features/user/userSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import styles from './Account.module.scss';


export function Account() {
    const userName = useSelector(userActions.getName);
    const avatarName = useSelector(userActions.getAvatar);
    const avatar = useSelector(avatarsActions.getAvatar(avatarName));

    return (
        <div className={styles.Account}>
            <span>{userName}</span>
            <img src={avatar.src} alt={avatar.name} />
        </div>
    );
}
