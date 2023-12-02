import { useTitle } from "../../hooks/useTitle";

import { PageLayout } from "../../components/PageLayout";


export function SignInPage() {
    useTitle('Вход');

    return (
        <PageLayout>
            SIGNIN PAGE
        </PageLayout>
    );
}
