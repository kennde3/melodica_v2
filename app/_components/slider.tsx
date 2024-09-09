import React from 'react';
import type { SliderSingleProps } from 'antd';
import { Slider } from 'antd';

const formatter: NonNullable<SliderSingleProps['tooltip']>['formatter'] = (value) => `${value}`;

export default function SliderApp() {
    return (
        <>
            <Slider tooltip={{ formatter }} />
        </>
    )
};
