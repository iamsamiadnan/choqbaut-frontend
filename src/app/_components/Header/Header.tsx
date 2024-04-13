import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between px-6 py-[14px] border-b border-[#f6f4f5] mb-[14px]">
      <Image src={`/burger.svg`} width={26} height={26} alt={``} />
      <Image src={`/choqbaut.svg`} width={111.29} height={26} alt={``} />
      <Image src={`/cart.svg`} width={26} height={26} alt={``} />
    </header>
  );
}
