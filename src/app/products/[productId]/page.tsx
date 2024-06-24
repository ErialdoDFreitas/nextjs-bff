import { ProductDetail } from "@/app/components/ProductDetail";
import { getProductWithReviews } from "@/app/queries/products.query";


//ServerComponent
async function ProductDetailPage({params}: {params: {productId: string}} ) {
    const { product, reviews } = await getProductWithReviews(params.productId);

    return (
        <div>
            <ProductDetail params={{
                product: product,
                reviews: reviews
            }} />
        </div>
    );
}

export default ProductDetailPage;