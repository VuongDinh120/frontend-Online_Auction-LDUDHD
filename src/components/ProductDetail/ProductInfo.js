import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';

import { Descriptions, Badge } from 'antd';
import { FrownTwoTone, SmileTwoTone } from '@ant-design/icons';



export default function ProductInfo() {

    return (
        <Descriptions title=""
            style={{ backgroundColor: '#ffff' }}
            size={'middle'}
            column={4}
            bordered>
            <Descriptions.Item label="Tên sản phẩm" span={4}>Cloud Database</Descriptions.Item>
            <Descriptions.Item label="Giá hiện tại" span={2}>200.000.000</Descriptions.Item>
            <Descriptions.Item label="Giá mua ngay" span={2}>200.000.000</Descriptions.Item>

            <Descriptions.Item label="Người bán" span={2}>
                Nguyen van a
            </Descriptions.Item>
            <Descriptions.Item label="Đánh giá" span={2}>
                <span style={{ marginLeft: '5px', marginRight: '5px' }}>1</span>
                <SmileTwoTone style={{ color: 'green', fontSize: '16px' }} />
                <span style={{ marginLeft: '10px', marginRight: '5px' }}>1</span>
                <FrownTwoTone twoToneColor="#eb2f96" style={{ fontSize: '16px' }} />
            </Descriptions.Item>

            <Descriptions.Item label="Người giữ giá" span={2}>
                Nguyen van a
            </Descriptions.Item>
            <Descriptions.Item label="Đánh giá" span={2}>
                <span style={{ marginLeft: '5px', marginRight: '5px' }}>1</span>
                <SmileTwoTone style={{ color: 'green', fontSize: '16px' }} />
                <span style={{ marginLeft: '10px', marginRight: '5px' }}>1</span>
                <FrownTwoTone twoToneColor="#eb2f96" style={{ fontSize: '16px' }} />
            </Descriptions.Item>

            <Descriptions.Item label="Thời điểm đăng" span={2}>20/12/2020</Descriptions.Item>
            <Descriptions.Item label="Thời điểm kết thúc" span={2}>3 ngày nữa</Descriptions.Item>
            <Descriptions.Item label="Mô tả">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1<br />
            </Descriptions.Item>

        </Descriptions>
    )
}
