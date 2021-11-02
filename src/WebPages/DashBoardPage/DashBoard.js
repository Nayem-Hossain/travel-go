import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ManageOrders from "./ManageOrders/ManageOrders";
import "./DashBoard.css";
import AddPlaces from "./AddPlaces/AddPlaces";

const DashBoard = () => {
  return (
    <div className="">
      <BrowserRouter>
        <div className="row m-0">
          <div className="col-lg-3 backgrond border-end border-secondary border-5">
            <nav className="d-lg-grid">
              <Link to="/dashboard/manageOrders">
                <button className="text-white fw-bold btn my-4 link active w-100">
                  Manage Orders
                </button>
              </Link>

              <Link to="/dashboard/addNewPlaces">
                <button className="text-white fw-bold btn my-4 link w-100">
                  Add New Places
                </button>
              </Link>
            </nav>
          </div>
          <div className="col-lg-9 p-0">
            <Switch>
              <Route exact path="/dashboard">
                <ManageOrders></ManageOrders>
              </Route>

              <Route path="/dashboard/manageOrders">
                <ManageOrders></ManageOrders>
              </Route>

              <Route path="/dashboard/addNewPlaces">
                <AddPlaces></AddPlaces>
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default DashBoard;
