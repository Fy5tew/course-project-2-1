import { useDispatch } from 'react-redux';

import { titleActions } from '../../features/title/titleSlice';

import { PageLayout } from '../../components/PageLayout';


export function StorePage() {
    const dispatch = useDispatch();
    dispatch(titleActions.setPartial('Магазин'));

    return (
        <PageLayout>
            STORE PAGE
        </PageLayout>
    );
}
