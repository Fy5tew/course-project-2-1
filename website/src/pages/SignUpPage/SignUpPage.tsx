import { Link } from 'react-router-dom';

import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';
import { SignUpForm } from '../../components/SignUpForm';

import styles from './SignUpPage.module.scss'


export function SignUpPage() {
    useTitle('Регистрация');

    return(
        <PageLayout auth='guest'>
            <div className={styles.SignUpPage}>
                <h1 className={styles.Title}>Регистрация</h1>
                <div className={styles.FormWrapper}>
                    <SignUpForm />
                </div>
                <p className={styles.HelpText}>
                    Уже есть аккаунт? <Link to='/signin'>Войдите</Link> в него!
                </p>
            </div>
        </PageLayout>
    );
}
