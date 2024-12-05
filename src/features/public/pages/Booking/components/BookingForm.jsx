import React from "react";
import { SlArrowDown } from "react-icons/sl";

const BookingForm = () => {
  return (
    <form className="px-[26px]">
      <div className=" flex flex-col gap-4">
        <div>
          <input
            className="h-[50px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-500 focus-ring-zinc-400 focus:border-zinc-400 "
            type="text"
            placeholder="Name"
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <input
            className="h-[50px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-500 focus-ring-zinc-400 focus:border-zinc-400 "
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="h-[50px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-500 focus-ring-zinc-400 focus:border-zinc-400 "
            type="text"
            placeholder="Phone"
            required
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="basis-6/12 relative">
            <select className="h-[50px] appearance-none border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-400 focus-ring-zinc-400 focus:border-zinc-400 ">
              <option defaultValue={""} disabled selected hidden>
                Select Doctor
              </option>
            </select>
            <SlArrowDown className="size-2 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-zinc-400" />
          </div>

          <div className="basis-6/12 relative">
            <select className="h-[50px] appearance-none border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-400 focus-ring-zinc-400 focus:border-zinc-400 ">
              <option defaultValue={""} disabled selected hidden>
                Select Treatment
              </option>
            </select>
            <SlArrowDown className="size-2 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-zinc-400" />
          </div>
        </div>
        <div>
          <input
            type="date"
            className="h-[50px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-400 focus-ring-zinc-400 focus:border-zinc-400"
            required
            placeholder="Select a date"
          />
        </div>
        <div>
          <textarea
            className="h-[150px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-500 focus-ring-zinc-400 focus:border-zinc-400 "
            type="text"
            placeholder="Message"
            required
          />
        </div>
        <div>
          <button className="bg-[#102946] hover:bg-[#003B5C] duration-100 font-bold rounded-sm text-zinc-50 text-center w-full h-[50px]">
            Book an Appointment
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingForm;
