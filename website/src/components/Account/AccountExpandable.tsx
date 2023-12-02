import { useRef } from 'react';
import { useToggle } from 'usehooks-ts';

import { Avatar } from '../../features/avatars/avatarsSlice';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { AccountInfo } from '../../elements/AccountInfo';
import { AccountNavigation } from '../../elements/AccountNavigation';

import styles from './Account.module.scss';


export type AccountExpandableProps = {
    isAuthorized: boolean,
    userName: string,
    avatar: Avatar,
    infoReversed?: boolean,
};


export function AccountExpandable({ isAuthorized, userName, avatar, infoReversed }: AccountExpandableProps) {
    const accountRef = useRef(null);
    const [ isExpanded, toggleExpanded, setExpanded ] = useToggle(false);

    const clickHandler = () => {
        toggleExpanded();
    };

    useOnClickOutside(accountRef, () => setExpanded(false))
    
    return (
        <div className={`${styles.Account} ${styles.AccountExpandable}`} onClick={clickHandler} ref={accountRef}>
            <div className={styles.BasePart}>
                <AccountInfo
                    userName={userName}
                    avatar={avatar}
                    reverse={infoReversed}
                />
            </div>
            <div className={styles.ExpandablePart} data-expanded={isExpanded}>
                <AccountNavigation
                    type='vertical'
                    showIcons={true}
                    isAuthorized={isAuthorized}
                />
            </div>
        </div>
    );
}
