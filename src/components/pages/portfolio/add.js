import { Button, DatePicker, Form, Input, Select } from "antd";
import moment from "moment";
import React from "react";
import RokysoftBackend from "../../../services/api/rokysoft-backend";
import axis from "../../../services/axis";
const { Option } = Select;
// import { Formik, Form, Field, ErrorMessage } from "formik";
const { TextArea } = Input;

export default class CreatePortfolioForm extends React.Component {
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

  onFinish = async (values)  => {
    console.log(values);

    // let params = {
    //     apiLink: RokysoftBackend.portfolio.add,
    //     httpMethod: 'post'
    // }

    values.apiLink = RokysoftBackend.portfolio.add;
    values.httpMethod = 'post';
    values.startedOn = moment(values.startedOn._d).format("YYYY-MM-DD");
    values.completedOn = moment(values.completedOn._d).format("YYYY-MM-DD");

    await axis(values);
  };

  onChangeDob = (date, dateString) => {
    console.log(date, dateString);
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
    /* eslint-disable no-template-curly-in-string */

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
        <div>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description"
              label="Description"
              rules={[
                {
                  type: "text",
                },
              ]}
            >
          <TextArea maxLength={150} placeholder="Write about the project" />
            </Form.Item>
            <Form.Item name="startedOn" label="Started on">
              <DatePicker onChange={this.onChangeDob} />
            </Form.Item>
            <Form.Item name="completedOn" label="Completed on">
              <DatePicker onChange={this.onChangeDob} />
            </Form.Item>
            {/* 
            <Form.Item
              name="gender"
              label="Gender"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select a option and change input text above"
                allowClear
                rules={[{ required: true }]}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
              </Select>
            </Form.Item> */}

            <Form.Item
              name="category"
              label="Category"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select category"
                allowClear
                rules={[{ required: true }]}
              >
                <Option value="mobile">Mobile</Option>
                <Option value="web">Web</Option>
                <Option value="desktop">Desktop</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select portfolio status"
                allowClear
                rules={[{ required: true }]}
              >
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
}
