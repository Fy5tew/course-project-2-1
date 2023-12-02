import { Avatar } from '../../features/avatars/avatarsSlice';

import { AccountInfo } from '../../elements/AccountInfo';
import { AccountNavigation } from '../../elements/AccountNavigation';

import styles from './Account.module.scss';


export type AccountFullProps = {
    isAuthorized: boolean,
    userName: string,
    avatar: Avatar,
};


export function AccountFull({ isAuthorized, userName, avatar }: AccountFullProps) {
    return (
        <div className={`${styles.Account} ${styles.AccountFull}`}>
            <AccountInfo 
                userName={userName}
                avatar={avatar}
            />
            <AccountNavigation 
                type='vertical'
                isAuthorized={isAuthorized}
            />
        </div>
    );
}
