import {useLoaderData} from "react-router-dom";
import {Product} from "../../interfaces/product.interface.ts";

export function Product() {
    const productData = useLoaderData() as Product;

    return <>Product - {productData.name}</>;
}