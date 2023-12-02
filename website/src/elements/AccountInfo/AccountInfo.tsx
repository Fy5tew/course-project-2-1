import { Avatar } from '../../features/avatars/avatarsSlice';

import styles from './AccountInfo.module.scss';


export type AccountInfoProps = {
    userName: string,
    avatar: Avatar,
};


export function AccountInfo({ userName, avatar }: AccountInfoProps) {
    return (
        <div className={styles.AccountInfo}>
            <span>{userName}</span>
            <img src={avatar.src} alt={avatar.name} />
        </div>
    );
}
