import { useEffect, useRef, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "— Sarah J., Denver, CO",
      text: "Woodwise made it so easy to find the ideal cabin for a weekend getaway. The booking process was seamless, and the cabin was even better than the photos! I'll definitely be using Woodwise again.",
      photo: "/users/sarah.jpg",
      title: "The perfect escape!",
    },
    {
      name: "— Mike T., Portland, OR",
      text: "I wanted a peaceful retreat in the woods, and Woodwise delivered. The app was simple to use, and I found a cabin that had everything I needed for a quiet, relaxing stay.",
      photo: "/users/mike.jpg",
      title: "A nature lover's dream!",
    },
    {
      name: "— Emily W., Austin, TX",
      text: "Woodwise is my go-to for booking cabin stays. The selection is amazing, and the service is top-notch. I've recommended it to all my friends!",
      photo: "/users/emily.jpg",
      title: "Incredible experience from start to finish!",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, //10% of the target element visible // Adjust this value if necessary
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <main ref={ref} className="h-full w-full pt-[8rem]" id="#testimonials">
      <div className=" flex flex-col gap-8 place-items-center justify-center w-full px-2 md:px-12 py-12 ">
        <div className="w-full flex justify-center pl-6 sm:pl-0">
          <h2
            className={`text-xl sm:text-2xl md:text-4xl px-2 font-bold bg-gradient-to-r from-amber-600 to-emerald-600 text-transparent bg-clip-text  ${
              isVisible ? "animate-moveInLeft" : "opacity-0"
            }`}
          >
            What Our Happy Guests Say About Woodwise
          </h2>
        </div>
        <div
          className={`h-4/5 w-full flex flex-col lg:flex-row gap-8 md:gap-16 p-8 md:p-12 ${
            isVisible ? "animate-moveInBottom" : "opacity-0"
          }`}
        >
          {testimonials.map((user) => {
            return (
              <div
                key={user.name}
                className="flex flex-col basis-1/3 text-slate-50 p-6  justify-between rounded-xl bg-transparent/30 backdrop-blur-2xl hover:scale-110 transition-all ease duration-300 delay-200"
              >
                <h3 className="text-xl md:text-2xl font-bold text-emerald-400">
                  {user.title}
                </h3>
                <p className="text-base md:text-lg">{user.text}</p>
                <div className="w-full flex place-items-center gap-4 p-2">
                  <img src={user.photo} className="w-2/12 rounded-full" />
                  <h4 className="text-base sm:text-xl">{user.name}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="max-w-[100rem] mx-auto px-8 pb-32 text-emerald-50 text-sm sm:text-lg md:text-xl">
        At{" "}
        <span className="bg-gradient-to-r from-amber-400 to-emerald-400 text-transparent bg-clip-text">
          Woodwise
        </span>
        , we believe in reconnecting people with nature by offering a curated
        selection of unique cabin stays. Whether you're looking for a peaceful
        retreat deep in the forest or a cozy getaway by a lake, Woodwise ensures
        an unforgettable experience. Founded in 2023, we aim to make nature more
        accessible to everyone through a seamless booking platform and excellent
        customer service. With a passion for adventure and tranquility, Woodwise
        is here to guide you to your perfect nature escape.
      </p>
    </main>
  );
};

export default Testimonials;
