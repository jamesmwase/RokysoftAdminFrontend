import React from "react";
import Swal from "sweetalert2";
import SigninForm from "../../components/widgets/pages/auth/signin.widget";
import useUserStore from "../../services/store/user.store";

const userStore = new useUserStore();

class SigninPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }

  signin = (data) => {
    let criteria = {
      email: data.email,
      // password: data.password
    }

    console.log(criteria);
    
    this.setState({ loader: true });
    userStore
      .signin(criteria)
      .then((res) => {
        console.log('users:', res);
        Swal.fire({
          title: res ? "Success" : 'Error(s)',
          text: res ? "Done" : 'Signin Error',
          icon: res ? "success" : 'error',
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
          window.location = '/'
        }, 2000);
      });
  };

  // componentDidUpdate(prevProps, prevState) {
  // }
  render() {
    return (
      <div style={{width: '400px', margin: '5rem auto'}}>
        <SigninForm signin={this.signin.bind(this)} />
      </div>
    );
  }
}

export default SigninPage;
