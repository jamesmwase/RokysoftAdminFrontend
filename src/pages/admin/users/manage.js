import React, { Component, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Dots } from "react-activity";
import Overlay from "../../../components/widgets/overlay";
import Layout from "../../../components/layouts/admin.layout";
import Breadcrumbs from "../../../components/widgets/breadcrumbs/admin.breadcrumb";
import CreateUserForm from "../../../components/widgets/pages/user/create.widget";
import useUserStore from "../../../services/store/user.store";
import MUIDataTable from "mui-datatables";
import { PencilAltIcon, PencilIcon, TrashIcon } from "@heroicons/react/outline";
import getUrlParam from "../../../functions/get-url-param";

const userStore = new useUserStore();

export class ManageUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //
      id: props.router.query.id,
      breadcrumbPages: [
        {
          href: "/admin",
          name: "home",
        },
        {
          href: "/admin/users",
          name: "user",
        },
        {
          href: "#",
          name: "manage",
        },
      ],
      loader: false,
      //VARIABLES
      data: [],
      model: {
        name: "",
        phone: "",
        email: "",
        password: "",
        status: true,
        roleId: "",
      },
    };
  }

  componentDidMount() {
    setTimeout(() => {
      let { id } = this.props.router.query;
      this.setState({ id: id });
      console.log(this.props.router);
    }, 1);

    //DATA
    this.getUser();
  }

  createUser = (data) => {
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
        this.getUsers();
        this.setState({ loader: false });
      });
  };

  getUser = () => {
    this.setState({ loader: true });
    userStore
      .get()
      .then((response) => {
        let data = [];
        if (typeof response != "undefined") {
          this.setState({ data: response });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed",
          text: "failed to get users error (" + error + ")",
          icon: "error",
          confirmButtonText: "Ok",
        });
      })
      .finally(() => {
        this.setState({ loader: false });
      });
  };

  render() {
    return (
      <Layout
        content={
          <div>
            <Overlay
              open={this.state.loader}
              content={<Dots size={50} color="white" />}
            />
            <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
              <div>
                <Breadcrumbs breadcrumbs={this.state.breadcrumbPages} />
              </div>
              <div className="md:flex md:items-center md:justify-between">
                {this.id}
              </div>
            </div>
          </div>
        }
      ></Layout>
    );
  }
}
