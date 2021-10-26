import React, { useContext } from 'react'
// import AppContext from '../todoAppContext';

export default function MenuBar() {

    return (
        <div className="top-header" >
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-sm-8 contact-header">

                        <div style={{ float: 'left' }}>
                            <span style={{ marginLeft: 0 }}>
                                <a href="# ">
                                    Liên hệ: 0123.567.8910
                                </a>
                            </span>
                            <span>&nbsp;/&nbsp;</span>
                            <span>
                                <a href="# ">
                                    Email:
                                    <span> &nbsp;admin@email.com</span>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div style={{ display: 'block' }} className="col-md-3 col-sm-4">
                        <a href="# ">Đăng nhập /</a>
                        <a href="# "> Đăng ký</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
