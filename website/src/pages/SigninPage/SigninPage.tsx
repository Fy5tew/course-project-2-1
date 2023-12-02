import { useTitle } from "../../hooks/useTitle";

import { PageLayout } from "../../components/PageLayout";


export function SigninPage() {
    useTitle('Вход');

    return (
        <PageLayout>
            SIGNIN PAGE
        </PageLayout>
    );
}
