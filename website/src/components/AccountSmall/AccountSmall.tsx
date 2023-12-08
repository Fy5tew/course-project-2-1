import { useSelector } from 'react-redux';

import { authActions } from '../../features/auth/authSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import { AccountSmallExpanded } from './AccountSmallExpanded';
import { AccountSmallExpandable } from './AccountSmallExpandable';


export type AccountSmallProps = {
    type: 'expanded' | 'expandable',
    infoReversed?: boolean,
};


export function AccountSmall({ type, infoReversed }: AccountSmallProps) {
    const isAuthorized = useSelector(authActions.getAuthorized);
    const user = useSelector(authActions.getUser);
    const avatar = useSelector(avatarsActions.getAvatar(user.avatar));
    
    if (type === 'expanded') {
        return (
            <AccountSmallExpanded
                isAuthorized={isAuthorized}
                userName={user.name}
                avatar={avatar}
                infoReversed={infoReversed}
            />
        );
    }

    return (
        <AccountSmallExpandable
            isAuthorized={isAuthorized}
            userName={user.name}
            avatar={avatar}
            infoReversed={infoReversed}
        />
    );
}
