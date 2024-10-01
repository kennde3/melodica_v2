"use client";
import React, { useState } from "react";
import Image from "next/image";
import InputNumber from "../../_components/CounterInput";
import { Heart, Trash2 } from "lucide-react";
import { message } from "antd";
import Link from "next/link";
import bookcover1 from "@/public/booksCover/cover1.jpg";

export default function CheckOut() {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Guns, Germs, and Steel",
            Author: "Kenny Developer",
            price: 250,
            discountedprice: 550,
            quantity: 1,
            cover: bookcover1,
        },
        {
            id: 2,
            title: "Guns, Germs, and Steel",
            Author: "Kenny Developer",
            price: 250,
            discountedprice: 550,
            quantity: 1,
            cover: bookcover1,
        },
    ]);

    const handleQuantityChange = (id: number, newQuantity: number) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const handleRemoveItem = (id: number) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        message.success("Item removed from cart!");
    };

    const total = items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="mt-40 lg:mx-20 mx-3">


            {items.length === 0 ? (
                <div className="grid place-items-center">
                    <div className="space-y-4 flex flex-col">
                        <p className="my-4 text-2xl font-semibold tracking-wide text-gray-100">
                            Cart is Empty.
                        </p>
                        <Link href="/products">
                            <Link className="w-full px-5 block py-2.5 text-xs lg:text-sm  text-center text-gray-100 rounded-lg bg-cyan-900 hover:bg-cyan-950 font-bold" href={"/ExploreMore"}>
                                SHOP NOW
                            </Link>
                        </Link>
                        <Link href="/wishlist">
                            <Link className="w-full px-5 block py-2.5 text-xs lg:text-sm font-bold text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950 focus:ring-cyan-950" href={""}>
                                Add From Wishlist
                            </Link>
                        </Link>
                    </div>
                </div>
            ) : (

                <>
                    <h1 className="my-4 font-bold tracking-tight text-center text-gray-100 text-4xl">
                        Cart Items
                    </h1>
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="lg:w-2/3">
                            {items.map((item) => (
                                <div
                                    key={item.id}
                                    className="max-w-5xl lg:p-4 flex md:space-x-6 w-full rounded-lg lg:hover:bg-gray-800"
                                >
                                    <div className="flex lg:gap-7 gap-2 relative">
                                        <Image
                                            src={item.cover}
                                            alt={item.title}
                                            className="lg:w-[150px] lg:h-[220px] w-[100px] h-[160px]"
                                        />
                                        <div className="flex flex-col">
                                            <div className="lg:text-2xl font-bold text-white lg:mt-2">
                                                {item.title}
                                            </div>
                                            <div className="text-white mt-1">{item.Author}</div>
                                            <div className="flex gap-3 mt-5">
                                                <div className="text-xs line-through text-white">
                                                    {item.discountedprice} FRW
                                                </div>
                                                <div className="text-white text-2xl font-bold">
                                                    {item.price} FRW
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 right-0 lg:relative h-10">
                                            <InputNumber
                                                value={item.quantity}
                                                onChange={(newQuantity) =>
                                                    handleQuantityChange(item.id, newQuantity)
                                                }
                                            />
                                            <div className="flex justify-between w-28 mx-auto lg:mt-3">
                                                <div
                                                    className="bg-[#1f2937] p-2 h-fit border border-gray-600 rounded-full cursor-pointer"
                                                    onClick={() => handleRemoveItem(item.id)}
                                                >
                                                    <Trash2
                                                        width={15}
                                                        height={15}
                                                        stroke="#ff899e"
                                                        className="hover:stroke-[#ff00005d]"
                                                    />
                                                </div>
                                                <div className="bg-[#1f2937] p-2 h-fit border border-gray-600 rounded-full cursor-pointer">
                                                    <Heart
                                                        width={15}
                                                        height={15}
                                                        stroke="#ff899e"
                                                        className="hover:fill-[#ff899e]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <hr className="w-[100%] mt-14 lg:mt-0" />
                        </div>

                        <div className="relative lg:w-1/3">
                            <div className="sticky top-20 p-6 border rounded-lg shadow-md bg-gray-900">
                                <h2 className="text-lg text-white font-bold mb-4">Order Summary</h2>

                                {items.map((item) => (
                                    <div key={item.id} className="overflow-y-auto max-h-52">
                                        <div className="flex justify-between mb-2">
                                            <p className="w-40 text-gray-100 truncate">{item.title}</p>
                                            <span className="text-gray-600">X {item.quantity}</span>
                                            <p className="text-gray-100 before:mr-1">{item.price * item.quantity} FRW</p>
                                        </div>
                                    </div>
                                ))}
                                <hr className="my-4" />
                                <div className="flex justify-between mb-2 text-white">
                                    <p className="text-lg font-bold">Total</p>
                                    <p className="text-lg font-bold">{total} FRW</p>
                                </div>

                                <button className="mt-6 w-full px-5 py-2.5 text-xs lg:text-lg text-center text-gray-100 rounded-lg bg-cyan-900 hover:bg-cyan-950 font-bold">
                                    Check Out
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
