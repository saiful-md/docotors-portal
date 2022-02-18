import React from "react";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navigation from "../../Pages/Shared/Navigation/Navigation";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import AvaiablbeAppointments from "../AvailableAppointments/AvaiablbeAppointments";

const Appointment = () => {
  const [date, setDate] = React.useState(new Date());

  return (
    <div>
      <Navigation></Navigation>
      <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
      <AvaiablbeAppointments date={date}></AvaiablbeAppointments>
      <Footer></Footer>
    </div>
  );
};

export default Appointment;
