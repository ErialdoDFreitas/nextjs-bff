import { Product, Review } from "../models";

export async function getProductWithReviews(id: string): Promise<{product: Product, reviews: Review[]}> {
    const productFetch = fetch(`http://localhost:3000/api/products/${id}`, {
        next: {
            revalidate: 10, //dynamic cache
            // tags: ['products'] //on demand
        }
    });

    const reviewsFetch = fetch(`http://localhost:3000/api/products/${id}/reviews`, {
        next: {
            revalidate: 1 * 60, //1 minuto
            // tags: ['reviews'] // on demand
        }
    })

    const [productResponse, reviewsResponse] = await Promise.all([productFetch, reviewsFetch]);

    const [product, reviews] = await Promise.all([
        productResponse.json(),
        reviewsResponse.json(),
    ]);

    return {product, reviews};
}