import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';
import { AccountBig } from '../../components/AccountBig';


export function AccountPage() {
    useTitle('Профиль');

    return (
        <PageLayout>
            <h1>Ваш профиль</h1>
            <AccountBig />
        </PageLayout>
    );
}
