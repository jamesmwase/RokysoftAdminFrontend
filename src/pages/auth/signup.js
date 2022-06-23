import React from "react";
import SignupForm from "../../components/widgets/pages/auth/signup.widget";
import Swal from "sweetalert2";
import { Dots } from "react-activity";
import useUserStore from "../../services/store/user.store";
import Overlay from "../../components/overlay";

const userStore = new useUserStore();

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
      loader: false,
    };
  }

  createUser(data) {
    console.log("creating user..");
    this.setState({ loader: true });
    userStore
      .create(data)
      .then((response) => {
        Swal.fire({
          title: "Success",
          text: "created new user",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed",
          text: "failed to create error (" + error + ")",
          icon: "error",
          confirmButtonText: "Ok",
        });
      })
      .finally(() => {
        // this.getUsers();
        this.setState({ loader: false });
        setTimeout(() => {
          window.location = "/signin";
        }, 2000);
      });
  }

  // componentDidUpdate(prevProps, prevState) {
  // }
  render() {
    return (
      <>
        <Overlay
          open={this.state.loader}
          content={<Dots size={50} color="white" />}
        />
        <div style={{ width: "400px", margin: "5rem auto" }}>
          <SignupForm signup={this.createUser.bind(this)} />
        </div>
      </>
    );
  }
}

export default SignupPage;
