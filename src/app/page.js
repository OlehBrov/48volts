import SwiperElem from "@/components/Swiper";
import Advantages from "@/pagecomponents/Advantages";
import Description from "@/pagecomponents/Description";
import MainProducts from "@/pagecomponents/MainProducts";
import MaxWidthWrapper from "@/pagecomponents/MaxWidthWrapper";
import { Populars } from "@/pagecomponents/Populars";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex relative">
        <MaxWidthWrapper>
          <div className="relative mt-60 z-10">
            <h1 className="text-zinc-600 font-semibold text-8xl">
              Заголовок - батареї наше все
            </h1>
          </div>
        </MaxWidthWrapper>
        <SwiperElem />
      </section>
      <section className="py-20">
        <MaxWidthWrapper>
          <Populars />
        </MaxWidthWrapper>
      </section>
      <section className="py-20">
        <MaxWidthWrapper>
          <Description />
        </MaxWidthWrapper>
      </section>
      <section className="bg-blue-200">
        <MaxWidthWrapper>
          <Advantages />
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <MainProducts />
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
