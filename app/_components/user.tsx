"use client"
import { UserRoundPen } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Users() {
    const { tab } = useParams();
    const [selectedTab, setSelectedTab] = useState(tab ?? "address");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
        address: "1234 Example St, Example City, EX 12345",
    });

    useEffect(() => {
        document.title = "User | The Book Shelf";
    }, []);

    const handlePopupToggle = () => {
        setIsPopupOpen(!isPopupOpen); // Toggle popup
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic, e.g., sending data to the server
        console.log("Updated User Details:", userDetails);
        handlePopupToggle(); // Close the popup after submitting
    };

    return (
        <div className="container mx-auto px-4 mt-20">
            <ul className="flex max-w-4xl mx-auto text-sm font-medium text-gray-400 border-b border-gray-700">
                <li className="mr-4">
                    <button
                        onClick={() => setSelectedTab("profile")}
                        type="button"
                        className={`${selectedTab === "profile" ? "bg-gray-900 border-b-4 border-indigo-500" : "hover:bg-gray-800"} inline-block p-4 rounded-t-lg transition duration-300 text-gray-100 font-bold text-lg`}
                    >
                        Profile
                    </button>
                </li>
                <li className="mr-4">
                    <button
                        onClick={() => setSelectedTab("address")}
                        type="button"
                        className={`${selectedTab === "address" ? "bg-gray-900 border-b-4 border-indigo-500" : "hover:bg-gray-800"} inline-block p-4 rounded-t-lg transition duration-300 text-gray-100 font-bold text-lg`}
                    >
                        Address
                    </button>
                </li>
                <li className="mr-4">
                    <button
                        onClick={() => setSelectedTab("orders")}
                        type="button"
                        className={`${selectedTab === "orders" ? "bg-gray-900 border-b-4 border-indigo-500" : "hover:bg-gray-800"} inline-block p-4 rounded-t-lg transition duration-300 text-gray-100 font-bold text-lg`}
                    >
                        Orders
                    </button>
                </li>
            </ul>

            <div className="max-w-4xl mx-auto my-16 p-6 bg-gray-800 rounded-lg shadow-lg text-gray-100 relative">
                {selectedTab === "profile" && (
                    <>
                        <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                        <p className="text-lg font-medium">{userDetails.name}</p>
                        <p className="text-md">{userDetails.email}</p>
                    </>
                )}

                {selectedTab === "address" && (
                    <>
                        <div className="flex justify-between">
                            <h2 className="lg:text-xl font-semibold mb-4">Your Address</h2>
                            <div
                                className="bg-[#164e63] p-2 rounded-full h-fit w-fit cursor-pointer"
                                onClick={handlePopupToggle}
                            >
                                <UserRoundPen className="h-5 w-5" />
                            </div>
                        </div>
                        <p className="text-lg">{userDetails.address}</p>
                    </>
                )}

                {selectedTab === "orders" && (
                    <>
                        <h2 className="text-xl font-semibold mb-4">Order History</h2>
                        <p className="text-lg">No orders found.</p>
                    </>
                )}
            </div>

            {/* Popup with Tailwind Animations */}
            {isPopupOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        className={`bg-white p-6 rounded-lg shadow-lg w-96 transform transition-all duration-300 ease-in-out 
                        ${isPopupOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                    >
                        <h2 className="text-xl font-semibold mb-4">Update User Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userDetails.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userDetails.email}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={userDetails.address}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handlePopupToggle}
                                    className="mr-4 px-4 py-2 bg-gray-500 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
