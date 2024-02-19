import {CartItemProps} from "./CartItem.props.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import styles from './CartItem.module.css';
import {cartActions} from "../../store/cart.slice.ts";



function CartItem(props: CartItemProps) {
    const dispatch = useDispatch<AppDispatch>();

    const removeFromCartHandler = () => {
        dispatch(cartActions.remove(props.id));
    };

    const addToCartHandler = () => {
        dispatch(cartActions.addToCart(props.id));
    };

    const deleteFromCartHandler= () => {
        dispatch(cartActions.delete(props.id))
    };

    return (
        <div className={styles['item']}>
            <div className={styles['image']} style={{backgroundImage: `url('${props.image}')`}}></div>
            <div className={styles['description']}>
                <div className={styles['name']}>{props.name}</div>
                <div className={styles['price']}>{props.price}&nbsp;₽</div>
            </div>
            <div className={styles['actions']}>
                <button className={styles['minus']} onClick={removeFromCartHandler}>
                    <img src='/minus-icon.svg' alt='Удалить из корзины'/>
                </button>
                <div className={styles['number']}>{props.count}</div>
                <button className={styles['plus']} onClick={addToCartHandler}>
                    <img src='/plus-icon.svg' alt='Добавить в корзину'/>
                </button>
                <button className={styles['delete']} onClick={deleteFromCartHandler}>
                    <img src='/delete-item-icon.svg' alt='Удалить'/>
                </button>
            </div>
        </div>
    )
}

export default CartItem;