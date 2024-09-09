import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio, Space } from 'antd';

const RadioType: React.FC = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    return (
        <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
                <Radio value={1}>Hight to Low</Radio>
                <Radio value={2}>Low To High</Radio>
            </Space>
        </Radio.Group>
    );
};

export default RadioType;