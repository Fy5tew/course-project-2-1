import { useDispatch } from 'react-redux'

import { titleActions } from '../../features/title/titleSlice';

import { PageLayout } from '../../components/PageLayout';


export function LibraryPage() {
    const dispatch = useDispatch();
    dispatch(titleActions.setPartial('Библиотека'));

    return (
        <PageLayout>
            LIBRARY PAGE
        </PageLayout>
    );
}
