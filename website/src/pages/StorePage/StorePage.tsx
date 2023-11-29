import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';


export function StorePage() {
    useTitle('Магазин');

    return (
        <PageLayout>
            STORE PAGE
        </PageLayout>
    );
}
