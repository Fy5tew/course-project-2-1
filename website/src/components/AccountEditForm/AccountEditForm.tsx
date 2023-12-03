import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffectOnce } from 'usehooks-ts';

import { validateEmail } from '../../helpers/validateEmail';

import { userActions } from '../../features/user/userSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import form from '../../Form.module.scss';

import styles from './AccountEditForm.module.scss';


type Inputs = {
    name: string,
    email: string,
    avatar: string,
};


export function AccountEditForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const user = useSelector(userActions.getUser);

    useEffectOnce(() => {
        setValue('avatar', user.avatar);
        setValue('name', user.name);
        setValue('email', user.email ?? '');
    });

    const submitHandler: SubmitHandler<Inputs> = (data) => {
        dispatch(userActions.setAvatar(data.avatar));
        dispatch(userActions.setName(data.name));
        dispatch(userActions.setEmail(data.email));
        navigate(-1);
    };

    const resetHandler = () => {
        navigate(-1);
    };

    return (
        <form className={form.Form} onSubmit={handleSubmit(submitHandler)} onReset={resetHandler}>
            <input className={styles.Hidden} {...register('avatar')} />
            <label>
                Имя:
                <input {...register('name', {
                    validate: (value) => {
                        if (!value) {
                            return 'Это обязательное поле';
                        }
                        if (value.length < 3) {
                            return 'Допустимая длина: от 3 символов';
                        }
                        if (value.length > 15) {
                            return 'Допустимая длина: 15 символов';
                        }
                    },
                })} />
                {errors.name && <span className={form.Error}>{errors.name.message}</span>}
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
                {errors.email && <span className={form.Error}>{errors.email.message}</span>}
            </label>
            <div className={styles.FormControls}>
                <input type='submit' value='Сохранить изменения' />
                <input type='reset' value='Отменить' />
            </div>
        </form>
    );
}
