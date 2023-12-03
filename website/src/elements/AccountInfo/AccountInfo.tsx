import { Avatar } from '../../features/avatars/avatarsSlice';

import styles from './AccountInfo.module.scss';


export type AccountInfoProps = {
    userName: string,
    avatar: Avatar,
    reverse?: boolean;
};


export function AccountInfo({ userName, avatar, reverse }: AccountInfoProps) {
    const inner = [
        <span key="username">{userName}</span>,
        <div className={styles.AvatarWrapper} key="avatar"><img src={avatar.src} alt={avatar.name} /></div>,
    ];

    return (
        <div className={styles.AccountInfo}>
            {reverse ? inner.reverse() : inner}
        </div>
    );
}
