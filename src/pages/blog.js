import React from "react";
import Swal from "sweetalert2";
import { Dots } from "react-activity";
import Overlay from "../components/widgets/overlay";
import useUserStore from "../services/store/user.store";
import MUIDataTable from "mui-datatables";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import Breadcrumbs from "../components/widgets/breadcrumbs/admin.breadcrumb";
import ModalBox from "../components/modal";
import CreateBlogForm from "../components/pages/blog/add";
import ConfirmDeleteModal from "../components/confirm-delete-modal";
import AdminLayout from "../components/layouts/admin";
import axis from "../services/axis";
import RokysoftBackend from "../services/api/rokysoft-backend";
import log from "../functions/log";

const userStore = new useUserStore();

export default class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Modal: <span />,
      blogs: [],
      modalBoxTitle: "",
      breadcrumbPages: [
        {
          href: "/admin",
          name: "home",
        },
        {
          href: "#",
          name: "user",
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

  resetModal() {
    this.setState({ Modal: <span /> });
  }

  deleteRecord(tableMeta) {
    this.setState({
      Modal: (
        <ConfirmDeleteModal
          resetModal={this.resetModal.bind(this)}
          title="Delete Blog? Can't be undone!"
          isVisible={true}
        />
      ),
    });
  }

  componentDidMount() {
    let dis = this;
    //DATA
    this.readBlogs();
    //TABLE
    this.options = {
      selectableRows: "none",
      filter: false,
      print: false,
      responsive: "standard",
      download: true,
      downloadOptions: {
        filename: "users.csv",
      },
    };
    this.columns = [
      {
        name: "id",
        label: "ID",
        options: {
          filter: false,
          sort: false,
        },
      },
      {
        name: "title",
        label: "Title",
        options: {
          filter: true,
          sort: true,
        },
      },
      {
        name: "intro",
        label: "Introdunction",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "category",
        label: "Category",
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: "blog",
        label: "Blog",
        options: {
          filter: true,
          sort: false,
          display: true,
        },
      },
      // {
      //   name: "completedOn",
      //   label: "Completed On",
      //   options: {
      //     filter: true,
      //     sort: false,
      //     display: true,
      //   },
      // },
      {
        name: "status",
        label: "Status",
        options: {
          filter: true,
          sort: false,
          display: true,
        },
      },
      {
        name: "Options",
        label: "Options",
        options: {
          filter: false,
          download: false,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
                <span className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  {/* <button */}
                  <ModalBox
                    resetModal={this.resetModal.bind(this)}
                    fullScreen={true}
                    title="New Blog"
                    buttonIcon={<PencilIcon className="h-5 w-5 mr-4" />}
                    content={<CreateBlogForm edit={tableMeta} />}
                  />
                  {/* type="button"
                      className="text-orange-600 hover:text-orange-900" */}
                  {/* >
                    </button> */}
                  <button
                    type="button"
                    onClick={this.deleteRecord.bind(this, tableMeta)}
                    className="text-orange-600 hover:text-orange-900"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </span>
              </>
            );
          },
        },
      },
    ];
  }

  removeUser = (id) => {
    Swal.fire({
      title: "Do you want to delete user ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "delete",
      denyButtonText: `dont`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.setState({ loader: true });
        userStore
          .remove(id)
          .then((response) => {
            Swal.fire({
              title: "Success",
              text: "deleted user",
              icon: "success",
              confirmButtonText: "Ok",
            });
          })
          .catch((error) => {
            Swal.fire({
              title: "Failed",
              text: "failed delete error (" + error + ")",
              icon: "error",
              confirmButtonText: "Ok",
            });
          })
          .finally(() => {
            this.readBlogs();
            this.setState({ loader: false });
          });
      } else if (result.isDenied) {
      }
    });
  };

  readBlogs = async () => {
    // this.setState({ loader: true });
    let params = {
      apiLink: RokysoftBackend.blog.read,
      httpMethod: "get",
    };
    let blogs = await axis(params);

    log("blogs:", blogs);

    this.setState({ blogs: blogs });
  };

  render() {
    return (
      <>
        {/* {this.state.Modal} */}
        <Overlay
          open={this.state.loader}
          content={<Dots size={50} color="white" />}
        />

        <AdminLayout
          content={
            <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
              <div>
                <Breadcrumbs breadcrumbs={this.state.breadcrumbPages} />
              </div>
              <div className=" md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                  {this.info}
                  <h2
                    className="
                font-bold
                leading-7
                text-gray-900
                sm:text-2xl sm:truncate"
                  >
                    Blog
                  </h2>
                </div>
                <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                  <ModalBox
                    resetModal={this.resetModal.bind(this)}
                    fullScreen={true}
                    title="New Blog"
                    buttonText={"New Blog"}
                    content={<CreateBlogForm />}
                  />
                </div>
              </div>
              <div className="align-middle inline-block min-w-full  mt-5">
                <MUIDataTable
                  className=""
                  data={this.state.blogs}
                  columns={this.columns}
                  options={this.options}
                />
              </div>
            </div>
          }
        />
      </>
    );
  }
}
