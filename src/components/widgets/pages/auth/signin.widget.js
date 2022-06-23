/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { CreateUserSchema } from "../../../../services/schema/user.schema";
import { Button, Form, Input } from "antd";

export default class SigninForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      roles: [
        { name: "Admin", id: "ADMIN1" },
        { name: "Manager", id: "ADMIN2" },
        { name: "User", id: "ADMIN3" },
      ],
    };
  }

  onFinish = (values) => {
    console.log('Success:', values);
    this.props.signin(values);
  };

  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    const validateMessages = {
      required: "${label} is required!",
      types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
      },
      number: {
        range: "${label} must be between ${min} and ${max}",
      },
    };

    return (
      <>
          <Form
          name="nest-messages"
          onFinish={this.onFinish.bind(this)}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button style={{background: 'orange', color: '#fff'}} htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
