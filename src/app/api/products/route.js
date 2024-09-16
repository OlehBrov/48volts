import { prisma } from "@/config/db/dbConfig";

export async function GET(request) {
  try {
    const products = await prisma.products.findMany({
      include: {
        categories: true,
      },
    });

    return new Response(
      JSON.stringify({
        products
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching products" }), {
      status: 500,
    });
  }
}
