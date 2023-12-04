import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useToggle, useEffectOnce } from 'usehooks-ts';

import { useOnClickOutside } from '../../hooks/useOnClickOutside';

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
    prevPassword: string,
    newPassword: string,
};


export function AccountEditForm() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        setValue,
        getValues,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const avatars = useSelector(avatarsActions.getAvatars);
    const user = useSelector(userActions.getUser);
    const avatar = useSelector(avatarsActions.getAvatar(getValues('avatar') || user.avatar));

    const [
        isAvatarsSelectOpened, 
        toggleAvatarsSelectOpen,
        setAvatarsSelectOpen,
    ] = useToggle(false);
    const avatarEditRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(avatarEditRef, () => {
        setAvatarsSelectOpen(false);
    });

    useEffectOnce(() => {
        setValue('avatar', user.avatar);
        setValue('name', user.name);
        setValue('email', user.email ?? '');
    });

    const submitHandler: SubmitHandler<Inputs> = (data) => {
        dispatch(userActions.setAvatar(data.avatar));
        dispatch(userActions.setName(data.name));
        dispatch(userActions.setEmail(data.email));
        if (data.newPassword) {
            dispatch(userActions.setPassword(data.newPassword));
        }
        navigate(-1);
    };

    const resetHandler = () => {
        navigate(-1);
    };

    const avatarPreviewClickHandler = () => {
        toggleAvatarsSelectOpen();
    };

    const setAvatar = (avatarName: string) => () => {
        setValue('avatar', avatarName);
        setAvatarsSelectOpen(false);
    }

    return (
        <form 
            className={`${form.Form} ${styles.AccountEditForm}`} 
            onSubmit={handleSubmit(submitHandler)} 
            onReset={resetHandler}
        >
            <div className={styles.AvatarEdit} ref={avatarEditRef}>
                <h2>Аватар</h2>
                <div className={styles.AvatarEditPreview} onClick={avatarPreviewClickHandler}>
                    <img src={avatar.src} alt='' />
                </div>
                <div className={styles.AvatarEditSelect} data-opened={isAvatarsSelectOpened}>
                    {avatars
                    .filter(avatar => avatar.type !== 'special')
                    .map(avatar => (
                        <div 
                            className={styles.AvatarWrapper} 
                            data-current={watch('avatar') === avatar.name}
                            onClick={setAvatar(avatar.name)}
                            key={avatar.name} 
                        >
                            <img src={avatar.src} alt={avatar.name} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.InfoEdit}>
                <h2>Информация</h2>
                <label>
                    Имя:
                    <input 
                        placeholder='Укажите имя'
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
                        placeholder='Укажите e-mail'
                        {...register('email', {
                            validate: validation.validateEmailInput,
                        })} 
                    />
                    <ErrorHint errorField={errors.email} />
                </label>
            </div>
            <div className={styles.PasswordEdit}>
                <h2>Смена пароля</h2>
                <label>
                    Текущий пароль
                    <input
                        type='password'
                        autoComplete='new-password'
                        placeholder='Введите текущий пароль'
                        {...register('prevPassword', {
                        })} 
                    />
                    <ErrorHint errorField={errors.prevPassword} />
                </label>
                <label>
                    Новый пароль
                    <input
                        type='password'
                        autoComplete='new-password'
                        placeholder='Введите новый пароль'
                        {...register('newPassword', {
                            validate: (value) => validation.validatePasswordChangeInput(user.password || '', watch('prevPassword'), value),
                        })}
                    />
                    <ErrorHint errorField={errors.newPassword} />
                </label>
            </div>
            <div className={styles.FormControls}>
                <input type='submit' value='Сохранить изменения' formNoValidate />
                <input type='reset' value='Отменить' />
            </div>
        </form>
    );
}
