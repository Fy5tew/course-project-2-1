import { useDispatch } from "react-redux";

import { titleActions } from "../../features/title/titleSlice";

import { PageLayout } from "../../components/PageLayout";


export function SignupPage() {
    const dispatch = useDispatch();
    dispatch(titleActions.setPartial('Регистрация'));

    return (
        <PageLayout>
            SIGNUP PAGE
        </PageLayout>
    );
}
