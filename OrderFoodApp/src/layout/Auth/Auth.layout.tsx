import {Outlet} from "react-router-dom";
import styles from './Auth.layout.module.css';

export function AuthLayout() {
    return <div className={styles['layout']}>
        <div className={styles['logo']}>
            <img src='/login-logo.svg' alt='Логотип' />
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>
}