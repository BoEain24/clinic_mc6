import React from "react";
import BookingForm from "./BookingForm";

const BookingFormSection = () => {
  return (
    <section className="pb-11">
      <div className="px-12 py-8 mx-auto max-w-[650px]">
        <h3 className="font-custom text-3xl text-center text-[#003B5C] mb-2">
          Make an Appointment
        </h3>
        <p className="text-zinc-900 text-center mb-7 ">
          Your Time to Shine: Secure Your Session !
        </p>
        <BookingForm />
      </div>
    </section>
  );
};

export default BookingFormSection;
