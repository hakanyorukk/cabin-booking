import { useSelector } from "react-redux";
import ScrollToTop, { cabinsInfo, CabinType } from "../utils/utils";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const MyReservations = () => {
  ScrollToTop();
  const navigation = useNavigate();

  //<img src={cabins?.(reservations[0].cabinId)} />
  const reservations = useSelector(
    (state: RootState) => state.reservations.reservations
  );
  const cabin: CabinType | undefined = reservations[0]
    ? cabinsInfo.find((cabin) => cabin?.id === Number(reservations[0].cabinId))
    : undefined;
  console.log(cabin);
  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-emerald-950 p-12">
      <main className="flex flex-col mt-10 max-w-[80rem] mx-auto min-h-screen px-16 py-10 gap-10  ">
        <h1 className="main-title">Reservation Details</h1>
        {reservations.length > 0 ? (
          <div className="outline flex h-[18rem] w-full">
            <div className=" h-full overflow-hidden">
              <img src={cabin?.image} className="h-full" />
            </div>
            <div className="flex flex-col w-full ">
              <div className="w-full h-full px-12 py-4 outline flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-emerald-600 border-b border-slate-600">
                  {cabin?.title} (Id:{cabin?.id})
                </h1>
                <h3 className="text-xl text-emerald-500 font-semibold">
                  Guest Information
                </h3>
                <div className="flex items-center text-emerald-200 justify-between">
                  <p className="text-lg">
                    <strong>Full Name:</strong> {reservations[0].name}
                  </p>
                  <p className="text-lg">
                    <strong>Email:</strong> {reservations[0].email}
                  </p>
                  <p className="text-lg">
                    <strong>Number of Guests:</strong>{" "}
                    {reservations[0].guestNumber}
                  </p>
                </div>
              </div>
              <div className="w-full h-full px-12 py-4 outline flex flex-col gap-4">
                <h3 className="text-xl text-emerald-500 font-semibold">
                  Stay Information
                </h3>
                <div className="flex items-center text-emerald-200 justify-between">
                  <p className="text-lg">
                    <strong>Check-in:</strong>{" "}
                    {format(new Date(reservations[0].startDate), "dd MMMM yy")}
                  </p>
                  <p className="text-lg">
                    <strong>Check-out:</strong>{" "}
                    {format(new Date(reservations[0].endDate), "dd MMMM yy")}
                  </p>
                  <p className="text-lg">
                    <strong>Total: </strong> {reservations[0].totalNights}{" "}
                    &times; nights ={" "}
                    <span className="text-2xl font-bold">
                      ${reservations[0].totalPrice}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col  w-full items-center gap-4">
            <p className="text-2xl text-emerald-50">No reservations found</p>
            <p className="text-lg mb-4 text-emerald-50">
              It looks like you don't have any reservation details at the
              moment.
            </p>
            <button
              className="main-button text-xl border-2 border-slate-700 py-2 px-6 text-emerald-100 mt-6 rounded-md"
              onClick={() => navigation("/cabins")}
            >
              Explore Cabins
            </button>
          </div>
        )}
      </main>
    </section>
  );
};

export default MyReservations;
