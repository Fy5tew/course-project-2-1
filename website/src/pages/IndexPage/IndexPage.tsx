import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';


export function IndexPage() {
    useTitle('Главная');
    
    return (
        <PageLayout>
            INDEX PAGE
        </PageLayout>
    );
}
