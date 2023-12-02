import { Avatar } from '../../features/avatars/avatarsSlice';

import { AccountInfo } from '../../elements/AccountInfo';
import { AccountNavigation } from '../../elements/AccountNavigation';

import styles from './Account.module.scss';


export type AccountFullProps = {
    userName: string,
    avatar: Avatar,
};


export function AccountFull({ userName, avatar }: AccountFullProps) {
    return (
        <div className={`${styles.Account} ${styles.AccountFull}`}>
            <AccountInfo 
                userName={userName}
                avatar={avatar}
            />
            <AccountNavigation type='vertical' />
        </div>
    );
}
