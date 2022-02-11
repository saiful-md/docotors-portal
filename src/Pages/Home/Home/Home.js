import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import AppointmentHome from "../AppointmentHome/AppointmentHome";
import Blogs from "../Blogs/Blogs";
import ContactUs from "../ContactUs/ContactUs";
import Doctors from "../Doctors/Doctors";
import ExectioalDental from "../ExceptionalDental/ExectioalDental";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Header></Header>
      <Location></Location>
      <Services></Services>
      <ExectioalDental></ExectioalDental>
      <AppointmentHome></AppointmentHome>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Doctors></Doctors>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
