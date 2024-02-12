import {Link, Outlet} from "react-router-dom";
import styles from './Layout.module.css';
import Button from "../../components/Button/Button.tsx";

export function Layout() {

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src='/avatar-icon.png' alt='Иконка аватара' />
                <div className={styles['name']}>Matvey Komm</div>
                <div className={styles['email']}>afaf@afaf.ru</div>
            </div>
            <div className={styles['menu']}>
                <Link to='/' className={styles['link']}>
                    <img src='/menu-icon.svg' alt='Иконка меню' />
                    Menu
                </Link>
                <Link to='/cart' className={styles['link']}>
                    <img src='/cart-icon.svg' alt='Иконка корзины' />
                    Cart
                </Link>
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