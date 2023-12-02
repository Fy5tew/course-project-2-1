import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';


export function SignUpPage() {
    useTitle('Регистрация');

    return(
        <PageLayout>
            SIGNUP PAGE
        </PageLayout>
    );
}
