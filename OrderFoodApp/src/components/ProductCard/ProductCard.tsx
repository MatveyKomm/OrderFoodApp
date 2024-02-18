import {ProductCardProps} from "./ProductCard.props.ts";
import styles from './ProductCard.module.css';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {cartActions} from "../../store/cart.slice.ts";
import {MouseEvent} from "react";

export function ProductCard(props: ProductCardProps) {
    const dispatch = useDispatch<AppDispatch>();

    const addToCartHandler = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(cartActions.addToCart(props.id));
    }

    return (
        <Link to={`/product/${props.id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{backgroundImage: `url('${props.image}')`}}>
                    <div className={styles['price']}>
                        {props.price}&nbsp;
                        <span className={styles['currency']}>₽</span>
                    </div>
                    <button className={styles['add-to-cart']} onClick={addToCartHandler}>
                        <img src='/add-to-cart-icon.svg' alt='Иконка добавления в корзину'/>
                    </button>
                    <div className={styles['rating']}>
                        {props.rating}&nbsp;
                        <img src='/star-icon.png' alt='Иконка рейтинга'/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{props.title}</div>
                    <div className={styles['description']}>{props.description}</div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;