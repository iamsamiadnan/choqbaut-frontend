import React from "react";
import Search from "../_components/Search/Search";
import Image from "next/image";
import Rails from "../_components/Rails/Rails";

export default function Home() {
  return (
    <div>
      <div className="mb-[14px]">
        <Search />
      </div>
      <div className="mb-[14px]">
        <Image
          src={`/choqbaut-hero.png`}
          className="w-full rounded-3xl"
          width={"380"}
          height={198}
          alt={``}
        />
      </div>

      <div className="mb-6">
        <Rails />
      </div>

      <div className="grid grid-cols-2 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i, idx) => (
          <div key={idx} className="bg-[#f8f9ff]">
            <div className="h-[160px] w-full bg-gray-200 rounded-xl"></div>
            <div className=" rounded-b-[9px]">
              <div className="p-3">
                <span>Chocolate Gift Box</span>
                <span>
                  Price: <b>750TK</b>
                </span>
              </div>
              <button className="h-[44px] bg-[#4f312f] rounded-[9px] text-center w-full text-white">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
