import { PictureOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Select, Upload } from "antd";
import moment from "moment";
import React from "react";
import fileToBase64 from "../../../functions/file/file-to-base64";
import urlToBase64 from "../../../functions/file/url-to-base64";
import log from "../../../functions/log";
import generateUrl from "../../../functions/seo/generate-url";
import RokysoftBackend from "../../../services/api/rokysoft-backend";
import axis from "../../../services/axis";
const { Option } = Select;
// import { Formik, Form, Field, ErrorMessage } from "formik";
const { TextArea } = Input;

export default class CreateBlogForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: {},
      coverImg: "",
      open: false,
      roles: [
        { name: "Admin", id: "ADMIN1" },
        { name: "Manager", id: "ADMIN2" },
        { name: "User", id: "ADMIN3" },
      ],
    };
  }

  componentDidMount() {
    log("row data:", this.props.edit.tableData[this.props.edit.rowIndex]);
    // qleditor = t;
    this.setState({ edit: this.props.edit });

    log("values:", this.props.edit);

    var editor = new window.Quill("#editor", {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline"],
          ["code-block"],
        ],
      },
      theme: "snow",
    });
    setTimeout(() => {
      document.getElementsByClassName("ql-editor")[0].innerHTML =
        this.props.edit.tableData[this.props.edit.rowIndex].blog;
    }, 3000);
  }

  async onChange(value) {
    log("cover:", value);
    let file = value.file;
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);
    let url = URL.createObjectURL(file);
    log("url:", url);
    let coverImg = await urlToBase64(url);
    log("avatar:", coverImg);

    this.setState({ coverImg: coverImg, file: file });
  }

  onFinish = async (values) => {
    console.log(values);
    let editor = document.getElementsByClassName("ql-editor")[0].innerHTML;
    console.log("editor:", editor);

    // let params = {
    //     apiLink: RokysoftBackend.blog.add,
    //     httpMethod: 'post'
    // }

    values.apiLink = RokysoftBackend.blog.add;
    values.httpMethod = "post";
    // values.startedOn = moment(values.startedOn._d).format("YYYY-MM-DD");
    // values.completedOn = moment(values.completedOn._d).format("YYYY-MM-DD");
    values.coverImg = this.state.coverImg;
    values.blog = editor;
    values.url = await generateUrl(values.title);
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
      beforeUpload: (file) => {
        if (file.type.contains("image/")) {
          this.setState({
            file: file,
          });
        }
        log("Cover:", this.state.file);
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
            initialValues={this.props.edit.tableData[this.props.edit.rowIndex]}
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="intro"
              label="Introduction"
              rules={[
                {
                  type: "text",
                },
              ]}
            >
              <TextArea
                showCount={300}
                maxLength={300}
                placeholder="Write about the project"
              />
            </Form.Item>
            <Form.Item name="coverImg" label="Cover Pic">
              <Upload
                maxCount={1}
                accept="image/*"
                beforeUpload={props.beforeUpload}
                onChange={this.onChange.bind(this)}
              >
                <Button icon={<PictureOutlined />}>Cover Photo</Button>
              </Upload>
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
                <Option value="programming">Programming</Option>
                <Option value="movies">Movies</Option>
                <Option value="tv shows">TV Shows</Option>
                <Option value="software">Software</Option>
                <Option value="windows">Windows</Option>
                <Option value="linux">Linux</Option>
                <Option value="linux">Other</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              rules={[{ required: true }]}
            >
              <Select
                placeholder="Select blog status"
                allowClear
                rules={[{ required: true }]}
              >
                <Option value="Active">Active</Option>
                <Option value="Inactive">Inactive</Option>
              </Select>
            </Form.Item>

            {/* Create the toolbar container  */}
            <Form.Item name="blog" label="Body">
              <div id="editor"></div>
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
