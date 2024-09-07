import { DayPicker } from "react-day-picker";

import { DateRange } from "react-day-picker";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { differenceInCalendarDays, format } from "date-fns";
import { useDispatch } from "react-redux";
import { createReservation } from "../reservations/reservationSlice";
import { LuLoader2 } from "react-icons/lu";
import toast from "react-hot-toast";

const ReservationForm = ({
  maxGuest,
  priceNight,
  cabinId,
}: {
  maxGuest: number;
  priceNight: number;
  cabinId: number;
}) => {
  const schema = z.object({
    name: z
      .string()
      .min(4, { message: "Name can not be less than 3 charcter!" }),
    email: z.string().email(),
    guests: z
      .number()
      .min(1, { message: "At least 1 guest required" })
      .max(maxGuest, { message: `Maximum cabin capacity is ${maxGuest}` }),
  });
  const [range, setRange] = useState<DateRange>();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //   } = useForm({
  //     resolver: zodResolver(schema),
  //   });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      guests: undefined,
    },
  });

  const totalNights =
    range?.from && range?.to
      ? differenceInCalendarDays(new Date(range.to), new Date(range.from))
      : 0;

  const totalPrice = totalNights * priceNight;

  const onSubmit = (data: z.infer<typeof schema>) => {
    if (!range?.from || !range?.to || totalNights <= 0 || totalPrice <= 0) {
      toast.error("Please select a valid date range.");
      return;
    }
    setIsLoading(true);
    try {
      const reservation = {
        cabinId: cabinId,
        startDate: range.from.toISOString(),
        endDate: range.to.toISOString(),
        email: data.email,
        name: data.name,
        guestNumber: data.guests,
        totalNights: totalNights,
        totalPrice: totalPrice,
      };
      dispatch(createReservation(reservation));
      reset();
      toast.success("Reservation successful!");
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during the reservation.");
    } finally {
      setIsLoading(false);
      setRange(undefined);
    }
  };

  return (
    <div className="flex w-full bg-transparent/30">
      <div className=" basis-1/2 w-full h-full  ">
        <DayPicker
          classNames={{
            today: `text-green-700 font-bold text-lg`,
            selected: `bg-emerald-600 border-emerald-100`,
            root: `p-8`,
            chevron: `hidden`,
            range_start: `mx-auto bg-cyan-500 text-slate-50 `,
            range_end: ` bg-cyan-500 text-slate-50  `,
            month_caption: `text-emerald-600 font-bold text-2xl pb-6`,
            months: `flex gap-6`,
            range_middle: `bg-emerald-800`,
            day: ` text-slate-400 w-12 h-10 items-center justify-center text-lg`,
            weekdays: `text-green-500`,
          }}
          mode="range"
          selected={range}
          onSelect={setRange}
          numberOfMonths={2} // Show two months side by side
          footer={
            <div className="mt-4 text-center text-emerald-50 bg-emerald-600 p-4 rounded-md ">
              {range?.from && range?.to && range?.from !== range?.to ? (
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    <h2 className="flex justify-start gap-2">
                      From
                      <span>- {format(new Date(range.from), " d MMMM ")}</span>
                    </h2>
                    <h2 className="flex justify-start gap-2">
                      To <span> - {format(new Date(range.to), "d MMMM")}</span>
                    </h2>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">Total</h3>
                    <div className="flex gap-2 items-center">
                      <h4 className="font-bold">
                        {differenceInCalendarDays(
                          new Date(range.to),
                          new Date(range.from)
                        )}{" "}
                        &times; Nights
                      </h4>
                      <span className="font-semibold text-lg">
                        ${" "}
                        {differenceInCalendarDays(
                          new Date(range.to),
                          new Date(range.from)
                        ) * priceNight}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-emerald-50">Please select a range.</p>
              )}
            </div>
          }
        />
      </div>
      <div className="border-l border-slate-800 basis-1/2 p-6 h-full">
        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-2 mt-8 r">
          <div className="flex flex-col gap-4">
            <div className="w-full justify-center flex flex-col gap-2 ">
              <div className="flex  h-full items-center gap-4 justify-center">
                <label htmlFor="name" className="form-label">
                  Full Name:
                </label>
                <input
                  {...register("name")}
                  placeholder="Enter your full name"
                  className={`form-input ${
                    errors.name?.message && "border-2 border-red-500"
                  }`}
                />
              </div>
              {errors.name?.message ? (
                <p className="text-red-400 flex text-sm justify-center">
                  {errors.name?.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="w-full justify-center flex flex-col gap-2 ">
              <div className="flex  h-full items-center gap-4 justify-center">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  {...register("email")}
                  className={`form-input ${
                    errors.email?.message && "border-2 border-red-500"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {errors.email?.message ? (
                <p className="text-red-400 flex justify-center text-sm">
                  {errors.email?.message}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="w-full justify-center flex flex-col gap-2">
              <div className="flex  h-full items-center gap-4 justify-center">
                <label htmlFor="guests" className="form-label">
                  Guests:
                </label>
                <input
                  type="number"
                  {...register("guests", { valueAsNumber: true })}
                  className={`form-input ${
                    errors.guests?.message && "border-2 border-red-500"
                  }`}
                  placeholder="How many guests?"
                />
              </div>
              {errors.guests?.message ? (
                <p className="text-red-400 flex justify-center text-sm">
                  {errors.guests?.message}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex justify-center h-full w-full">
            <button className="main-button text-xl border-2 border-slate-700 py-2 px-6 text-emerald-100 mt-6 rounded-md">
              {isLoading ? (
                <>
                  <LuLoader2 size={20} className="animate-spin" /> &nbsp;
                  Processing...
                </>
              ) : (
                "Book Now"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;
