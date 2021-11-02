import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const PlaceOrderForm = (props) => {
  const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire({
      title: "Are you sure, you want to booking this?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post("https://frightful-chupacabra-19042.herokuapp.com/orders", data)
          .then((response) => {
            console.log(response);
            if (response.data.insertedId) {
              Swal.fire(
                "Completed",
                "Your Booking has been Completed Successfully!",
                "success"
              );
              reset();
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          value={props.packageServiceId || " "}
          {...register("packageID", { required: true })}
        />
        <input
          hidden
          value={props.packageImage || " "}
          {...register("packageImage", { required: true })}
        />
        <input
          hidden
          value={props.packageName || " "}
          {...register("packageName", { required: true })}
        />
        <input
          hidden
          value={props.price || " "}
          {...register("price", { required: true })}
        />
        <input
          hidden
          value="Pending"
          {...register("status", { required: true })}
        />
        <input
          hidden
          value={user.uid || " "}
          {...register("userId", { required: true })}
        />
        <label>Full Name</label>
        <input
          readOnly
          value={user.displayName || " "}
          className="form-control mb-3"
          placeholder="Enter your Full Name"
          {...register("FullName", { required: true })}
        />
        <label>Email Address</label>
        <input
          readOnly
          value={user.email || " "}
          className="form-control mb-3"
          placeholder="Enter your Email Address"
          {...register("email", { required: true })}
        />
        <label>Phone</label>
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Enter your Phone Number"
          {...register("phone", { required: true })}
        />
        <div className="row mb-3">
          <div className="col">
            <label>Adults</label>
            <select className="form-control" {...register("adults")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="col">
            <label>Childs</label>
            <select className="form-control" {...register("childs")}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>Ticket Types</label>
            <select className="form-control" {...register("ticketType")}>
              <option value="Economy">General</option>
              <option value="Business">Business Class</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label>Depture Date</label>
            <input
              type="date"
              className="form-control mb-3"
              {...register("departureDate", { required: true })}
            />
            {errors.DepDate && (
              <span className="text-danger">This field is required!</span>
            )}
          </div>
        </div>
        <textarea
          className="form-control mb-3 w-100"
          placeholder="Message..."
          {...register("message")}
        />

        <input
          className="btn btn-info rounded-pill mb-5 w-100"
          type="submit"
          value="Book Now"
        />
      </form>
    </div>
  );
};

export default PlaceOrderForm;
