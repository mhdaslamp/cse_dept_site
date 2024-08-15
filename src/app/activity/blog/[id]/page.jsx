"use client";
import React from "react";
import Image from "next/image";
import { IoPersonCircle } from "react-icons/io5";
import { useParams } from "next/navigation";
import { data } from "../content";

export default function DetailsPage() {
  const { id } = useParams();
  const blogItem = data.find((item) => item.id === parseInt(id));

  if (!blogItem) return <p>Blog post not found.</p>;

  return (
    <div>
      <div className="bg-[#e9e8e9] pb-5 ">
        <div className="container mx-auto w-full h-[200px] flex justify-center items-end ">
          <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
          <h1 className="uppercase text-[35px] font-bold">{blogItem.head}</h1>
        </div>
        <h3 className="uppercase text-gray-400 text-center font-bold texy-3xl">
          {blogItem.date}
        </h3>
      </div>
      <div className="container mx-auto">
        <div className="relative w-[1500px] h-[520px] ml-6 flex justify-center">
          <Image
            src={blogItem.img}
            alt="images"
            width={1600}
            height={200}
            className="mr-64"
          />
        </div>
        <div className="grid grid-flow-col-dense  mt-8 ">
          <div className="w-72 flex flex-col items-center text-center">
            <IoPersonCircle className="w-8 h-8" />
            <h1 className="text-xl">{blogItem.name}</h1>
            <p className="text-gray-600">{blogItem.year}</p>
          </div>
          <div className="w-4/4 space-y-3 text-justify mr-2 text-gray-600">
            <p>{blogItem.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
