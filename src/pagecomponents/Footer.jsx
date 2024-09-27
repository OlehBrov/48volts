import Logo from "@/components/Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import {  IconsMapper} from "@/components/IconsMapper";

const Footer = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories`
  );

  const { categories } = await response.json();

  return (
    <footer className="py-20 bg-gray-900">
      <MaxWidthWrapper>
        <div className="grid grid-cols-4">
          <div className="flex items-center justify-center">
            <Logo alignment={"v"}/>
          </div>
          <div className="border-l pl-4 ">
            <h4 className="text-white uppercase mb-5 font-semibold">
              Категорії товарів
            </h4>
            <ul className="flex flex-col gap-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/categories/${category.id}`}
                    className="inline-flex text-white hover:text-blue-300 transition-colors duration-300"
                  >
                    <p>{category.name_local}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-l pl-4 ">
            <h4 className="text-white uppercase mb-5 font-semibold">
              Соціальні мережі
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  target="blank"
                  href="https://instagram.com"
                  className="flex text-white items-center gap-3 hover:text-blue-300 transition-colors duration-300"
                >
                  {" "}
                  <IconsMapper
                    params={{ name: "instagram", width: 24, height: 24 }}
                  />{" "}
                  <p>Instagram</p>
                </Link>
              </li>
              <li>
                <Link
                  target="blank"
                  href="https://tiktok.com"
                  className="flex text-white items-center gap-3 hover:text-blue-300 transition-colors duration-300"
                >
                  <IconsMapper
                    params={{ name: "tiktok", width: 24, height: 24 }}
                  />
                  <p>Tok Tok</p>
                </Link>
              </li>
              <li>
                <Link
                  target="blank"
                  href="https://x.com"
                  className="flex text-white items-center gap-3 hover:text-blue-300 transition-colors duration-300"
                >
                  <IconsMapper params={{ name: "x", width: 24, height: 24 }} />
                  <p>X</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-l pl-4 ">
            <h4 className="text-white uppercase mb-5 font-semibold">
              Контакти
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="tel:+380505554433"
                  target="blank"
                  className="flex text-white items-center gap-3 hover:text-blue-300 transition-colors duration-300"
                >
                  <IconsMapper
                    params={{ name: "phone", width: 24, height: 24 }}
                  />
                  +38 050 555 44 33
                </a>
              </li>
              <li>
                <a
                  href="mailto:48volts@gmail.com"
                  target="blank"
                  className="flex text-white items-center gap-3 hover:text-blue-300 transition-colors duration-300"
                >
                  <IconsMapper
                    params={{ name: "email", width: 24, height: 24 }}
                  />
                  48volts@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/KUxwLALYNCZ1ShzB9"
                  target="blank"
                  className="flex text-white items-center gap-3 hover:text-blue-300 transition-colors duration-300"
                >
                  <IconsMapper
                    params={{ name: "location", width: 24, height: 24 }}
                  />
                  м. Київ, вул. Центральна, 1
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full pt-20 flex justify-center">
          <h2 className="text-white/20 uppercase">
            48volts.com.ua - безперебійне живлення Вашого житла та бізнесу
          </h2>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
