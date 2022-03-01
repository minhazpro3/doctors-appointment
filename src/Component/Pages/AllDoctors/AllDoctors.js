import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./AllDoctors.css";

const AllDoctors = () => {
  return (
    <div>
      <div className="container mx-auto my-24 ">
      <h4 className="text-center text-3xl">Our Doctors</h4>
          
        <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <div className="w-80 h-[29rem] rounded overflow-x-hidden shadow-lg zoomDiv">
              <img
                className="w-full h-72 object-cover zoom"
                src="https://i.ibb.co/qyC82cW/confident-female-doctor-office-desk-sitting-smiling-camera-hand-chin-health-care-prevention-concept.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-4 py-4">
                <div className="font-bold text-xl  text-blue-900">
                  Dr. Marvin Robbins
                </div>
                <div className="font-bold text-base mb-2 opacity-50">
                  Cardiology{" "}
                </div>
                <p className="text-gray-700 text-base my-6 opacity-50">
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <NavLink
                  to="/"
                  className="text-blue-900 inline-flex items-center gap-3"
                >
                  Doctor Profile <BsArrowRight />{" "}
                </NavLink>
              </div>
            </div>
          </div>
          
         
            
        
        </div>
         
        
      </div>
      <Footer/>

    </div>
  );
};

export default AllDoctors;
