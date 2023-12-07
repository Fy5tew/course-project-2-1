import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';


export function CartPage() {
    useTitle('Корзина');

    return (
        <PageLayout>
            CART PAGE
        </PageLayout>
    );
}
