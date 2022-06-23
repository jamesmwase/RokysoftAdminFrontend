import {
  HomeOutlined,
  LaptopOutlined,
  NotificationOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import PatientIcon from "../../assets/icons/patient/1.svg";
import MedicationIcon from "../../assets/icons/medication/1.svg";
import AboutIcon from "../../assets/icons/about/1.png";
import HelpIcon from "../../assets/icons/help/1.png";
const { Header, Content, Footer, Sider } = Layout;
const items1 = ["Help Center", "Partner Program", "James Mwase"].map((key) => ({
  key,
  label: `${key}`,
}));

let navList = [
  {
    key: 1,
    label: <a href="/admin">Home</a>,
    href: "/admin",
    icon: (
      <HomeOutlined className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
    ),
    current: false,
  },
  {
    key: 2,
    label: <a href="/admin/users">Users</a>,
    href: "/admin/users",
    icon: (
      <UsergroupAddOutlined className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6" />
    ),
    current: false,
  },
  {
    key: 3,
    label: <a href="/patients">Patients</a>,
    href: "/patients",
    icon: (
      <img
        className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
        style={{ height: "20px", width: "20px" }}
        src={PatientIcon}
      />
    ),
    current: false,
  },
  {
    key: 4,
    label: <a href="/medications">Medications</a>,
    href: "/medications",
    icon: (
      <img
        className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
        style={{ height: "18px", width: "18px" }}
        src={MedicationIcon}
      />
    ),
    current: false,
  },
  {
    key: 5,
    label: <hr />,
    href: "/admin",
    icon: (
      <span />
    ),
    current: false,
  },
  {
    key: 6,
    label: <a href="/admin">About</a>,
    href: "/admin",
    icon: (
      <img
      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
      style={{ height: "18px", width: "18px" }}
      src={AboutIcon}
    />
    ),
    current: false,
  },
  {
    key: 7,
    label: <a href="/admin/users">Help</a>,
    href: "/admin/users",
    icon: (
      <img
      className="text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
      style={{ height: "18px", width: "18px" }}
      src={HelpIcon}
    />
    ),
    current: false,
  },
];

export default class AdminLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items1}
          />
        </Header>
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Layout
            className="site-layout-background"
            style={{
              padding: "24px 0",
            }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                }}
                items={navList}
              />
              {/* <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                }}
                items={navList}
              /> */}
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              {this.props.content}
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Umodzi Source ©2022
        </Footer>
      </Layout>
    );
  }
}
