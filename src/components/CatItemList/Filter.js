import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import { Slider, Input, Button } from 'antd';


export default function ItemBox() {
    function onChange(value) {
        console.log('onChange: ', value);
    }

    function onAfterChange(value) {
        console.log('onAfterChange: ', value);
    }
    return (
        <div className="sider-wrapper">
            <Input placeholder="input search text" size="large" />

            <div className="site-card-border-less-wrapper">
                <h3>Lọc theo giá</h3>
                <Slider
                    range
                    step={0.005}
                    defaultValue={[0, 100]}
                    tooltipVisible={true}
                    onChange={onChange}
                    onAfterChange={onAfterChange}
                />
                <div>

                    <div style={{ paddingBottom: '20px' }}>
                        <span style={{ color: 'black', fontWeight: 'bold' }}>Từ:</span>
                        <span style={{ color: '#000', fontWeight: 'bold', float: 'right' }}> VNĐ</span>
                        <span className="ClassPriceAuctionDetail leftLabel" id="minPriceCategory">20.081.970.000</span>
                        <br />
                        <span style={{ color: 'black', fontWeight: 'bold' }}>Đến: </span>
                        <span style={{ color: '#000', fontWeight: 'bold', float: 'right' }}>VNĐ</span>
                        <span className="ClassPriceAuctionDetail rightLabel" id="maxPriceCategory">89.754.100.000</span>
                    </div>

                </div>
                <Button type="primary" style={{ background: "#b41712", borderColor: "#b41712", fontWeight: "700" }} shape="round" size={'large'}>
                    LỌC
                </Button>
            </div>

        </div>
    )
}

