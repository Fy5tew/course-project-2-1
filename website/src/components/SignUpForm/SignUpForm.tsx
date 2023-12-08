import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { authActions } from '../../features/auth/authSlice';

import * as validation from '../../form/formValidation';
import { ErrorHint } from '../../form/ErrorHint';
import form from '../../form/Form.module.scss'


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
    const { enqueueSnackbar } = useSnackbar();

    const submitHandler: SubmitHandler<Inputs> = (data) => {
        dispatch(authActions.authorize(data));
        navigate('/account');
        enqueueSnackbar<'success'>('Регистрация прошла успешно', {
            variant: 'success',
        });
    };

    return (
        <form className={form.Form} onSubmit={handleSubmit(submitHandler)}>
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
            <label>
                Пароль:
                <input 
                    type='password'
                    autoComplete='new-password'
                    placeholder='Придумайте пароль'
                    {...register('password', {
                        validate: validation.validatePasswordInput,
                    })} 
                />
                <ErrorHint errorField={errors.password} />
            </label>
            <label>
                Повторите пароль:
                <input 
                    type='password'
                    autoComplete='new-password'
                    placeholder='Подтвердите пароль'
                    {...register('passwordRepeat', { 
                        validate: (value) => validation.validatePasswordRepeatInput(value, watch('password')),
                    })}
                />
                <ErrorHint errorField={errors.passwordRepeat} />
            </label>
            <input type='submit' value='Создать аккаунт' formNoValidate />
        </form>
    );
}
