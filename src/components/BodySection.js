import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ServicePage from "./servicepage/ServicePage";
import ProductPage from "./productpage/ProductPage";
// import GalleryPage from "./gallerypage/GalleryPage";
import EventPage from "./eventpage/EventPage";
import ContactPage from "./contactpage/ContactPage";

const BodySection = () => {
  return (
    <>
      <div className="bodysection">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/services" exact element={<ServicePage />}></Route>
          <Route path="/products" exact element={<ProductPage />}></Route>
          {/* <Route path="/gallery" exact element={<GalleryPage />}></Route> */}
          <Route path="/events" exact element={<EventPage />}></Route>
          <Route path="/contact" exact element={<ContactPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default BodySection;
