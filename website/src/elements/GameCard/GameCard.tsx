import React, { useRef, useEffect } from 'react';
import { useHover, useToggle } from 'usehooks-ts';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

import { Game } from '../../features/games/gamesSlice';

import { ExpandIndicator } from '../ExpandIndicator';

import styles from './GameCard.module.scss';
import { Link } from 'react-router-dom';


export type GameCardProps = {
    game: Game,
    showPrice?: boolean,
    showAgeLimit?: boolean,
    showMetacriticScore?: boolean,
    ActionButton?: (props: { game: Game }) => JSX.Element,
}


export function GameCard({ 
    game,
    showPrice=false, 
    showAgeLimit=false, 
    showMetacriticScore=false,
    ActionButton,
}: GameCardProps) {
    const [ isExpanded, toggleExpanded, setExpanded ] = useToggle(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const isHovering = useHover(cardRef);

    useEffect(() => {
        if (!isHovering) {
            setExpanded(isHovering);
        }
    }, [setExpanded, isHovering]);

    useOnClickOutside(cardRef, () => {
        setExpanded(false);
    })

    const cardClickHandler = () => {
        toggleExpanded();
    };

    const expandableClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div className={styles.GameCard} onClick={cardClickHandler} ref={cardRef}>
            <div className={styles.Cover}>
                <img src={game.media.cover} alt='' />
                {showAgeLimit && game.ageLimit && <span className={styles.AgeLimit}>{game.ageLimit}</span>}
                {showMetacriticScore && game.metacriticScore && <span className={styles.MetacriticScore}>{game.metacriticScore}</span>}
                {ActionButton && <div className={styles.ActionButton}><ActionButton game={game} /></div>}
            </div>
            <div className={styles.Head}>
                <h3>
                    <ExpandIndicator isExpanded={isExpanded} />
                    <span>
                        <span className={styles.Title}>{game.title}</span>
                        {showPrice && <span className={styles.Price}> ·&nbsp;${game.price}</span>}
                    </span>
                </h3>
            </div>
            <div className={styles.Expandable} data-expanded={isExpanded} onClickCapture={expandableClickHandler}>
                <table className={styles.Info}>
                    <tbody>
                        <tr>
                            <th>Дата выхода:</th>
                            <td>{game.releaseDate}</td>
                        </tr>
                        <tr>
                            <th>Жанры:</th>
                            <td>{game.genres.join(', ')}</td>
                        </tr>
                    </tbody>
                </table>
                <Link to={`/game/${game.id}`}>Перейти к игре <img src='/icons/chevron-forward.svg' alt='' /></Link>
            </div>
        </div>
    );
}
