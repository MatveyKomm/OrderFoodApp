import ProductCard from "../../../components/ProductCard/ProductCard.tsx";
import {MenuListProps} from "./MenuList.props.ts";
import styles from './MenuList.module.css';

export function MenuList({products}: MenuListProps) {

    return <div className={styles['wrapper']}>
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
}