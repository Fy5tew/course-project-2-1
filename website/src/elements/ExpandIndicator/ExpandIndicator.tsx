import styles from './ExpandIndicator.module.scss';


export type ExpandIndicatorProps = {
    isExpanded: boolean,
}


export function ExpandIndicator({ isExpanded }: ExpandIndicatorProps) {
    return (
        <img
            className={styles.ExpandIndicator}
            data-expanded={isExpanded}
            src='/icons/chevron-down.svg'
            alt={isExpanded ? '⌄' : '⌃'}
        />
    );
}
