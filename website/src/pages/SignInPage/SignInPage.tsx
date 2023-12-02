import { useEffectOnce } from "usehooks-ts";
import { useDispatch } from "react-redux";

import { useTitle } from "../../hooks/useTitle";

import { userActions } from "../../features/user/userSlice";

import { PageLayout } from "../../components/PageLayout";


export function SignInPage() {
    useTitle('Вход');

    const dispatch = useDispatch();

    useEffectOnce(() => {
        dispatch(userActions.authorize({
            name: 'Fy5tew',
            email: 'nik@gmail.com',
            password: 'hjwqvabvepawepaiyg278',
        }));
    });

    return (
        <PageLayout>
            SIGNIN PAGE
        </PageLayout>
    );
}
