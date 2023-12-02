import { useDispatch } from 'react-redux';

import { titleActions } from '../../features/title/titleSlice';

import { PageLayout } from '../../components/PageLayout';


export function AccountPage() {
    const dispatch = useDispatch();
    dispatch(titleActions.setPartial('Аккаунт'));

    return (
        <PageLayout>
            ACCOUNT PAGE
        </PageLayout>
    );
}
