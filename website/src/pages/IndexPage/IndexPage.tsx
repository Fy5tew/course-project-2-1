import { useDispatch } from 'react-redux/es/exports'

import { titleActions } from '../../features/title/titleSlice';

import { PageLayout } from '../../components/PageLayout';


export function IndexPage() {
    const dispatch = useDispatch();
    dispatch(titleActions.setPartial('Главная'));
    
    return (
        <PageLayout>
            INDEX PAGE
        </PageLayout>
    );
}
