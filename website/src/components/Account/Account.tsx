import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useToggle } from 'usehooks-ts';

import { userActions } from '../../features/user/userSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { AccountNavigation } from '../../elements/AccountNavigation';

import { AccountInfo } from '../../elements/AccountInfo';

import styles from './Account.module.scss';


export function Account() {
    const userName = useSelector(userActions.getName);
    const avatarName = useSelector(userActions.getAvatar);
    const avatar = useSelector(avatarsActions.getAvatar(avatarName));

    const accountRef = useRef(null);
    const [ isExpanded, toggleExpanded, setExpanded ] = useToggle(false);

    const clickHandler = () => {
        toggleExpanded();
    };

    useOnClickOutside(accountRef, () => setExpanded(false))
    
    return (
        <div className={styles.Account} onClick={clickHandler} ref={accountRef}>
            <div className={styles.BasePart}>
                <AccountInfo
                    userName={userName}
                    avatar={avatar}
                />
            </div>
            <div className={styles.ExpandablePart} data-expanded={isExpanded}>
                <AccountNavigation 
                    type='vertical'
                />
            </div>
        </div>
    );
}
