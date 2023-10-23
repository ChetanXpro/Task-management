import { useAtom } from "jotai";

import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { user } from "../../../atoms/atoms";

import { HamburgerIcon, Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import MenuItems from "./MenuItems";

import logo from "../../../assets/task.png";
import Avatar from "../../Avatar";
import AvtarDrop from "./AvtarDrop";

const Header = () => {
  const [active, setActive] = useState(false);
  const [avtarDrop, setAvtarDrop] = useState(false);

  // const [userData, setUser] = useAtom(user);

  const navigate = useNavigate();
  const showMenu = () => {
    setActive(!active);
  };
  const showAvtarDrop = (e: any) => {
    setAvtarDrop(!avtarDrop);
  };

  return (
    <div
      className={` z-auto w-full   font-mono border border-b-gray-600   h-16  flex justify-between p-4 items-center`}
    >
      <div className="flex h-full items-center text-2xl font-bold gap-2">
        <h1>TaskMate</h1>
        <img src={logo} width={30} alt="logo" />
      </div>

      <nav>
        <div className="absolute flex items-center cursor-pointer right-6 md:hidden top-6 scale-150">
          <HamburgerIcon
            onClick={showMenu}
            className="scale-150 cursor-pointer"
          />
        </div>

        <ul className="hidden md:flex gap-8 items-center p-6 uppercase ">
          <Link to={"/"} className=" cursor-pointer">
            <p>Home</p>
          </Link>

          <Link to={"/task"} className=" cursor-pointer">
            <p>Tasks</p>
          </Link>

          <div
            onClick={showAvtarDrop}
            className="flex cursor-pointer gap-1 items-center"
          >
            <Avatar name="Chetan" size="12" />
          </div>
        </ul>

        {avtarDrop && (
          <AvtarDrop setAvtarDrop={setAvtarDrop} avtarDrop={avtarDrop} />
        )}

        <MenuItems showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default Header;
