"use client"
import React from 'react';
import { Drawer, Rate } from 'antd';
import { Filter } from 'lucide-react';
import SliderApp from './slider';
import RadioType from './radio';

export default function DrawerButton() {
    const [open, setOpen] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        // Simple loading mock. You should add cleanup logic in real world.
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    };

    return (
        <>
            <button onClick={showLoading} className='hover:bg-[#374151]  text-white font-bold text-lg flex py-2 px-4 gap-2 rounded-lg'>
                Filter <Filter />
            </button>
            <Drawer
                closable
                destroyOnClose
                title={<p>Loading Drawer</p>}
                placement="right"
                open={open}
                loading={loading}
                onClose={() => setOpen(false)}
            >
                <p>Price (0 to 100)</p>
                <SliderApp />
                <hr />
                <p className='mt-5'>Price</p>
                <RadioType />
                <hr />
                <p className='mt-5 mb-2'>Rating</p>
                <Rate />;
                <hr />
                <p>Category</p>
                <form action="">
                    <input type="checkbox" name="" id="" />
                </form>

            </Drawer>
        </>
    );
};
