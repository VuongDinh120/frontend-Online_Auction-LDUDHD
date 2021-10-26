import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import { Card, Button } from 'antd';
import { DollarCircleOutlined } from '@ant-design/icons';


export default function ItemBox() {

    return (
        <div className="item-box">
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <Button type="primary" icon={<DollarCircleOutlined />} size="large">
                        Đấu giá
                    </Button>
                ]}
            >
                <div className="item-detail">
                    <a href="# " className="item-name">Tên sản phẩm adfada sdf asdfa sdf afa sdf asdfa sdf asdfa sdfa </a>
                    <div>Giá hiện tại:</div>
                    <div className="item-price"><span style={{ color: '#d70022' }}>450.000</span> <span>VNĐ</span></div>
                    <div className="item-bidder"><span>bidder: </span>NguyenThiMinh</div>
                    <div className="item-time"><span>Ngày bắt đầu: </span>20/02/2015 18:25 </div>
                    <div className="item-time"><span>Thời gian kết thúc: </span>20/02/2015 18:25 </div>

                </div>

            </Card>
        </div>
    )
}
