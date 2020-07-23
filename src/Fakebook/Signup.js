import React from 'react';
import '../App.css';
import { Button, Form, Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { } from '@ant-design/icons';


function Fakebooksignup() {
    return (<div style={{ textAlign: "center",  height: "5vh" }}> 
        <Row justify="center" align="middle" style={{ height: "5vh" }} gutter={18}>
            <Col>
                <i class="fab fa-facebook-square" style={{ color: "#4267B2", fontSize: "100px", margin: "auto" }}></i>

                <Form.Item name="username" label={<span> Username </span>}
                    rules={[{ required: true, message: 'Please input your Username!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    name="name"
                    label={
                        <span>
                            name
              </span>
                    }
                    rules={[{ required: true, message: 'Please input your name!', whitespace: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    <a href="/Myprofile"> Signup </a>
           </Button>
                </Form.Item>

            </Col>
        </Row>




    </div>

    )
}

function Signup() {
    return (
        <div>
            <Fakebooksignup />
        </div>

    );
}

export default Signup;