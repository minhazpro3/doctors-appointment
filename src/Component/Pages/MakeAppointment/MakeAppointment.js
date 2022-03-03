import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';

const MakeAppointment = () => {
    const {
        register,
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => console.log(data);
    return (
        <div>
            <div className="container mx-auto">
            <div className="flex  justify-center shadow-2xl py-12 ">
                  <form   onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="mb-4 text-center text-3xl font-bold text-blue-900 text-shadow-lg">
                     Make An Appointment
                    </h3>
                    <input
                      className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                      type="text"
                      placeholder="Your Name"
                      {...register("name")}
                      required
                    />
                    <br />
                    <input
                      className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                      type="email"
                      placeholder="Email"
                      {...register("Your Email")}
                      required
                    />
                    <br />
                    <input
                      className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3"
                      type="date"
                      {...register("date")}
                      required
                    />
                    <br />

                    <div className="inline-block shadow  relative   appearance-none border rounded w-60 md:w-80 lg:w-96  py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3">
                      <select
                        className="block appearance-none w-full bg-white   pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline"
                        {...register("doctor")}
                        required
                      >
                        <option selected disabled>
                          {" "}
                          --Select Doctor--
                        </option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                      </select>
                      <div className="pointer-events-none  absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <br />

                    <textarea
                      className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-3 h-40"
                      type="date"
                      placeholder="Your Message"
                      {...register("date")}
                      required
                    />
                    <br />

                    <input
                      className="shadow appearance-none border rounded w-60 md:w-80 lg:w-96  py-3   text-blue-500 hover:text-white bg-white hover:bg-slate-900 hover:cursor-pointer leading-tight focus:outline-none focus:shadow-outline mt-3"
                      type="submit"
                      value="Book an Appointment"
                    />
                  </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default MakeAppointment;