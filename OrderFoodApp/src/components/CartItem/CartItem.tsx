import {CartItemProps} from "./CartItem.props.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import styles from './CartItem.module.css';
import {cartActions} from "../../store/cart.slice.ts";



function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const removeFromCartHandler = () => {
    };

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart(props.id));
    };

    const deleteFromCartHandler= () => {

    };

    return (
        <div className={styles['item']}>
            <div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
            <div className={styles['description']}>
                <div className={styles['name']}>{props.name}</div>
                <div className={styles['currency']}>{props.price}&nbsp;₽</div>
            </div>
            <div className={styles['actions']}>
                <button className={styles['button']} onClick={removeFromCartHandler}>
                    <img src='/add-to-cart-icon.svg' alt='Удалить из корзины'/>
                </button>
                <div>{props.count}</div>
                <button className={styles['button']} onClick={addToCartHandler}>
                    <img src='/add-to-cart-icon.svg' alt='Добавить в корзину'/>
                </button>
                <button className={styles['delete']} onClick={deleteFromCartHandler}>
                    <img src='/add-to-cart-icon.svg' alt='Удалить'/>
                </button>
            </div>
        </div>
    )
}

export default CartItem;