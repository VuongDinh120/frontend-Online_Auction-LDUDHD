import React, { useContext } from 'react'
import AppContext from '../todoAppContext';

import { FaSearch } from 'react-icons/fa';

export default function MenuBar() {

    return (
        <div className="search-bar">
            <div className="container">
                <div className="row">
                    <div className="navbar-header col-md-3 col-sm-3">
                        <h4>Sàn Đấu giá</h4>
                    </div>
                    <div className="first-part col-md-9 col-sm-9">
                        <div className="col-md-8 search-form-product">
                            <div className="menu-search">
                                <select name="product_cat" className="form-control1">
                                    <option value={0}>Danh mục</option>
                                    <option className="level-0" value={1000076}>Tài sản khác</option>
                                    <option className="level-0" value={1000075}>Tang vật vi phạm</option>
                                    <option className="level-0" value={1000074}>Hàng hiệu xa xỉ</option>
                                    <option className="level-0" value={1000073}>Sưu tầm - nghệ thuật</option>
                                    <option className="level-0" value={1000072}>Phương tiện - xe cộ</option>
                                    <option className="level-0" value={1000071}>Bất động sản - Quyền sd đất</option>
                                    <option className="level-0" value={1000070}>Tài sản thanh lý</option>
                                </select>
                                <input type="text" className="search-field" maxLength={128} placeholder="Tìm kiếm..." />
                                <button type="button" className="btn btn-primary"><FaSearch/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
