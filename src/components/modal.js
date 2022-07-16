import React from "react";
import { Button, Modal } from "antd";
import "../assets/css/overlay.css";

export default class ModalBox extends React.Component {
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
      <span>
        {this.props.buttonIcon && (
          <button onClick={this.openModal.bind(this)}
            type="button"
            className="text-orange-600 hover:text-orange-900"
          >{this.props.buttonIcon}</button>
        )}
        {this.props.buttonText && (
          <Button onClick={this.openModal.bind(this)} type="outlined">
            {this.props.buttonText}
          </Button>
        )}
        <Modal
          width={
            this.props.fullScreen === true
              ? window.innerWidth
              : window.innerWidth <= 600
              ? window.innerWidth
              : "600px"
          }
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
          footer={[]}
        >
          <br />
          <br />
          {content}
        </Modal>
      </span>
    );
  }
}
