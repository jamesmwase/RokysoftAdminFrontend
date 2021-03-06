import { PictureOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import moment from "moment";
import React from "react";
import fileToBase64 from "../../../functions/file/file-to-base64";
import urlToBase64 from "../../../functions/file/url-to-base64";
import log from "../../../functions/log";
import RokysoftBackend from "../../../services/api/rokysoft-backend";
import axis from "../../../services/axis";
const { Option } = Select;
// import { Formik, Form, Field, ErrorMessage } from "formik";
const { TextArea } = Input;

export default class CreatePortfolioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // edit: {},
      coverImg: '',
      open: false,
      roles: [
        { name: "Admin", id: "ADMIN1" },
        { name: "Manager", id: "ADMIN2" },
        { name: "User", id: "ADMIN3" },
      ],
    };
  }

  componentDidMount () {
    log('edit:', this.props.edit[this.props.edit.rowIndex]);

    this.setState({edit: this.props.edit});
  }

  async onChange(value) {
    log('cover:', value);
    let file = value.file;
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);
    let url = URL.createObjectURL(file);
    log('url:', url);
    let coverImg = await urlToBase64(url);
    log('avatar:', coverImg);

    this.setState({coverImg: coverImg, file: file});
}

  onFinish = async (values) => {
    console.log(values);
    if (this.props.edit) {
      values.id = this.props.edit.id;
    }
    values.apiLink = RokysoftBackend.portfolio.add;
    values.httpMethod = "post";
    values.startedOn = moment(values.startedOn._d).format("YYYY-MM-DD");
    values.completedOn = moment(values.completedOn._d).format("YYYY-MM-DD");
    values.coverImg = this.state.coverImg;
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

        const props = {
         
            beforeUpload: file => {
            if(file.type.contains('image/')) {
              this.setState({
                file: file,
              });
            }
            log('Cover:', this.state.file);
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
            initialValues={this.props.edit}
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
            <Form.Item name="coverImg" label="Cover Pic">
              <Upload
                maxCount={1}
                accept="image/*"
                beforeUpload={props.beforeUpload}
                onChange={this.onChange.bind(this)}
              >
                <Button icon={<PictureOutlined />}>Choose Cover Pic</Button>
              </Upload>
            </Form.Item>
            <Form.Item name="startedOn" label="Started on">
              <DatePicker onChange={this.onChangeDob} />
            </Form.Item>
            <Form.Item name="completedOn" label="Completed on">
              <DatePicker onChange={this.onChangeDob} />
            </Form.Item>

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
