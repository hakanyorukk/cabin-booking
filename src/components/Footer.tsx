import { IoLogoGithub } from "react-icons/io";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-emerald-100 py-8 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0 w-full">
          <div className="flex items-center gap-4 mb-2">
            <Logo />
            <h2 className="text-3xl font-bold bg-gradient-to-l from-emerald-800 to-amber-900 bg-clip-text text-transparent">
              Woodwise
            </h2>
          </div>
          <p className="text-center sm:text-left text-slate-400">
            Discover your perfect cabin getaway in Bulgaria with Woodwise.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <Link
            className="flex items-center justify-center gap-2  hover:scale-110 hover:bg-slate-800 py-2 px-4 rounded-xl hover:shadow-md hover:shadow-cyan-900 transition-all duration-300 ease-in-out delay-100"
            to="https://github.com/hakanyorukk"
            target="_blank"
          >
            <IoLogoGithub className="text-emerald-500" />
            <h2 className="text-xl font-bold bg-gradient-to-l from-slate-500 to-emerald-500 bg-clip-text text-transparent">
              hakanyorukk
            </h2>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-center w-full">
          <a href="#" className="hover:text-emerald-300">
            About Us
          </a>
          <a href="#" className="hover:text-emerald-300">
            Cabins
          </a>
          <a href="#" className="hover:text-emerald-300">
            Contact
          </a>
          <a href="#" className="hover:text-emerald-300">
            Terms & Conditions
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-slate-600">
        <p>&copy; {new Date().getFullYear()} Woodwise. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
