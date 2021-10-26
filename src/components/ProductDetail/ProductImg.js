import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';

import { Image, Row, Col } from 'antd';

export default function ProductImg() {

    return (
        <Image.PreviewGroup>
            <Row>
                <Col span={24}>
                    <Image width={300} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Image
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </Col>
                <Col span={8}>
                    <Image
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </Col>
                <Col span={8}>
                    <Image
                        width={100}
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                    />
                </Col>
            </Row>
        </Image.PreviewGroup>
    )
}
