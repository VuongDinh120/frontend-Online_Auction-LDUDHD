import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';

export default function NavBar() {

    return (
        <div className="catebar">
            <div className="container">
                <a href="# "id="homebtn" >Trang chủ</a>
                <div className="cate-dropdown">
                    <button className="dropbtn">Danh mục</button>
                    <div className="cate-dropdown-content">
                        <div className="cate-row">
                            <div className="cate-column">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className="cate-column">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className="cate-column">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className="cate-column">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                            <div className="cate-column">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}
