import Headling from "../../components/Headling/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {Link, useNavigate} from "react-router-dom";
import styles from './Login.module.css';
import {FormEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {login, userActions} from "../../store/user.slice.ts";

export type LoginForm = {
    email: {
        value: string;
    },
    password: {
        value: string;
    },
};

export function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const { jwt, loginErrorMessage } = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (jwt) {
            navigate('/');
        }
    }, [jwt, navigate])

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()

        dispatch(userActions.clearLoginError());
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        if (!email.value || !password.value) {
            return;
        }
        await sendLogin(email.value, password.value);
    };

    const sendLogin = async (email: string, password: string) => {
        dispatch(login({ email, password}));
    };

    return <div className={styles['login']}>
        <Headling>Вход</Headling>
        {loginErrorMessage && <div className={styles['error']}>{loginErrorMessage}</div>}
        <form className={styles['form']} onSubmit={submitHandler}>
            <div className={styles['field']}>
                <label htmlFor='email'>Ваш email</label>
                <Input id='email' name='email' placeholder='Email'/>
            </div>
            <div className={styles['field']}>
                <label htmlFor='password'>Ваш пароль</label>
                <Input id='password' name='password' type='password' placeholder='Пароль'/>
            </div>
            <Button appearance={'big'}>Вход</Button>
        </form>
        <div className={styles['links']}>
            <div>Нет аккаунта?</div>
            <Link to='/auth/register'>Зарегистрироваться</Link>
        </div>
    </div>;
}