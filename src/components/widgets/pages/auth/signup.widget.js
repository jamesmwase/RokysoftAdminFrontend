/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CreateUserSchema } from "../../../../services/schema/user.schema";
import { Button, DatePicker, Form, Input, Select } from "antd";
const { Option } = Select;

export default class SignupForm extends React.Component {
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
    values.confirmPassword = undefined;
    values.dob = undefined;
    this.props.create(values);
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
          // {...layout}
          name="nest-messages"
          onFinish={this.onFinish.bind(this)}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            label="Full Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                type: "text",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="dob" label="Date of Birth">
            <DatePicker onChange={this.onChangeDob} />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select
              placeholder="Select a option and change input text above"
              allowClear
              rules={[{ required: true }]}
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select
              placeholder="Select alcohol use"
              allowClear
              rules={[{ required: true }]}
            >
              {this.state.roles.map((item, i) => {
                return (
                  <Option value={item.id} key={i}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password />
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
            <Button
              style={{ background: "orange", color: "#fff" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
