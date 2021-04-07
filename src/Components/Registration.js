import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../index.css';

class Registration extends Component {

    register()
    {
        console.warn("state", this.state)
        fetch('https://registrationmysite.herokuapp.com/api/user/registration/',{
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
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

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
        
              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit" onClick={()=>this.register()}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          );

    }
}
export default Registration;