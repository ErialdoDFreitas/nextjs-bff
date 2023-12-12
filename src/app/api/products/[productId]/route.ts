import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, {params}: {params: {productId: string}}) {

    console.log('GET PRODUCT DETAILS\n');
    console.log('productId:', params.productId);

    const response = await fetch(`http://localhost:8001/products/${params.productId}`, {
        next: {
            revalidate: 10, //dynamic cache
            // tags: ['products']
        }
    });
    return NextResponse.json(await response.json());
    
}