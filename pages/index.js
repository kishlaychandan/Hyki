import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { data } from "@/utils/apidata";
import Link from "next/link";

export default function Home({ products }) {
  const categoryCount = data.reduce((acc, item) => {
    item.categories.forEach((category) => {
      acc[category] = (acc[category] || 0) + 1;
    });
    return acc;
  }, {});

  // Convert the count object to an array of categories
  const categories = Object.entries(categoryCount).map(([name, count]) => ({
    name,
    productsAvailable: count,
  }));

  return (
    <main>
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Our Latest Product
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* products grid start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {data.slice(0, 3).map((product) => (
            <ProductCard key={product?.id} data={product} />
          ))}
        </div>
        <div class="flex justify-center">
          <Link
            href={"/product"}
            className="bg-black text-white text-[14px] rounded px-4 py-2 mb-4 inline-block"
          >
            {" View all Products"}
          </Link>
        </div>

        {/* products grid end */}
      </Wrapper>
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Our Category
          </div>
        </div>
        {/* heading and paragaph end */}

        {/* category grid start */}
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
          {categories.map((category) => (
            <div className="bg-white shadow-md rounded p-4" key={category.name}>
              <h3 className="text-lg font-bold">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </h3>
              <p className="text-gray-500">
                {category.productsAvailable} products available
              </p>
            </div>
          ))}
        </div>

        {/* category grid end */}
      </Wrapper>
    </main>
  );
}

export async function getStaticProps() {
  const products = await fetchDataFromApi("/catalog");

  return {
    props: { products },
  };
}
