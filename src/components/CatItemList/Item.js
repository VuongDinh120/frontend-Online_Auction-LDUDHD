import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import { Row, Col, Image, Button } from 'antd';


export default function ItemBox() {

    return (
        <div className="products-wrapper">
            <Row>
                <Col span={8}>
                    <div style={{ overflow: "hidden", height: "250px" }}>
                        <Image
                            width={300}
                            preview={false}
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                    </div>
                </Col>
                <Col span={16}>
                    <div className="detail-container">

                        <h4 className="title-product">
                            <a href="# ">Tieeu def bai san pham</a>
                        </h4>
                        <div className="detail-product">
                            <div>
                                Số lượt bid: 15
                            </div>
                            <div className="price-product">
                                Giá hiện tại:
                                <span style={{ color: 'red' }}>2.000.000</span>
                                <span>VNĐ</span>
                            </div>
                            <div>
                                Bidder: **Ngọc
                            </div>
                            <div>
                                Ngày đăng: 25/11/2021 18:30
                            </div>
                            <div>
                                Thời gian còn lại: 3 ngày 1 giờ
                            </div>
                        </div>
                        <div className="action-product">
                            <Button type="primary" shape="round" size={"large"}>
                                Chi tiết
                            </Button>
                            <Button type="primary" style={{marginLeft:'10px'}} shape="round" size={"large"}>
                                Thêm vào giỏ
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

