import {NavLink, Outlet} from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button.tsx";
import cn from 'classnames';

export function Layout() {

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar-icon.png' alt='Иконка аватара' />
                <div className={styles['name']}>Matvey Komm</div>
                <div className={styles['email']}>afaf@afaf.ru</div>
            </div>
            <div className={styles['menu']}>
                <NavLink to='/' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                    })}>
                    <img src='/menu-icon.svg' alt='Иконка меню' />
                    Меню
                </NavLink>
                <NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}>
                    <img src='/cart-icon.svg' alt='Иконка корзины' />
                    Корзина
                </NavLink>
            </div>
            <Button className={styles['exit']}>
                <img src='/exit-icon.svg' alt='Иконка выхода' />
                Выход
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>;
}