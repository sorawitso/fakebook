import React from 'react';
//import logo from './logo.svg';
import '../App.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import { Button, Row, Col, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import { } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Fakebook() {
  return (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "5vh" }}>
    <Row justify="center" align="middle" style={{ height: "80vh" }} gutter={18}>
      <Col>
        <i class="fab fa-facebook-square" style={{ color: "#4267B2", fontSize: "200px" }}></i>
      </Col>
      <Col>
       <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <a href="/Signup">Signup </a>
          <Button type="primary" htmlType="submit" className="login-form-button">
          <a href="/Myprofile">Login </a>
        </Button>
        </Form.Item>

      </Col>


    </Row>
  </div>)
}

function Login() {
  return (
    <div>
      <Fakebook />
    </div>

  );
}


export default Login;