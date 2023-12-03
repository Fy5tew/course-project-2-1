import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { validateEmail } from '../../helpers/validateEmail';

import { userActions } from '../../features/user/userSlice';

import styles from '../../Form.module.scss'


type Inputs = {
    name: string,
    email: string,
    password: string,
    passwordRepeat: string,
}


export function SignUpForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const submitHandler: SubmitHandler<Inputs> = (data) => {
        dispatch(userActions.authorize(data));
        navigate('/');
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit(submitHandler)}>
            <label>
                Имя:
                <input {...register('name', { 
                    validate: (value) => {
                        if (!value) {
                            return 'Это обязательное поле';
                        }
                    } 
                })} />
                {errors.name && <span className={styles.Error}>{errors.name.message}</span>}
            </label>
            <label>
                E-mail:
                <input {...register('email', {
                    validate: (value) => {
                        if (!value) {
                            return 'Это обязательное поле';
                        }
                        if (!validateEmail(value)) {
                            return 'Неверный формат e-mail';
                        }
                    }
                })} type='email' />
                {errors.email && <span className={styles.Error}>{errors.email.message}</span>}
            </label>
            <label>
                Пароль:
                <input {...register('password', {
                    validate: (value) => {
                        if (!value) {
                            return 'Это обязательное поле';
                        }
                    }
                })} type='password' />
                {errors.password && <span className={styles.Error}>{errors.password.message}</span>}
            </label>
            <label>
                Повторите пароль:
                <input {...register('passwordRepeat', { 
                    validate: (value) => {
                        if (!value) {
                            return 'Это обязательное поле';
                        }
                        if (watch('password') !== value) {
                            return 'Пароли не совпадают'
                        }
                    }
                })} type='password' />
                {errors.passwordRepeat && <span className={styles.Error}>{errors.passwordRepeat.message}</span>}
            </label>
            <input type='submit' value='Создать аккаунт' formNoValidate />
        </form>
    );
}
