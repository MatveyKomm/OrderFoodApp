import Headling from "../../components/Headling/Headling.tsx";
import Input from "../../components/Input/Input.tsx";
import Button from "../../components/Button/Button.tsx";
import {Link} from "react-router-dom";
import styles from './Login.module.css';
import {FormEvent, useState} from "react";
import axios, {AxiosError} from "axios";
import {PREFIX} from "../../helpers/API.ts";

export type LoginForm = {
    email: {
        value: string;
    },
    password: {
        value: string;
    },
};

export function Login() {
    const [error, setError] = useState<string | null>();

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()

        setError(null);
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        if (!email.value || !password.value) {
            return;
        }
        await sendLogin(email.value, password.value);
    };

    const sendLogin = async (email: string, password: string) => {
        try {
            await axios.post(`${PREFIX}/auth/login`, {
                email,
                password
            });
        } catch (e) {
            if (e instanceof AxiosError) {
                setError(e.response?.data.message);
            }
        }
    };

    return <div className={styles['login']}>
        <Headling>Вход</Headling>
        {error && <div className={styles['error']}>{error}</div>}
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