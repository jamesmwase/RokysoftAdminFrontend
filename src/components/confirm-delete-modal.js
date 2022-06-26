import React from "react";
import { Button, Modal, Typography } from "antd";
import "../assets/css/overlay.css";
// import Modal from 'react-modal';
import { CloseOutlined } from "@mui/icons-material";
const { Title } = Typography;

export default class ConfirmDeleteModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: this.props.isVisible ? this.props.isVisible : false,
    };
  }

  componentDidMount() {
    this.setState({
      isVisible: this.props.isVisible ? this.props.isVisible : false,
    });
  }

  openModal() {
    this.setState({ isVisible: true });
  }

  handleOk = () => {
    this.setState({
      isVisible: false,
    });
    this.props.resetModal();
  };

  handleCancel = () => {
    this.setState({
      isVisible: false,
    });
    this.props.resetModal();
  };

  render() {
    const title = this.props.title;
    const content = this.props.content;
    const isVisible = this.state.isVisible;

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };

    return (
      <div>
        {this.props.buttonText !== "" && this.props.buttonText && (
          <button
            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-100 ease-in-out capitalize"
            onClick={this.openModal.bind(this)}
          >
            {this.props.buttonText}
          </button>
        )}
        <Modal
          width={window.innerWidth <= 600 ? window.innerWidth : "600px"}
          height={500}
          closeIcon={
            <span
              style={{ background: "red", color: "#fff", padding: "5px 10px" }}
            >
              X
            </span>
          }
          title={title}
          visible={this.state.isVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              danger
                style={{ backgroundColor: "red", color: '#fff'}}
              onClick={this.handleOk.bind(this)}
            >
              Delete
            </Button>,
            <Button onClick={this.handleCancel.bind(this)}>Cancel</Button>,
          ]}
        >
          <br />
          <Title style={{ textAlign: "center" }} level={3}>
            Are you sure you want to delete?
          </Title>
        </Modal>
      </div>
    );
  }
}
