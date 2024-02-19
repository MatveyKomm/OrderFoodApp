import Headling from "../../components/Headling/Headling.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import CartItem from "../../components/CartItem/CartItem.tsx";
import {useEffect, useState} from "react";
import {Product} from "../../interfaces/product.interface.ts";
import axios from "axios";
import {PREFIX} from "../../helpers/API.ts";
import styles from './Cart.module.css';

export function Cart() {
    const [cartProducts, setCartProducts] = useState<Product[]>([]);
    const items = useSelector((s: RootState) => s.cart.items);

    const getItemById = async (id: number) => {
        const { data } = await axios.get<Product>(`${PREFIX}/products/${id}`)
        return data;
    };

    const getAllItems = async () => {
        const res = await Promise.all(items.map(i => getItemById(i.id)));
        setCartProducts(res);
    }

    useEffect(() => {
        getAllItems();
    }, [items]);

    return <>
        <Headling className={styles['head']}>Корзина</Headling>
        {items.map(i => {
            const product = cartProducts.find(pr => pr.id === i.id);
            if (!product) {
                return;
            }
            return <CartItem key={product.id} count={i.count} {...product} />
        })}
    </>;
}