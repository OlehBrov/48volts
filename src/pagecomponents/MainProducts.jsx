import Link from "next/link";

const MainProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  );
  const { categories } = await response.json();

  return (
    <div className="py-20">
      <div className="flex justify-center mb-6">
        <h2 className="text-4xl text-center mb-8">Категорії товарів</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {categories.length &&
          categories.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.id}`}
              className="bg-blue-200 p-5 rounded-lg flex flex-col items-center gap-4 group hover:shadow-[0_0_11px_rgba(33,33,33,.2)]"
            >
              <div className="w-60 h-52 overflow-hidden rounded-lg">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                /> 
              </div>
              <p className="w-full text-center text-xl transition-all duration-300 group-hover:text-blue-400">
                {category.name_local}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default MainProducts;
