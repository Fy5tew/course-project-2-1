import { useDispatch } from "react-redux";

import { titleActions } from "../../features/title/titleSlice";

import { PageLayout } from "../../components/PageLayout";


export function SigninPage() {
    const dispatch = useDispatch();
    dispatch(titleActions.setPartial('Вход'));

    return (
        <PageLayout>
            SIGNIN PAGE
        </PageLayout>
    );
}
