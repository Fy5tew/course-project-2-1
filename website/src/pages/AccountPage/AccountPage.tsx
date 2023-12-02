import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';


export function AccountPage() {
    useTitle('Аккаунт');

    return (
        <PageLayout>
            ACCOUNT PAGE
        </PageLayout>
    );
}
