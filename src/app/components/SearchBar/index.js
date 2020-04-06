import React,{useState} from "react";
import { Menu, Dropdown, Button, message, Tooltip ,Input} from 'antd';
import { DownOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import {useDispatch} from "react-redux";
import {setSearchURL, startSearch} from '../../../redux/slices/searchSlice';

const { Search} = Input;

function SearchBar(){
    const [searchTarget, setSearchTarget] = useState('Author');
    const [searchRoot , setSearchRoot] = useState('');
    const dispatch = useDispatch();


    function handleMenuClick(e) {
       setSearchTarget(e.key);
    }
    function handleSearch(searchText){
        switch(searchTarget){
            case 'Author':
                setSearchRoot('https://192.168.1.248:8080/api/search/author/name/');
                break;
            case 'Book':
                setSearchRoot('https://192.168.1.248:8080/api/search/author/name/');
                break;
            default:
                setSearchRoot('https://192.168.1.248:8080/api/search/author/name/');
        }
        dispatch(setSearchURL(searchRoot+searchText));
        dispatch(startSearch());
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