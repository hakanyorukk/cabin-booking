import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="relative ">
      <Header />
      <div>
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-emerald-950">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
