import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="h-12 w-12 rounded-full border-2 border-emerald-700 p-1">
      <Link to="/">
        <img src="/wood-cabin-logo.png" />
      </Link>
    </div>
  );
};

export default Logo;
