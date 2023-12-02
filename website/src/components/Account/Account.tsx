import { useSelector } from "react-redux";

import { userActions } from "../../features/user/userSlice";
import { avatarsActions } from "../../features/avatars/avatarsSlice";

import { AccountInfo } from "../../elements/AccountInfo";


export function Account() {
    const userName = useSelector(userActions.getName);
    const avatarName = useSelector(userActions.getAvatar);
    const avatar = useSelector(avatarsActions.getAvatar(avatarName));
    
    return (
        <AccountInfo
            userName={userName}
            avatar={avatar}
        />
    );
}
