import { useParams } from "react-router-dom";
import ScrollToTop, { cabinsInfo, CabinType } from "../utils/utils";
import { IoLocationOutline, IoPeopleOutline } from "react-icons/io5";
import "react-day-picker/dist/style.css";

import ReservationForm from "../components/ReservationForm";

const Cabin = () => {
  ScrollToTop();
  const { cabinId } = useParams();

  const cabin: CabinType | undefined = cabinsInfo.find(
    (cabin) => cabin.id === Number(cabinId)
  );
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-emerald-950 p-4 sm:p-10 lg:p-12">
      <main className="flex flex-col mt-10 max-w-[80rem] mx-auto min-h-screen px-2  sm:px-6 md:px-12 lg:px-16 py-4 lg:py-10 gap-6 sm:gap-10">
        <div className="flex h-fit sm:h-[30rem] border-2 border-slate-800 rounded-md shadow-lg shadow-emerald-950 overflow-hidden ">
          <div className="hidden sm:flex  basis-1/3">
            <img src={cabin?.image} className="h-full w-full" />
          </div>
          <div className="bg-transparent/30 h-full w-full basis-full sm:basis-2/3 p-4 md:p-6 xl:p-12 flex flex-col gap-2 lg:gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-emerald-600 font-bold">
              {cabin?.title}
            </h1>
            <p className="text-xs sm:text-sm lg:text-base  text-emerald-50 font-medium pt-2 xl:pt-4">
              {cabin?.longDescription}
            </p>
            <div className="flex text-sm sm:text-lg md:text-xl font-medium text-emerald-50 items-center gap-4">
              <IoPeopleOutline />
              <h3 className="">For up to {cabin?.maxGuests} guests</h3>
            </div>
            <div className="flex  text-sm sm:text-lg md:text-xl font-medium text-emerald-50 items-center gap-4">
              <IoLocationOutline />
              <h3>
                {cabin?.location.city} / {cabin?.location.region}
              </h3>
            </div>
            <h3 className="flex justify-end text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-50">
              $ {cabin?.pricePerNight}
              <span className="flex items-end text-xl px-2">/ night</span>
            </h3>
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold flex text-emerald-50 justify-center mt-12">
          Fill Out Your Booking Details
        </h1>
        <div className="flex h-fit border-2 border-slate-800 rounded-xl shadow-xl shadow-slate-900 overflow-hidden">
          <ReservationForm
            maxGuest={Number(cabin?.maxGuests)}
            priceNight={Number(cabin?.pricePerNight)}
            cabinId={Number(cabin?.id)}
          />
        </div>
      </main>
    </section>
  );
};

export default Cabin;
