import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { validateEmail } from '../../helpers/validateEmail';

import { userActions } from '../../features/user/userSlice';

import styles from '../../Form.module.scss'


type Inputs = {
    email: string,
    password: string,
}


export function SignInForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const submitHandler: SubmitHandler<Inputs> = (data) => {
        dispatch(userActions.authorize({...data, name: 'User'}));
        navigate('/account');
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit(submitHandler)}>
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
            <input type='submit' value='Войти' formNoValidate />
        </form>
    );
}
