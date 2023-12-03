import { useTitle } from "../../hooks/useTitle";

import { PageLayout } from "../../components/PageLayout";
import { AccountEditForm } from "../../components/AccountEditForm";


export function AccountEditPage() {
    useTitle('Измение профиля');

    return (
        <PageLayout>
            <h1>Настройка профиля</h1>
            <AccountEditForm />
        </PageLayout>
    );
}
