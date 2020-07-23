import React from 'react';
import { Button, Row, Col, Input, Form } from 'antd';
import 'antd/dist/antd.css';
import Header from './Header';
import Profilehead from './Profilehead';


function Resetpass() {
    return (<div style={{ textAlign: "center",  height: "5vh" }}> 
        <Row justify="center" align="middle" style={{ height: "5vh" }} gutter={18}>
            <Col>
 
                <Form.Item name="oldpassword" label={<span> รหัสผ่านเดิม </span>}
                    rules={[{ required: true, message: 'Please input your old Password!', whitespace: true }]}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item
                    label="รหัสผ่านใหม่"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="รหัสผ่านใหม่อีกครั้ง"
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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    <a href="/fakebook/myprofile"> เปลี่ยนรหัส </a>
           </Button>
                </Form.Item>

            </Col>
        </Row>




    </div>

    )
}

function Changepwd() {
    return (
        <div>
        <Header />
        <Profilehead /> 
        <Resetpass />
  
        </div>

    );
}

export default Changepwd;