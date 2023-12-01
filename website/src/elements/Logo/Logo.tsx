import styles from './Logo.module.scss';


export type LogoProps = {
    short?: boolean,
};


export function Logo({ short }: LogoProps) {
    return (
        <div className={styles.Logo}>
            <img 
                src="/logo/logo.svg" 
                alt="" 
            />
            {!short && <span>F5STORE</span>}
        </div>
    )
}
