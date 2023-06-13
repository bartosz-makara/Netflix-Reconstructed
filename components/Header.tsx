import { SearchIcon, BellIcon, UserIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import BasicMenu from "./BasicMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="/netflix_logo.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt=""
        />

        <BasicMenu />

        <nav className="hidden space-x-4 md:flex">
          <a className="link headerLink">Home</a>
          <a className="link headerLink">TV Shows</a>
          <a className="link headerLink">Movies</a>
          <a className="link headerLink">New & Popular</a>
          <a className="link headerLink">My List</a>
        </nav>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden sm:inline h-6 w-6 " />
        {/* <p className="hidden lg:inline">Kids</p> */}
        {/* <BellIcon className="h-6 w-6" /> */}
        <Link href="/account">
          <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
