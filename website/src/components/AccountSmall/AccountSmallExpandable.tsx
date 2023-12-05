import { useRef } from 'react';
import { useToggle } from 'usehooks-ts';

import { Avatar } from '../../features/avatars/avatarsSlice';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { AccountInfo } from '../../elements/AccountInfo';
import { AccountNavigation } from '../../elements/AccountNavigation';
import { ExpandIndicator } from '../../elements/ExpandIndicator';

import styles from './AccountSmall.module.scss';


export type AccountSmallExpandableProps = {
    isAuthorized: boolean,
    userName: string,
    avatar: Avatar,
    infoReversed?: boolean,
};


export function AccountSmallExpandable({ isAuthorized, userName, avatar, infoReversed }: AccountSmallExpandableProps) {
    const accountRef = useRef(null);
    const [ isExpanded, toggleExpanded, setExpanded ] = useToggle(false);

    const clickHandler = () => {
        toggleExpanded();
    };

    useOnClickOutside(accountRef, () => setExpanded(false))
    
    return (
        <div className={`${styles.AccountSmall} ${styles.AccountSmallExpandable}`} onClick={clickHandler} ref={accountRef}>
            <div className={styles.BasePart}>
                <ExpandIndicator isExpanded={isExpanded} />
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
