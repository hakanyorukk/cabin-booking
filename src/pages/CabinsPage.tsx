import { useNavigate } from "react-router-dom";
import ScrollToTop, { cabinsInfo } from "../utils/utils";

const CabinsPage = () => {
  ScrollToTop();
  const navigate = useNavigate();

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-emerald-950 p-4 md:p-12">
      <main className="flex flex-col mt-10 max-w-[90rem] mx-auto min-h-screen px-4 sm:px-6 xl:px-16 py-10 gap-16">
        <div className="text-emerald-50 flex flex-col gap-4">
          <h3 className="main-title">Cozy Cabins for a Relaxing Getaway</h3>
          <p className="text-sm  md:text-lg ">
            Discover our selection of cozy cabins perfect for a relaxing
            retreat. Nestled in picturesque locations, each cabin offers modern
            amenities and a charming rustic ambiance, ensuring a peaceful escape
            from everyday life.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full gap-8 sm:gap-12 md:gap-16 lg:gap-10 xl:gap-20">
          {cabinsInfo.map((cabin) => {
            return (
              <div
                key={cabin.id}
                className="flex h-fit md:h-[18rem] border-2 border-slate-800 bg-transparent/20 rounded-md shadow-lg shadow-emerald-950 overflow-hidden"
              >
                <div className="basis-[40%] h-full overflow-hidden">
                  <img src={cabin.image} className="h-full w-full" />
                </div>
                <div className="flex flex-col basis-[60%] justify-between">
                  <div className="flex flex-col px-4 sm:px-6 py-1 sm:py-6 md:py-8 justify-between  h-full">
                    <div className="z-10">
                      <h2 className="text-base sm:text-xl md:text-2xl text-emerald-600 font-bold">
                        {cabin.title}
                      </h2>
                      <p className="text-emerald-50 text-xs sm:text-sm md:text-lg">
                        {cabin.details}
                      </p>
                    </div>
                    <h4 className="text-emerald-50 text-sm sm:text-lg">
                      For up to {cabin.maxGuests} guests
                    </h4>
                    <div>
                      <h2 className="text-slate-100 text-lg sm:text-xl md:text-2xl lg:text-3xl justify-end flex">
                        $ {cabin.pricePerNight}
                        <span className="flex items-end text-base md:text-lg px-2">
                          / night
                        </span>
                      </h2>
                    </div>
                  </div>
                  <button
                    className="p-0 m-0 h-12 sm:h-16 w-full text-slate-200 flex justify-center items-center text-base sm:text-lg md:text-xl main-button border-t border-slate-800"
                    onClick={() => navigate(`/cabin/${cabin.id}`)}
                  >
                    Details & reservation
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default CabinsPage;

{
  /* <div
className="outline w-full h-full bg-emerald-950 bg-clip-content basis-1/2 "
style={{
  clipPath: "polygon(70% 0, 100% 0, 100% 100%, 0 100%)",
}}
></div> */
}

{
  /* <div className="flex h-[18rem] border-2 border-slate-800 bg-transparent/20">
            <div className="basis-[40%] overflow-hidden">
              <img src="/cabins/cabin_01.jpg" className="h-auto" />
            </div>
            <div className="flex flex-col basis-[60%] justify-between">
              <div className="flex flex-col px-6 py-8 justify-between  h-full">
                <div className="z-10">
                  <h2 className="text-2xl text-emerald-600 font-bold">
                    {cabinsInfo[0].title}
                  </h2>
                  <p className="text-emerald-50 text-lg">
                    {cabinsInfo[0].details}
                  </p>
                </div>
                <h4 className="text-emerald-50 text-lg">
                  For up to {cabinsInfo[0].maxGuests} guests
                </h4>
                <div>
                  <h2 className="text-slate-100 text-3xl justify-end flex">
                    $ {cabinsInfo[0].pricePerNight}
                    <span className="flex items-end text-lg px-2">/ night</span>
                  </h2>
                </div>
              </div>
              <button className="p-0 m-0 h-16 w-full text-slate-200 flex justify-center items-center text-xl main-button border-t border-slate-800">
                Details & reservations
              </button>
            </div>
          </div> */
}
