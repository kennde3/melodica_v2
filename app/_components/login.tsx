"use client"
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import React from 'react';

export default function Login() {
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-10 md:h-screen lg:py-0">
                    <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-100 md:text-2xl">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-100">
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="border sm:text-sm rounded-lg focus:ring-cyan-800 focus:border-cyan-800 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 outline-none"
                                        placeholder="abc@email.com"
                                        required
                                    />
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-100">
                                        Password
                                    </label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        id="password"
                                        className="border sm:text-sm rounded-lg focus:ring-cyan-800 focus:border-cyan-800 w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 outline-none"
                                        placeholder="••••••••"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                                        className="absolute right-2 bottom-2 text-gray-500"
                                    >
                                        {showPassword ? (
                                            <Eye />
                                        ) : (
                                            <EyeOff />
                                        )}
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-5 py-2.5 text-xs lg:text-sm font-medium text-center text-gray-100 rounded-lg bg-cyan-900 focus:ring-4 focus:outline-none hover:bg-cyan-950"
                                >
                                    Sign in
                                </button>

                                <p className="text-sm font-light text-gray-400">
                                    Don&apos;t have an account yet?
                                    <a href="/create-account" className="ml-1 font-medium text-gray-100 hover:underline">
                                        Create Account
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
