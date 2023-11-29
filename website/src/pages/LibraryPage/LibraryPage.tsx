import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';


export function LibraryPage() {
    useTitle('Библиотека');

    return (
        <PageLayout>
            LIBRARY PAGE
        </PageLayout>
    );
}
