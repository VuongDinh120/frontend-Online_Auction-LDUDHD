import React, { useContext, state } from 'react'
// import AppContext from '../todoAppContext';

import Filter from '../components/CatItemList/Filter';
import ListItem from '../components/CatItemList/List';
import CatBreadcrumb from '../components/Menu/CatBreadcrumb';




import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default function CateItemList() {

    return (
        <div className="content-page" >
            <div className="container">
                <Layout >
                    <Header className="ant_layout" style={{ padding: "0" }}>
                        <CatBreadcrumb />
                    </Header>
                    <Layout>
                        <Sider width={400} className="ant_layout">
                            <Filter />
                        </Sider>
                        <Content className="ant_layout">
                            <ListItem />
                        </Content>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
}
