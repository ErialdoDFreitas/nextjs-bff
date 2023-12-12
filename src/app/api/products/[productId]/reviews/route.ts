import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: { params: {productId: string} }) {

    const response = await fetch(`http://localhost:8002/reviews/?product_id=${params.productId}`, {
        next: {
            revalidate: 10, //dynamic cache
            // tags: ['products']
        }
    });

    return NextResponse.json(await response.json());
}