import { Game } from '../../features/games/gamesSlice';

import { GameCard } from '../GameCard';

import styles from './GameList.module.scss';


export type GameListProps = {
    games: Game[];
}


export function GameList({ games }: GameListProps) {
    return (
        <div className={styles.GameList}>
            {games.map(game => <GameCard key={game.id} game={game} />)}
        </div>
    );
}
