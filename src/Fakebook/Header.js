import React from "react"
import { Menu, Dropdown, Button,  Avatar, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
//import Friendlist from "./Friendlist";

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="/fakebook/friendlist">ดูรายชื่อเพื่อน</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href=" ">เปลี่ยนรหัสผ่าน</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3"><a href="/fakebook/login">ออกจากระบบ</a>
        </Menu.Item>
    </Menu>
);

const Header = (props) => {
    // props = {state: {}, fn : ()=>}
   // const { state, fn } = props; 
    return <> 
            <Row align="middle" style={{ textAlign: "right", background: "#4267B2", height: "6vh"}} >
                <Col flex= {0}>
                <i class="fab fa-facebook-square" style={{fontSize: "30px", margin: "auto" }}></i>
                </Col> 
                <Col flex= {1}>Sorawit Sokumpa</Col>
                <Col flex= {0} span = {1}> <Avatar src="/sorawit.png" /> </Col> 
                <Col flex= {0} span = {1}> 
            <Dropdown overlay={menu}>
                <Button>
                     <DownOutlined />
                </Button>
            </Dropdown>
                </Col>
            </Row>
            </>
}


export default Header;