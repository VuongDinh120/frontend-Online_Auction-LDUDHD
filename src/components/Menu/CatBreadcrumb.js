import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';

import { Breadcrumb } from 'antd';

export default function CatBreadcrumb() {

    return (
        <Breadcrumb>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="# ">Danh mục cha</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Danh mục con</Breadcrumb.Item>
        </Breadcrumb>
    )
}
