import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';

import { Table } from 'antd';

const columns = [
    {
        title: 'Thời điểm',
        dataIndex: 'biddingTime',
        key: 'biddingTime',
    },
    {
        title: 'Người mua',
        dataIndex: 'biddingBy',
        key: 'biddingBy',
    },
    {
        title: 'Giá',
        dataIndex: 'biddingPay',
        key: 'biddingPay',
    },
];

const data = [
    {
        key: '1',
        biddingTime: '1/11/2019 10:43',
        biddingBy: 'John Brown',
        biddingPay: '200.000.000',
    },
    {
        key: '2',
        biddingTime: '1/11/2019 10:43',
        biddingBy: 'John Brown',
        biddingPay: '200.000.000',
    },
    {
        key: '3',
        biddingTime: '1/11/2019 10:43',
        biddingBy: 'John Brown',
        biddingPay: '200.000.000',
    },
];

export default function BiddingHistory() {
    return (
        <Table columns={columns} dataSource={data} pagination={false}/>
    )
}
