import { useState } from "react";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { data } from "@/utils/apidata";

export default function Home() {
  const [filters, setFilters] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const priceRanges = {
    "50-100": (price) => price >= 50 && price < 100,
    "100-200": (price) => price >= 100 && price < 200,
    // Add more ranges as needed
  };

  const quantityMap = {
    "100ml": 0.1,
    "250ml": 0.25,
    // Add more mappings as needed
  };

  const filteredProducts = data.filter((product) => {
    const matchesName = product.name.toLowerCase().includes(filters.name.toLowerCase());

    const matchesPrice = filters.price && priceRanges[filters.price]
      ? priceRanges[filters.price](product.price)
      : true;

    const matchesQuantity = filters.quantity ? product.weight === quantityMap[filters.quantity] : true;

    return matchesName && matchesPrice && matchesQuantity;
  });

  return (
    <main>
      <Wrapper>
        {/* Heading Section */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            All Products
          </div>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between my-5 p-5 bg-gray-100 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search by name"
            value={filters.name}
            onChange={(e) => setFilters({ ...filters, name: e.target.value })}
            className="border rounded-lg p-3 mb-2 md:mb-0 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            value={filters.price}
            onChange={(e) => setFilters({ ...filters, price: e.target.value })}
            className="border rounded-lg p-3 mb-2 md:mb-0 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Price Range</option>
            <option value="50-100">50 - 100</option>
            <option value="100-200">100 - 200</option>
            <option value="200-300">200 - 300</option>
            <option value="300-400">300 - 400</option>
            <option value="400-500">400 - 500</option>
            <option value="500-600">500 - 600</option>
          </select>

          <select
            value={filters.quantity}
            onChange={(e) => setFilters({ ...filters, quantity: e.target.value })}
            className="border rounded-lg p-3 md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Quantity</option>
            <option value="50ml">50ml</option>
            <option value="100ml">100ml</option>
            <option value="250ml">250ml</option>
            <option value="500ml">500ml</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}
