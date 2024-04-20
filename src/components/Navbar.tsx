"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Programming Fundamentals</HoveredLink>
            <HoveredLink href="/courses">MERN STACK</HoveredLink>
            <HoveredLink href="/courses">Python</HoveredLink>
            <HoveredLink href="/courses">
              Data Structure and Algorithm
            </HoveredLink>
            <HoveredLink href="/courses">JAVA</HoveredLink>
            <HoveredLink href="/courses">
              Data Science and Analytics
            </HoveredLink>
            <HoveredLink href="/courses">Cyber Security</HoveredLink>
            <HoveredLink href="/courses">AI and ML</HoveredLink>
            <HoveredLink href="/courses">Cloud Computing</HoveredLink>
            <HoveredLink href="/courses">LLD and HLD</HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>

        <Link href={"/about"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="About us"
          ></MenuItem>
        </Link>

        {/* Changes for auth */}
        <Link href={"/login"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Login"
          ></MenuItem>
        </Link>

        <Link href={"/signup"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Sign up"
          ></MenuItem>
        </Link>

        <Link href={"/profile"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Profile"
          ></MenuItem>
        </Link>

        <Link href={"/profile/[id]"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Profile id"
          ></MenuItem>
        </Link>

      </Menu>
    </div>
  );
};

export default Navbar;
