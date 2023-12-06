import { useLocation } from 'react-router-dom';

import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';

import styles from './404NotFoundPage.module.scss';


export function NotFoundPage() {
    useTitle('Страница не найдена');

    const location = useLocation();

    return (
        <PageLayout>
            <div className={styles.NotFoundPage}>
                <h1>404</h1>
                <h2>Страница не найдена</h2>
                <p>Запрашиваемая вами страница (<span>{location.pathname}</span>) не найдена. Возможно, она устарела, была удалена или не существовала вовсе.</p>
            </div>
        </PageLayout>
    );
}
