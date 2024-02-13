import Headling from "../../components/Headling/Headling.tsx";
import Search from "../../components/Search/Search.tsx";
import styles from './Menu.module.css';
import ProductCard from "../../components/ProductCard/ProductCard.tsx";

export function Menu() {
    return <>
        <div className={styles['head']}>
            <Headling>Menu</Headling>
            <Search placeholder='Введите блюдо или состав' />
        </div>
        <div>
            <ProductCard
                id={1}
                title={'Pleasure'}
                description={'Tomato'}
                image={'/example-icon.png'}
                price={300}
                rating={5}
            />
        </div>
    </>;
}