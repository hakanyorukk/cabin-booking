import { useDispatch, useSelector } from "react-redux";
import ScrollToTop, { cabinsInfo, CabinType } from "../utils/utils";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { deleteReservation } from "../reservations/reservationSlice";
import { MdOutlineDeleteForever } from "react-icons/md";

const MyReservations = () => {
  ScrollToTop();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  //<img src={cabins?.(reservations[0].cabinId)} />
  const reservations = useSelector(
    (state: RootState) => state.reservations.reservations
  );
  const getCabin = (cabinId: number): CabinType | undefined => {
    return cabinsInfo.find((cabin) => cabin?.id === cabinId);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteReservation(id));
  };

  return (
    <section className="w-full bg-gradient-to-b from-slate-900 to-emerald-950 p-2 md:p-12">
      <main className="flex flex-col mt-10 max-w-[90rem] mx-auto min-h-screen px-2 sm:px-6 xl:px-16 py-10 gap-16">
        <h1 className="main-title">Reservation Details</h1>
        {reservations.length > 0 ? (
          reservations.map((res, i) => {
            const cabin = getCabin(res.cabinId);
            return (
              <div
                key={i}
                className="flex h-fit w-full border-2 border-slate-800/70 mb-8 bg-transparent/20 rounded-lg shadow-xl shadow-emerald-950 overflow-hidden"
              >
                <div className="h-[24rem] sm:block hidden overflow-hidden">
                  <img
                    src={cabin?.image}
                    alt={cabin?.title}
                    className="h-full cursor-pointer"
                    onClick={() => navigation(`/cabin/${cabin?.id}`)}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex w-full justify-between border-b border-slate-800 px-6 md:px-12 pt-6 pb-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-emerald-600 ">
                      {cabin?.title}{" "}
                      <span className="text-lg sm:text-xl md:text-2xl  font-medium">
                        (Id:{cabin?.id})
                      </span>
                    </h1>
                    <button
                      className=" "
                      onClick={() => handleDelete(Number(cabin?.id))}
                    >
                      <MdOutlineDeleteForever className="text-emerald-200 text-3xl" />
                    </button>
                  </div>
                  <div className="w-full h-full px-6 md:px-12 py-2 md:py-4 flex flex-col gap-2">
                    <h3 className="text-xl text-emerald-400 font-semibold">
                      Guest Information
                    </h3>
                    <div className="flex items-center text-emerald-50 justify-between">
                      <p className="text-xs sm:text-sm md:text-lg">
                        <strong>Full Name:</strong> {res.name}
                      </p>
                      <p className="text-xs sm:text-sm md:text-lg">
                        <strong>Email:</strong> {res.email}
                      </p>
                      <p className="text-xs sm:text-sm md:text-lg">
                        <strong>Number of Guests:</strong> {res.guestNumber}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-full px-6 md:px-12 py-2 md:py-4 flex flex-col gap-2 border-t border-slate-800">
                    <h3 className="text-lg md:text-xl text-emerald-400 font-semibold">
                      Stay Information
                    </h3>
                    <div className="flex items-center text-emerald-50 justify-between">
                      <p className="text-xs sm:text-sm md:text-lg">
                        <strong>Check-in:</strong>{" "}
                        {format(new Date(res.startDate), "dd MMMM yy")}
                      </p>
                      <p className="text-xs sm:text-sm md:text-lg">
                        <strong>Check-out:</strong>{" "}
                        {format(new Date(res.endDate), "dd MMMM yy")}
                      </p>
                      <p className="text-xs sm:text-sm md:text-lg">
                        <strong>Total: </strong> {res.totalNights} &times;
                        nights ={" "}
                        <span className="text-lg sm:text-xl md:text-2xl font-bold">
                          ${res.totalPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex flex-col w-full items-center gap-4">
            <p className="text-lg md:text-xl lg:text-2xl text-emerald-50">
              No reservations found
            </p>
            <p className="text-sm md:text-base lg:text-lg mb-4 text-emerald-50">
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
