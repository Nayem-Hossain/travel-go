import React from "react";
import "./AddPlaces.css";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const AddPlaces = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://frightful-chupacabra-19042.herokuapp.com/services", data)
      .then((response) => {
        console.log(response);
        if (response.data.insertedId) {
          Swal.fire(
            "Completed",
            "Your Have Added a Tourism Package Successfully!",
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
  };
  return (
    <div className="container">
      <div>
        <h1 className="pt-4 pb-2">Add a new package</h1>
      </div>
      <div className="card border-0 p-5 border-shadow mb-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Enter the Package Name</label>
          <input
            className="form-control mb-3"
            {...register("packageName", {
              required: true,
              maxLength: 100,
            })}
            placeholder="package name"
          />
          {errors.packageName?.type === "required" &&
            "package name is required"}

          <label>Country</label>
          <input
            className="form-control mb-3"
            {...register("country", { required: true, maxLength: 20 })}
            placeholder="country"
          />
          {errors.country?.type === "required" && "country is required"}

          <label>Image URL</label>
          <input
            className="form-control mb-3"
            {...register("img", { required: true })}
            placeholder="image url..."
          />
          {errors.img?.type === "required" && "image url... is required"}

          <label>Price</label>
          <input
            className="form-control mb-3"
            placeholder="price"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && "price is required"}

          <div className="row mb-3">
            <div className="col">
              <label>Days</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Days"
                {...register("day", { required: true })}
              />
              {errors.day?.type === "required" && "day is required"}
            </div>

            <div className="col">
              <label>Nights</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Nights "
                {...register("night", { required: true })}
              />
              {errors.night?.type === "required" && "night is required"}
            </div>
          </div>

          <label>Description</label>
          <textarea
            className="form-control w-100 mb-5"
            placeholder="Package Description..."
            {...register("description", { required: true })}
          />
          {errors.description?.type === "required" &&
            "package description is required"}

          <input
            className="btn btn-info rounded-pill mb-2 w-50 fw-bold"
            type="submit"
            value="Add Now"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPlaces;
