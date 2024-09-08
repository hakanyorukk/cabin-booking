import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const navLinks = [
  { label: "Cabins", route: "/cabins" },
  { label: "About", route: "/about" },
  { label: "Reservations", route: "/reservations" },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={` max-w-[85rem] mx-auto px-6 h-16 w-full z-50 fixed left-0 right-0 ${
        isSticky
          ? "bg-transparent/30 backdrop-blur-md rounded-none lg:rounded-full top-0 lg:top-2  border-none"
          : "bg-transparent top-0 border-none"
      } transition-all duration-300 ease-out`}
    >
      <div className="h-full w-full flex justify-between place-items-center px-4 text-sm sm:text-lg md:text-xl font-medium capitalize tracking-widest text-emerald-100">
        <Logo />
        <nav>
          <ul className="flex gap-6 md:gap-12">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.route}
                  className={({ isActive }) =>
                    `nav-link pb-1 ${isActive && "nav-link-active "}`
                  }
                >
                  {link.label}{" "}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
