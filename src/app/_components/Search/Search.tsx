"use client";
import { Select } from "antd";
import React from "react";
import style from "./search.module.scss";
import Image from "next/image";

const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

const onSearch = (value: string) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

export default function Search() {
  return (
    <div className="bg-[#f8f9ff] flex p-[6px] rounded-[50px]">
      <Image src={`/search.svg`} width={32} height={32} alt={``} />
      <Select
        className={style.search}
        showSearch
        placeholder="Select here....."
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={filterOption}
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
    </div>
  );
}
