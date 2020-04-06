import React,{useState} from "react";
import { Menu, Dropdown, Button,Input} from 'antd';
import { DownOutlined, UserOutlined, BookOutlined } from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import {setSearchURL, startSearch, selectURL} from '../../../redux/slices/searchSlice';

const { Search} = Input;

function SearchBar(){
    const [searchTarget, setSearchTarget] = useState('Author');
    const [searchRoot , setSearchRoot] = useState('http://192.168.1.248:8080/api/search/author/name/');
    const dispatch = useDispatch();
    const lastSearchedURL = useSelector(selectURL);



    function handleMenuClick(e) {
       setSearchTarget(e.key);
        switch(e.key){
            case 'Author':
                setSearchRoot('http://192.168.1.248:8080/api/search/author/name/');
                break;
            case 'Book':
                setSearchRoot('http://192.168.1.248:8080/api/search/book/name/');
                break;
            default:
                setSearchRoot("http://192.168.1.248:8080/api/search/author/name/");
        }
    }
    function handleSearch(searchText){
        let finalURL = searchRoot+ searchText;
        if (lastSearchedURL !== finalURL) {
            console.log(typeof finalURL);
            console.log("Final URL" + finalURL);
            dispatch(setSearchURL(finalURL));
            console.log("Sent for change " + finalURL);
            dispatch(startSearch());
        }
        else{
            console.log("Same url");
        }
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