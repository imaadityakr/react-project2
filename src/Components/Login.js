import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';

class Login extends Component {

    login()
    {
        console.warn("state", this.state)
        fetch('https://registrationmysite.herokuapp.com/api/user/login/',{
            method: "POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp.token)
                localStorage.setItem("token", JSON.stringify(resp.token))
            })
        })
    }

    render() {
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 8,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 8,
              span: 8,
            },
          };
          const onFinish = (values) => {
            console.log('Success:', values);
          };
        
          const onFinishFailed = (errorInfo) => {
            console.log('Failed:', errorInfo);
          };
        return (
            <Form
              {...layout}
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
        
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
        
              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
        
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={()=>this.login()}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );

    }
}
export default Login;