import Link from "next/link";
import { Product } from "../models";

async function getProducts(): Promise<Product[]>{
    //avoid over requesting
    const response = await fetch('http://localhost:3000/api/products', {
        next: {
            revalidate: 10, //dynamic cache
            // tags: ['products']
        }
    });
    return response.json();
}


export async function ProductList() {
    const products = await getProducts();

    return (
        <div>
            <b> <h1>Product List Page </h1> </b>
            <ul>
                { products.map((product) => (
                    <Link href={`/products/${product.id}`} key={product.id}>
                        <li>
                            {product.name} - {product.price}
                        </li>
                    </Link>
                 ) ) }
            </ul>
        </div>
    );
}
