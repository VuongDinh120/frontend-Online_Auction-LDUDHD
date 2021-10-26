import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import ProductImg from '../components/ProductDetail/ProductImg';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import BiddingHistory from '../components/ProductDetail/BiddingHistory';

import CatBreadcrumb from '../components/Menu/CatBreadcrumb';

import SimilarItem from '../components/SimilarProduct/SimilarItem';



import { Layout, Tabs, Typography, Divider } from 'antd';
const { Title } = Typography;
const { TabPane } = Tabs;
const { Header, Footer, Sider, Content } = Layout;

export default function ItemDetail() {

    return (
        <div className="content-page" >
            <div className="container">
                <Layout>
                    <Header className="ant_layout" style={{ padding: "0" }}>
                        <CatBreadcrumb />
                    </Header>
                    <Layout>
                        <Sider width={300} className="ant_layout">
                            <ProductImg />
                        </Sider>
                        <Content className="ant_layout">
                            <div style={{ marginLeft: '50px', minHeight:'460px'}}>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Thông tin sản phẩm" key="1" style={{ paddingLeft: '20px' }}>
                                        <ProductInfo />
                                    </TabPane>
                                    <TabPane tab="Lịch sử đấu giá" key="2" style={{ paddingLeft: '20px' }}>
                                        <BiddingHistory />
                                    </TabPane>
                                </Tabs>
                            </div>
                        </Content>
                    </Layout>
                    <Footer className="ant_layout" style={{ padding: '50px 0px' }}>
                        <div>
                            <Divider>
                                <Title level={3}>SẢN PHẨM TƯƠNG TỰ</Title>
                            </Divider>
                        </div>
                        <div>
                            <SimilarItem />
                            <SimilarItem />
                            <SimilarItem />
                            <SimilarItem />
                            <SimilarItem />
                        </div>
                    </Footer>
                </Layout>
            </div>
        </div>
    )
}
