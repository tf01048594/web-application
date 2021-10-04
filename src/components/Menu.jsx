import React from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import Button from '@mui/material/Button';

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.test = React.createRef();
    }
    componentDidMount() {
        console.log("Completed render")
    }


    showSidebar = () => {

    }

    render() {
        let menuData = [{
            title: 'Home',
            path:'/',
            icon:<AiIcons.AiFillHome/>,
            cName:'nav-text'},
            {
            title: 'Game',
            path:'/games',
            icon:<FaIcons.FaCartPlus/>,
            cName:'nav-text'
        }]
        return (
            
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars onClick={this.showSidebar}/>
                </Link>
            </div>
        )
    }
}
export default Menu
