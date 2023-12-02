import { useSelector } from 'react-redux';

import { userActions } from '../../features/user/userSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import { AccountFull } from './AccountFull';
import { AccountExpandable } from './AccountExpandable';


export type AccountProps = {
    type: 'full' | 'expandable',
};


export function Account({ type }: AccountProps) {
    const userName = useSelector(userActions.getName);
    const avatarName = useSelector(userActions.getAvatar);
    const avatar = useSelector(avatarsActions.getAvatar(avatarName));
    
    if (type === 'full') {
        return (
            <AccountFull
                userName={userName}
                avatar={avatar}
            />
        );
    }

    return (
        <AccountExpandable
            userName={userName}
            avatar={avatar}
        />
    );
}
