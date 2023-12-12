import { NextResponse } from "next/server";

//Route Handling
export async function GET() {
    try {
        console.log('GET PRODUCTS\n');
        //avoid over requesting
        const response = await fetch('http://localhost:8001/products', {
            next: {
                revalidate: 10, //dynamic cache
                // tags: ['products']
            }
        });

        if (!response.ok) {
            throw new Error('HTTP error! Status: ${response.status}');
        }
 
        return NextResponse.json(await response.json()); 
    
    } catch (error: any) {
        console.error('Error fetching data! [Error]: ', error);
        return NextResponse.json({
            statusCode: 500,
            statusText: 'Internal Server Error',
        });
    }

}