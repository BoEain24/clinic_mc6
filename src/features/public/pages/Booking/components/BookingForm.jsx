import React from "react";

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
        <div>
          <input
            className="h-[50px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-500 focus-ring-zinc-400 focus:border-zinc-400 "
            type="text"
            placeholder="Treatment"
            required
          />
        </div>
        <div>
          <input
            className="h-[50px] border w-full px-3 py-2 rounded-sm text-sm border-zinc-200 bg-zinc-100 text-zinc-500 focus-ring-zinc-400 focus:border-zinc-400 "
            type="date"
            placeholder="Select Date"
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