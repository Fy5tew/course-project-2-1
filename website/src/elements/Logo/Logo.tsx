import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';


export type LogoProps = {
    short?: boolean,
};


export function Logo({ short }: LogoProps) {
    return (
        <div className={styles.Logo}>
            <Link to='/'>
                <img 
                    src='/logo/logo.svg' 
                    alt=''
                />
                {!short && <span>F5STORE</span>}
            </Link>
        </div>
    )
}
