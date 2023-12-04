import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

import { userActions } from '../../features/user/userSlice';

import * as validation from '../../form/formValidation';
import { ErrorHint } from '../../form/ErrorHint';
import form from '../../form/Form.module.scss'


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
        <form className={form.Form} onSubmit={handleSubmit(submitHandler)}>
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
                    placeholder='Введите пароль'
                    {...register('password', {
                        validate: validation.validatePasswordInput,
                    })} 
                />
                <ErrorHint errorField={errors.password} />
            </label>
            <input type='submit' value='Войти' formNoValidate />
        </form>
    );
}
