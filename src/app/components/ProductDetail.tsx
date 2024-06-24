import JSXStyle from "styled-jsx/style";
import { Product, Review } from "../models";


//ServerComponent
export async function ProductDetail({params}: {params: {product: Product, reviews: Review[]}}) {

    return (
        <div id="mainDiv">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                <h1 className="text-base font-semibold text-gray-50 dark:text-gray-300" >
                    Product Datail Page
                </h1>
                <div style={{color: 'white', fontSize: 15}}>
                    {params.product.name} - {params.product.price}
                    <ul>
                        {params.reviews.map((review) => (
                            <li key={review.id}> {review.content} </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
