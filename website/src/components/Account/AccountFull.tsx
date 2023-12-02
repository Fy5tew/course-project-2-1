import { Avatar } from '../../features/avatars/avatarsSlice';

import { AccountInfo } from '../../elements/AccountInfo';
import { AccountNavigation } from '../../elements/AccountNavigation';

import styles from './Account.module.scss';


export type AccountFullProps = {
    isAuthorized: boolean,
    userName: string,
    avatar: Avatar,
    infoReversed?: boolean,
};


export function AccountFull({ isAuthorized, userName, avatar, infoReversed }: AccountFullProps) {
    return (
        <div className={`${styles.Account} ${styles.AccountFull}`}>
            <AccountInfo 
                userName={userName}
                avatar={avatar}
                reverse={infoReversed}
            />
            <AccountNavigation 
                type='vertical'
                showIcons={true}
                isAuthorized={isAuthorized}
            />
        </div>
    );
}
