import { Suspense } from "react";
import { ProductList } from "../components/ProductList";


async function ProductListPage() {
    return (
        <div>
            <Suspense fallback={'Loading...'}>
                <ProductList />
            </Suspense>
        </div>
    );
}

export default ProductListPage;