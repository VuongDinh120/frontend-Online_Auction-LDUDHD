import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';
import ItemBox from '../components/ItemBox';

export default function Home() {

    return (
        <div className="home-page" >
            <div className="container">
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
                <ItemBox/>
            </div>
        </div>
    )
}
