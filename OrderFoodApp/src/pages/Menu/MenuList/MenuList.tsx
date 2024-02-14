import ProductCard from "../../../components/ProductCard/ProductCard.tsx";
import {MenuListProps} from "./MenuList.props.ts";

export function MenuList({products}: MenuListProps) {

    return products.map(product => (
        <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.ingredients.join(', ')}
            image={product.image}
            price={product.price}
            rating={product.rating}
        />
    ))
}