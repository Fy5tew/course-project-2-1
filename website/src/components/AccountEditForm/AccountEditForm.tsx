import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useEffectOnce } from 'usehooks-ts';

import { userActions } from '../../features/user/userSlice';
import { avatarsActions } from '../../features/avatars/avatarsSlice';

import * as validation from '../../form/formValidation';
import { ErrorHint } from '../../form/ErrorHint';
import form from '../../form/Form.module.scss'

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
    const avatar = useSelector(avatarsActions.getAvatar(user.avatar));

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
        <div className={styles.AccountEditForm}>
            <div className={styles.AvatarEditPreview}>
                <img src={avatar.src} alt='' />
            </div>
            <form className={form.Form} onSubmit={handleSubmit(submitHandler)} onReset={resetHandler}>
                <input className={styles.Hidden} {...register('avatar')} />
                <label>
                    Имя:
                    <input 
                        {...register('name', { 
                            validate: validation.validateNameInput,
                        })} 
                    />
                    <ErrorHint errorField={errors.name} />
                </label>
                <label>
                    E-mail:
                    <input
                        type='email'
                        {...register('email', {
                            validate: validation.validateEmailInput,
                        })} 
                    />
                    <ErrorHint errorField={errors.email} />
                </label>
                <div className={styles.FormControls}>
                    <input type='submit' value='Сохранить изменения' />
                    <input type='reset' value='Отменить' />
                </div>
            </form>
        </div>
    );
}
