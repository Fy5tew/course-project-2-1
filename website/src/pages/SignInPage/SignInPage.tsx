import { Link } from "react-router-dom";

import { useTitle } from "../../hooks/useTitle";

import { PageLayout } from "../../components/PageLayout";
import { SignInForm } from "../../components/SignInForm";

import styles from './SignInPage.module.scss';


export function SignInPage() {
    useTitle('Вход');

    return (
        <PageLayout auth='guest'>
            <div className={styles.SignInPage}>
                <h1 className={styles.Title}>Вход в аккаунт</h1>
                <div className={styles.FormWrapper}>
                    <SignInForm />
                </div>
                <p className={styles.HelpText}>
                    Ещё нет аккаунта? Зарегистрируйтесь <Link to='/signup'>здесь</Link>!
                </p>
            </div>
        </PageLayout>
    );
}
