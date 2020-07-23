import React from 'react';
import 'antd/dist/antd.css';
import Header from './Header';
import Profilehead from './Profilehead';
import {Breadcrumb } from 'antd';

function Friendlist() {
    return (
        <div>
        <Header />
        <Profilehead /> 
        <Breadcrumb>
         <Breadcrumb.Item>Friend List</Breadcrumb.Item>
         <Breadcrumb.Item>Friend Request</Breadcrumb.Item>
        </Breadcrumb>
     
  
        </div>

    );
}

export default Friendlist;