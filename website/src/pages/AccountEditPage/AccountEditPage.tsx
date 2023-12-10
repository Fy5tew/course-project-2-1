import { useTitle } from "../../hooks/useTitle";

import { PageLayout } from "../../components/PageLayout";
import { AccountEditForm } from "../../components/AccountEditForm";

import styles from './AccountEditPage.module.scss';


export function AccountEditPage() {
    useTitle('Измение профиля');

    return (
        <PageLayout auth='auth'>
            <div className={styles.AccountEditPage}>
                <h1>Настройка профиля</h1>
                <AccountEditForm />
            </div>
        </PageLayout>
    );
}
