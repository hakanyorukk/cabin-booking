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
    <section className="w-full bg-gradient-to-b from-slate-900 to-emerald-950 p-12">
      <main className="flex flex-col mt-10 max-w-[80rem] mx-auto min-h-screen px-16 py-10 gap-10">
        <div className="flex h-[30rem] border-2 border-slate-800">
          <div className="flex h-full basis-1/3">
            <img src={cabin?.image} className="h-full w-full" />
          </div>
          <div className="bg-transparent/30 h-full w-full basis-2/3 p-12 flex flex-col gap-4">
            <h1 className="text-4xl text-emerald-600 font-bold">
              {cabin?.title}
            </h1>
            <p className="text-md text-emerald-50 font-medium pt-4">
              {cabin?.longDescription}
            </p>
            <div className="flex text-xl font-medium text-emerald-50 items-center gap-4">
              <IoPeopleOutline />
              <h3 className="">For up to {cabin?.maxGuests} guests</h3>
            </div>
            <div className="flex text-xl font-medium text-emerald-50 items-center gap-4">
              <IoLocationOutline />
              <h3>
                {cabin?.location.city} / {cabin?.location.region}
              </h3>
            </div>
            <h3 className="flex justify-end text-4xl font-bold text-emerald-50">
              $ {cabin?.pricePerNight}
              <span className="flex items-end text-xl px-2">/ night</span>
            </h3>
          </div>
        </div>
        <h1 className="text-4xl font-bold flex text-emerald-50 justify-center mt-12">
          Fill Out Your Booking Details
        </h1>
        <div className="flex h-[27rem] border-2 border-slate-800">
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
