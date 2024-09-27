import { prisma } from "@/config/db/dbConfig";

export async function GET(request) {
  const { pathname } = new URL(request.url);

  const category_id = pathname.split("/").pop();

  if (!category_id)
    return new Response(JSON.stringify({ error: "No category id provided" }), {
      status: 500,
    });
  try {
    const [products, category] = await prisma.$transaction([
      prisma.products.findMany({
        where: {
          category_id: parseInt(category_id),
        },
      }),
      prisma.categories.findUnique({
        where: {
          id: parseInt(category_id),
        }
      }),
    ]);


 
    return new Response(
      JSON.stringify({
        products,
        category,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("error", error);
    return new Response(JSON.stringify({ error: "Error fetching products" }), {
      status: 500,
    });
  }
}
