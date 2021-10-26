import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import { Card, Button } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';


export default function SimilarItem() {

    return (
        <div className="item-box">
            <Card
                style={{ width: 239 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
            >
                <div className="item-detail">
                    <a href="# " className="item-name">Tên sản phẩm adfada sdf asdfa sdf afa sdf asdfa sdf asdfa sdfa </a>
                    <div>Giá hiện tại:</div>
                    <div className="item-price"><span style={{ color: '#d70022' }}>450.000</span> <span>VNĐ</span></div>
                </div>

            </Card>
        </div>
    )
}
