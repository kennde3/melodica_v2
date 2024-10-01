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
                title={<p></p>}
                placement="right"
                open={open}
                loading={loading}
                onClose={() => setOpen(false)}
            >
                <p>Price (0 to 100)</p>
                <SliderApp />
                <hr />
                <p className='mt-5 text-lg font-medium mb-2'>Price</p>
                <RadioType />
                <hr />
                <p className='mt-5 text-lg font-medium mb-2'>Rating</p>
                <Rate />;
                <hr />
                <p className='mt-5 text-lg font-medium mb-2'>Category</p>
                <form action="" className='flex flex-col gap-2'>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Fantasy</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Drama</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Biography</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Non-Fiction</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Horror</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Fiction</label>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" className='pl-2' />
                        <label className='ml-2'>Thriller</label>
                    </div>
                </form>

            </Drawer>
        </>
    );
};
