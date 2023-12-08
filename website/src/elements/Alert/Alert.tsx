import React from 'react'; 

import styles from './Alert.module.scss';


export type AlertProps = {
    icon: string,
    children: React.ReactNode,
}


export function Alert({ icon, children }: AlertProps) {
    return (
        <h3 className={styles.Alert}>
            <img src={icon} alt='' />
            <span>
                {children}
            </span>
        </h3>
    );
}
