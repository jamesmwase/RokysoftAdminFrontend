// react
import React, { Fragment, useEffect } from "react";
// tailwind
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  HomeIcon,
  MenuIcon,
  CogIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
// components/widgets
import Header from "../widgets/header";
import Footer from "../widgets/footer";
// navigation
// import "../../assets/css/globals.css";
// import "../../assets/css/overlay.css";
// import "react-activity/dist/Dots.css";
// import "antd/dist/antd.css";
// import { a } from "react-router-dom";

const user = {
  name: "Kaponda Mulambia",
  email: "kaponda@umodzisource.com",
};

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const other = [
  { name: "Help", href: "#" },
  { name: "About", href: "#" },
];

// others

function className(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default class Layout extends React.Component {
  // const router = useRouter();

  // componentDidMount() {
  //   return () => {
  //     // let MuiTableCellroot =
  //     //   document.getElementsByClassName("MuiTableCell-root");
  //     // let i;
  //     // for (i = 0; i < MuiTableCellroot.length; i++) {
  //     //   MuiTableCellroot[i].style.zIndex = 2;
  //     // }
  //   };
  // }

  navigation() {
    let navList = [
      { name: "Home", href: "/admin", icon: HomeIcon, current: false },
      {
        name: "Users",
        href: "/admin/users",
        icon: UserGroupIcon,
        current: false,
      },
      {
        name: "Settings",
        href: "/admin/settings",
        icon: CogIcon,
        current: false,
      },
    ];
    for (let nav of navList)
      // if (
      //   nav.href.split("/")[1] + nav.href.split("/")[2] ==
      //   router.asPath.split("/")[1] + router.asPath.split("/")[2]
      // )
        nav.current = true;
    return navList;
  }
  render() {
    return (
      <>
        <div className="min-h-full bg-slate-100 " style={{ height: "100vh" }}>
          {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
          <Popover
            as="header"
            className={({ open }) =>
              className(
                open ? "fixed inset-0 z-40 overflow-y-auto" : "",
                "bg-white shadow-sm lg:static lg:overflow-y-visible"
              )
            }
          >
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 ">
                  <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                    <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                      <div className="flex-shrink-0 flex items-center">
                        <a href="/admin">
                            <img
                              className="block"
                              src="/u_src_logo.png"
                              width={40}
                              height={40}
                              alt="Umozi Source"
                            />
                        </a>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-3">
                      <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                        <div className="w-full  py-3"></div>
                      </div>
                    </div>
                    <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                      {/* Mobile menu button */}
                      <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                        <span className="sr-only">Open menu</span>
                        {open ? (
                          <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Popover.Button>
                    </div>
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-7">
                        <a className="text-sm font-medium text-gray-900 hover:underline pl-5">
                          Help Center
                        </a>
                        <a className="text-sm font-medium text-gray-900 hover:underline pl-5">
                          Partner Program
                        </a>
                      {/* Profile dropdown */}
                      <Menu as="div" className="flex-shrink-0 relative ml-5">
                        <div>
                          <Menu.Button
                            className="
                          rounded-full
                          flex
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-orange-500
                        "
                          >
                            <span className="sr-only">Open user menu</span>
                            <span className="lowercase m-2"> {user.email}</span>
                            <span
                              className="
                              inline-flex
                              items-center
                              px-3
                              rounded-full
                              text-sm
                              font-medium
                              bg-orange-600
                              text-white
                              uppercase
                            "
                            >
                              {user.name.match(/\b(\w)/g).join("")}
                            </span>
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a href={item.href}>
                                    <a
                                      className={className(
                                        active ? "bg-gray-100" : "",
                                        "block py-2 px-4 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>

                <Popover.Panel
                  as="nav"
                  className="lg:hidden"
                  aria-label="Global"
                >
                  <div className="max-w-3xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-4">
                    {this.navigation().map((item) => (
                      <a key={item.name} href={item.href}>
                        <a
                          aria-current={item.current ? "page" : undefined}
                          className={className(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "hover:bg-gray-50",
                            "block rounded-md py-2 px-3 text-base font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      </a>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                      <div className="flex-shrink-0">
                        <span
                          className="
                          inline-flex
                          items-center
                          px-3
                          p-2
                          rounded-full
                          text-sm
                          font-medium
                          bg-orange-600
                          text-white
                          uppercase
                        "
                        >
                          {user.name.match(/\b(\w)/g).join("")}
                        </span>
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                      {userNavigation.map((item) => (
                        <a key={item.name} href={item.href}>
                          <a className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900">
                            {item.name}
                          </a>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 max-w-3xl mx-auto px-4 sm:px-6"></div>
                </Popover.Panel>
              </>
            )}
          </Popover>

          <div className="py-10 ">
            <div className="max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="hidden lg:block lg:col-span-2 xl:col-span-2">
                <nav
                  aria-label="Sidebar"
                  className="sticky top-4 divide-y divide-gray-300"
                >
                  <div className="pb-8 space-y-1">
                    {this.navigation().map((item) => (
                      <a key={item.name} href={item.href}>
                        <span
                          className={className(
                            item.current
                              ? "bg-gray-200 text-gray-900"
                              : "text-gray-600 hover:bg-gray-50",
                            "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={className(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          <span className="truncate">{item.name}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="pt-1">
                    <div
                      className="mt-3 space-y-2"
                      aria-labelledby="other-headline"
                    >
                      {other.map((other) => (
                        <a
                          key={other.name}
                          href={other.href}
                          className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        >
                          <span className="truncate">{other.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
              <main className="lg:col-span-10 sm:col-span-10 ">{this.props.content}</main>
            </div>
          </div>
        </div>
      </>
    );
  }
}
