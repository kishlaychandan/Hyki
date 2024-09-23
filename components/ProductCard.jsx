import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: p }) => {
  return (
    <Link
      href={`https://hyki.mini.store/products/${p?.id}?slug=hyki/`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      {/* <Image
        width={500}
        height={500}
        src={""}
        // src={`https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_1024,h_1024,c_fit,fl_lossy,q_auto:eco,f_auto/${p?.images[0]}`}
        alt={p?.name}
      /> */}
      <img src={`https://minis-media-assets.swiggy.com/swiggymini/image/upload/w_1024,h_1024,c_fit,fl_lossy,q_auto:eco,f_auto/${p.images[0]}`} alt="img is there" />
      
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">{p?.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">
            &#8377;{p?.discountedPrice}
          </p>

          {p?.discountedPrice && (
            <>
              <p className="text-base  font-medium line-through">
                &#8377;{p?.price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {p?.discountPercent}% off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
