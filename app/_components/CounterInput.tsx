'use client';

import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { message } from 'antd';

type InputNumberProps = {
    value: number;
    onChange: (newValue: number) => void; // The parent component will handle value changes
};

const InputNumber: React.FC<InputNumberProps> = ({ value, onChange }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';

    const handleIncrement = () => {
        messageApi.open({
            key,
            type: 'loading',
            content: '',
        });

        setTimeout(() => {
            onChange(value + 1); // Update value via onChange prop
            messageApi.open({
                key,
                type: 'success',
                content: 'Quantity Increased!',
                duration: 2,
            });
        }, 1000);
    };

    const handleDecrement = () => {
        if (value > 0) {
            messageApi.open({
                key,
                type: 'loading',
                content: '',
            });

            setTimeout(() => {
                onChange(value - 1); // Update value via onChange prop
                messageApi.open({
                    key,
                    type: 'warning', // Set to 'warning' to indicate a decrease
                    content: 'Quantity Decreased!',
                    duration: 2,
                });
            }, 1000);
        }
    };

    return (
        <div className="py-2 px-3 inline-block rounded-lg h-fit">
            {contextHolder}
            <div className="flex items-center justify-center text-gray-100 bg-gray-800 border border-gray-700 rounded w-min">
                <button
                    type="button"
                    className={`rounded-l py-1 px-3 duration-100 ${value === 0
                            ? 'cursor-not-allowed bg-gray-700 opacity-50'
                            : 'hover:bg-gray-900 hover:text-white bg-gray-700'
                        }`}
                    onClick={handleDecrement}
                    aria-label="Decrease"
                    disabled={value === 0} // Disable the button when value is 0
                >
                    <Minus />
                </button>
                <input
                    className="px-2 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none dark:text-white"
                    style={{ MozAppearance: 'textfield' }}
                    type="number"
                    aria-roledescription="Number field"
                    value={value}
                    readOnly
                    disabled
                />
                <button
                    type="button"
                    className="px-3 py-1 duration-100 rounded-r cursor-pointer hover:text-white hover:bg-gray-900"
                    onClick={handleIncrement}
                    aria-label="Increase"
                >
                    <Plus />
                </button>
            </div>
        </div>
    );
};

export default InputNumber;
