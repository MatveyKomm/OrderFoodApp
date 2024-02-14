import Headling from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";
import styles from './Menu.module.css';
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import {PREFIX} from '../../helpers/API.ts'
import {Product} from "../../interfaces/product.interface.ts";
import {useEffect, useState} from "react";

export function Menu() {
    const [products, setProducts] = useState<Product[]>([]);
    const getMenu = async () => {
        try {
            const response = await fetch(`${PREFIX}/products`)
            if (!response.ok) {
                return;
            }
            const data = await response.json() as Product[];
            console.log(data.length)
            setProducts(data);
        } catch(e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        getMenu();
    }, []);

    return <>
        <div className={styles['head']}>
            <Headling>Меню</Headling>
            <Search placeholder='Введите блюдо или состав' />
        </div>
        <div>
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    description={product.ingredients.join(', ')}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                />
            ))}
        </div>
    </>;
}