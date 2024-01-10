// src\components\Sidebar.js

import Image from "next/image";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { IoChatbubble } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosBookmarks } from "react-icons/io";
import { FaStarOfDavid } from "react-icons/fa6";


const sidebarItems = [
  {
    name: "Dashboard",
    href: "/",
    icon: IoIosBookmarks  ,
  },
  {
    name: "Hebraico",
    href: "/hebraico",
    icon: FaStarOfDavid,
  },
  {
    name: "Parashiot",
    href: "/parashiot",
    icon: IoChatbubble,
  },
  {
    name: "Disparos",
    href: "/disparos",
    icon: IoMdSend,
  },
  {
    name: "Cadastro",
    href: "/cadastro",
    icon: IoPersonSharp,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/logo.jpg"
            alt="logo"
          />
          <p className="sidebar__logo-name"></p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
