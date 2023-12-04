import { FieldError } from 'react-hook-form';

import styles from './Form.module.scss';


export type ErrorHintProps = {
    errorField?: FieldError,
};


export function ErrorHint({ errorField }: ErrorHintProps) {
    return (
        <>
            {errorField && <span className={styles.Error}>{errorField.message}</span>}
        </>
    );
}
