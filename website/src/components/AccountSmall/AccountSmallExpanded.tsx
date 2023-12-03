import { Avatar } from '../../features/avatars/avatarsSlice';

import { AccountInfo } from '../../elements/AccountInfo';
import { AccountNavigation } from '../../elements/AccountNavigation';

import styles from './AccountSmall.module.scss';


export type AccountSmallExpandedProps = {
    isAuthorized: boolean,
    userName: string,
    avatar: Avatar,
    infoReversed?: boolean,
};


export function AccountSmallExpanded({ isAuthorized, userName, avatar, infoReversed }: AccountSmallExpandedProps) {
    return (
        <div className={`${styles.AccountSmall} ${styles.AccountSmallExpanded}`}>
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
