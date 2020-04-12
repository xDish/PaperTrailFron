import React,{ useState } from "react";
import { Menu, Dropdown, Button, Input } from 'antd';
import { DownOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import {startSearch} from "../../../redux/actions/searchActions";

const { Search } = Input;

const SearchBar = () => {
    const [searchTarget, setSearchTarget] = useState('Author');
    const dispatch = useDispatch();

    function handleMenuClick(e) {
       setSearchTarget(e.key);

    }

    const handleSearch = (query) =>{
        dispatch(startSearch())
    }



    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="Author">
                <UserOutlined />
                Author
            </Menu.Item>
            <Menu.Item key="Book">
                <BookOutlined />
                Book
            </Menu.Item>
        </Menu>
    );

    return(
        <div>
        <Dropdown overlay={menu}>
            <Button>
                {searchTarget} <DownOutlined />
            </Button>
        </Dropdown>
        <Search
            placeholder={'Search for ' + searchTarget+'s'}
            onSearch={handleSearch}
            style={{ width: 200 }}
        />
        <div>This is a header </div>
        </div>
    )
}

export default SearchBar;