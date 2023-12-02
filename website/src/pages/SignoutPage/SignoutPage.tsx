import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffectOnce, useCountdown } from 'usehooks-ts';

import { useTitle } from '../../hooks/useTitle';

import { userActions } from '../../features/user/userSlice';

import { PageLayout } from '../../components/PageLayout';


export function SignoutPage() {
    useTitle('Выход');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [countdown, { startCountdown }] = useCountdown({
        countStart: 5,
        intervalMs: 1000,
    });

    useEffectOnce(() => {
        dispatch(userActions.unauthorize());
        startCountdown();
    });

    useEffect(() => {
        if (countdown === 0) {
            navigate('/');
        }
    }, [navigate, countdown]);

    return (
        <PageLayout>
            <p>
                Вы вышли из аккаунта.
            </p>
            <p>
                Через {countdown} секунд вы будете перенаправлены на главную страницу...
            </p>
        </PageLayout>
    );
}
