import Testimonials from "../components/Testimonials";
import { IoMdArrowDown } from "react-icons/io";
import ScrollToTop from "../utils/utils";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const scrollToBottom = () => {
    const element = document.getElementById("#testimonials");
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  ScrollToTop();
  const navigate = useNavigate();
  return (
    <section className="h-full w-full bg-gradient-to-b from-cyan-900 to-emerald-950">
      <main className="relative h-screen  w-full ">
        <div
          className="absolute top-0 left-0 right-0 h-full w-full opacity-70 overflow-hidden"
          //style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 78%, 0% 88%)" }}
        >
          {/* <video
            src="/public/main-page-video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          /> */}
          <div
            className="bg-cover bg-center"
            style={{ backgroundImage: "url(/main-image-small.jpg)" }}
          >
            <img
              src="/main-image.jpg"
              className="w-full h-full aspect-square block object-center object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center h-full absolute top-0 bottom-0 left-0 right-0 mx-auto mt-52 px-2 md:px-12">
          <div className="flex flex-col justify-center place-items-center h-fit p-2 max-w-[60rem]">
            <h1 className="text-2xl md:text-4xl font-bold animate-moveInLeft  bg-transparent">
              <span className="bg-gradient-to-l from-emerald-800 to-amber-900 bg-clip-text text-transparent">
                Woodwise
              </span>
              <span className="text-emerald-900"> - Your Cabin Retreat</span>
            </h1>
            <h3 className="text-base md:text-xl animate-moveInRight mt-8 px-4 text-emerald-100 mb-4">
              Find and book your perfect cabin getaway with ease. Explore,
              reserve, and escape into nature with Woodwise, offering beautiful
              cabin retreats across Bulgaria's stunning landscapes.
            </h3>
            <button
              className="mt-4 flex bg-transparent/20 rounded-md mx-auto animate-moveInBottom border-2 border-slate-600 px-8 py-4 text-emerald-100 hover:-translate-y-2 focus:translate-y-0 transition-transform ease duration-300 delay-200 main-button  "
              onClick={() => navigate("cabins")}
            >
              Explore now
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 right-0 left-0 flex justify-center">
          <button
            className="w-12 h-12 outline justify-center flex rounded-full place-items-center text-4xl font-bold text-emerald-100 animate-pulseUpDown"
            onClick={scrollToBottom}
          >
            <IoMdArrowDown />
          </button>
        </div>
      </main>
      <Testimonials />
    </section>
  );
};

export default HomePage;
