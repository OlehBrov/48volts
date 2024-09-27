import { prisma } from "@/config/db/dbConfig";

export async function GET(request) {
  try {
    const categories = await prisma.categories.findMany();

    return new Response(
      JSON.stringify({
        categories
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching products" }), {
      status: 500,
    });
  }
}
