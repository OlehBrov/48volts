import { prisma } from "@/config/db/dbConfig";

export async function GET(request) {
  const { pathname } = new URL(request.url);

  const product_id = pathname.split("/").pop();
  if (!product_id)
    return new Response(JSON.stringify({ error: "No product id provided" }), {
      status: 500,
    });
  try {
    const res = await prisma.products.findUnique({
      where: {
        id: parseInt(product_id),
      },
      include: {
        categories: true,
      },
    });
  
    return new Response(
      JSON.stringify({
        product: res,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching products" }), {
      status: 500,
    });
  }
}
