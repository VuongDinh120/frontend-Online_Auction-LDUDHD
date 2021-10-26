import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import Item from './Item';

import { Row, Col, Pagination, Select } from 'antd';

const { Option } = Select;

export default function ItemBox() {

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Row>
            <Col span={24}>
                <div style={{height:'70px',display:'block'}}>
                    <div style={{float:'left', fontSize:'20px'}}>
                        Số kết quả phù hợp: 31
                    </div>
                    <div style={{float:'right'}}>
                        <Select defaultValue="lucy" style={{ width: 220 }} onChange={handleChange}>
                            <Option value="jack">Theo giá</Option>
                            <Option value="lucy">Theo thời gian kết thúc</Option>
                        </Select>
                    </div>
                </div>
                <div style={{ marginBottom: '50px' }}>
                    <Item />
                    <Item />
                    <Item />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <Pagination defaultCurrent={1} total={50} />
                </div>
            </Col>
        </Row>
    )
}

