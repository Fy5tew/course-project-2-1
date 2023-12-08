import { Game } from '../../features/games/gamesSlice';

import { GameCard, GameCardProps } from '../GameCard';

import styles from './GameList.module.scss';


export type GameListProps = {
    games: Game[];
} & Omit<GameCardProps, 'game'>;


export function GameList({ games, ...props }: GameListProps) {
    return (
        <div className={styles.GameList}>
            {games.length
                ? games.map(game => <GameCard key={game.id} game={game} {...props} />)
                : <h3>Список игр пуст</h3>
            }
        </div>
    );
}
