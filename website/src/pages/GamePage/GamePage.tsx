import { useParams } from 'react-router-dom';

import { useTitle } from '../../hooks/useTitle';

import { PageLayout } from '../../components/PageLayout';

import styles from './GamePage.module.scss';


export type GamePageProps = {
    gameId: string,
}


export function GamePage() {
    useTitle('');
    const params = useParams();

    console.log(params);

    return (
        <PageLayout>
            
        </PageLayout>
    );
}
