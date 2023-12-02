import { useSelector } from 'react-redux';

import { userActions } from '../../features/user/userSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import { AccountFull } from './AccountFull';
import { AccountExpandable } from './AccountExpandable';


export type AccountProps = {
    type: 'full' | 'expandable',
};


export function Account({ type }: AccountProps) {
    const isAuthorized = useSelector(userActions.getAuthorized);
    const user = useSelector(userActions.getUser);
    const avatar = useSelector(avatarsActions.getAvatar(user.avatar));
    
    if (type === 'full') {
        return (
            <AccountFull
                isAuthorized={isAuthorized}
                userName={user.name}
                avatar={avatar}
            />
        );
    }

    return (
        <AccountExpandable
            isAuthorized={isAuthorized}
            userName={user.name}
            avatar={avatar}
        />
    );
}
