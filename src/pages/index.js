import React from 'react';
import Swal from "sweetalert2";
import { Dots } from "react-activity";
import Overlay from "../components/widgets/overlay";
import Layout from "../components/layouts/admin.layout";
import Breadcrumbs from "../components/widgets/breadcrumbs/admin.breadcrumb";
import CreateUserForm from "../components/widgets/pages/user/create.widget";
import useUserStore from "../services/store/user.store";
import MUIDataTable from "mui-datatables";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import ModalBox from "../components/modal";
import PortfolioPage from './portfolio';

const userStore = new useUserStore();

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // componentDidMount() {
  //   //DATA
  //   this.getUsers();
  //   //TABLE
  //   this.options = {
  //     selectableRows: "none",
  //     filter: false,
  //     print: false,
  //     responsive: "standard",
  //     download: true,
  //     downloadOptions: {
  //       filename: "users.csv",
  //     },
  //   };
  //   this.columns = [
  //     {
  //       name: "id",
  //       label: "Id",
  //       options: {
  //         filter: false,
  //         sort: false,
  //         display: false,
  //       },
  //     },
  //     {
  //       name: "name",
  //       label: "Name",
  //       options: {
  //         filter: true,
  //         sort: true,
  //       },
  //     },
  //     {
  //       name: "email",
  //       label: "Email",
  //       options: {
  //         filter: true,
  //         sort: false,
  //       },
  //     },
  //     {
  //       name: "phone",
  //       label: "Phone",
  //       options: {
  //         filter: true,
  //         sort: false,
  //       },
  //     },
  //     {
  //       name: "roleId",
  //       label: "Role",
  //       options: {
  //         filter: true,
  //         sort: false,
  //         display: false,
  //       },
  //     },
  //     {
  //       name: "Options",
  //       label: "Options",
  //       options: {
  //         filter: false,
  //         download: false,
  //         customBodyRender: (value, tableMeta, updateValue) => (
  //           <>
  //             <span className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
  //               <a
  //                 href={`/admin/users/manage/?id=${encodeURIComponent(
  //                   tableMeta.tableData[tableMeta.rowIndex].id
  //                 )}`}
  //               >
  //                 <button
  //                   type="button"
  //                   className="text-orange-600 hover:text-orange-900"
  //                 >
  //                   <PencilIcon className="h-5 w-5 mr-4" />
  //                 </button>
  //               </a>
  //               <button
  //                 type="button"
  //                 onClick={() =>
  //                   this.removeUser(tableMeta.tableData[tableMeta.rowIndex].id)
  //                 }
  //                 className="text-orange-600 hover:text-orange-900"
  //               >
  //                 <TrashIcon className="h-5 w-5" />
  //               </button>
  //             </span>
  //           </>
  //         ),
  //       },
  //     },
  //   ];
  // }

  // createUser = (data) => {
  //   if (data.password !== data.confirmPassword) {
  //     return alert('Password and Confirm Password should be the same!');
  //   }
  //   this.setState({ loader: true });
  //   userStore
  //     .create(data)
  //     .then((response) => {
  //       Swal.fire({
  //         title: "Success",
  //         text: "created new user",
  //         icon: "success",
  //         confirmButtonText: "Ok",
  //       });
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         title: "Failed",
  //         text: "failed to create error (" + error + ")",
  //         icon: "error",
  //         confirmButtonText: "Ok",
  //       });
  //     })
  //     .finally(() => {
  //       this.getUsers();
  //       this.setState({ loader: false });
  //     });
  // };

  // removeUser = (id) => {
  //   Swal.fire({
  //     title: "Do you want to delete user ?",
  //     showDenyButton: true,
  //     showCancelButton: false,
  //     confirmButtonText: "delete",
  //     denyButtonText: `dont`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       this.setState({ loader: true });
  //       userStore
  //         .remove(id)
  //         .then((response) => {
  //           Swal.fire({
  //             title: "Success",
  //             text: "deleted user",
  //             icon: "success",
  //             confirmButtonText: "Ok",
  //           });
  //         })
  //         .catch((error) => {
  //           Swal.fire({
  //             title: "Failed",
  //             text: "failed delete error (" + error + ")",
  //             icon: "error",
  //             confirmButtonText: "Ok",
  //           });
  //         })
  //         .finally(() => {
  //           this.getUsers();
  //           this.setState({ loader: false });
  //         });
  //     } else if (result.isDenied) {
  //     }
  //   });
  // };

  // getUsers = () => {
  //   this.setState({ loader: true });
  //   userStore
  //     .get()
  //     .then((response) => {
  //       let data = [];
  //       if (typeof response != "undefined") {
  //         this.setState({ data: response });
  //       }
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         title: "Failed",
  //         text: "failed to get users error (" + error + ")",
  //         icon: "error",
  //         confirmButtonText: "Ok",
  //       });
  //     })
  //     .finally(() => {
  //       this.setState({ loader: false });
  //     });
  // };

  render() {
    return (
      <PortfolioPage />
      // <Layout
      //   content={
      //     <div>
      //       <Overlay
      //         open={this.state.loader}
      //         content={<Dots size={50} color="white" />}
      //       />
      //       <div className="max-w-2xl mx-auto px-2 sm:px-6 lg:max-w-5xl lg:px-2">
      //         <div>
      //           <Breadcrumbs breadcrumbs={this.state.breadcrumbPages} />
      //         </div>
      //         <div className=" md:flex md:items-center md:justify-between">
      //           <div className="flex-1 min-w-0">
      //             {this.info}
      //             <h2
      //               className="
      //         font-bold
      //         leading-7
      //         text-gray-900
      //         sm:text-2xl sm:truncate"
      //             >
      //               Users
      //             </h2>
      //           </div>

      //           <ModalBox
      //             content={<CreateUserForm create={this.createUser.bind(this)} />}
      //             buttonText={'new user'}
      //           />
      //         </div>
      //         <div className="align-middle inline-block min-w-full mt-5">
      //           <MUIDataTable
      //             className=""
      //             data={this.state.data}
      //             columns={this.columns}
      //             options={this.options}
      //           />
      //         </div>
      //       </div>
      //     </div>
      //   }
      // ></Layout>
    );
  }
}

export default IndexPage;
