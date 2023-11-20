// src\components\Sidebar.js

import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegFilePdf } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";
import { GrDocumentConfig } from "react-icons/gr";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdMarkEmailRead } from "react-icons/md";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "Documentos",
    href: "/documentos",
    icon: FaRegFilePdf,
  },
  {
    name: "Aceites",
    href: "/aceites",
    icon: MdMarkEmailRead,
  },
  {
    name: "Gestao",
    href: "/gestao",
    icon: TiContacts,
  },
  {
    name: "Automacao",
    href: "/automacao",
    icon: HiOutlineDocumentReport,
  },
  {
    name: "Configurações",
    href: "/configuracoes",
    icon: GrDocumentConfig,
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
