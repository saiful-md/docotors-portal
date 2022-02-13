import React from "react";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navigation from "../../Pages/Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";

const Appointment = () => {
  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader></AppointmentHeader>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
