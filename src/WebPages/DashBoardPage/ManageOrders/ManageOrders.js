import React from "react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isUpdated, setIsUpdated] = useState(null);

  useEffect(() => {
    fetch("https://frightful-chupacabra-19042.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [isUpdated]);

  const handleUpdateOrder = (id) => {
    const url = `https://frightful-chupacabra-19042.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.matchedCount);
        if (data.matchedCount > 0) {
          alert("approved successfully!");
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
  };

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure,you want to delete");
    console.log(id);
    console.log(proceed);

    if (proceed) {
      const url = `https://frightful-chupacabra-19042.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.deletedCount);
          if (data.deletedCount > 0) {
            alert("deleted Successfully!");
            const remainingOrders = orders.filter((res) => res._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className=" ">
      <div>
        <h1 className="p-4">Manage all orders</h1>
      </div>
      <Container className="my-5">
        <div class="card mb-3 border-0">
          {orders.map((order) => (
            <div key={order.key} class=" mb-5 ">
              <div className="row g-0 border-bottom border-secondary">
                <div class="col-md-3">
                  <img
                    src={order.packageImage}
                    class="img-fluid rounded  h-100"
                    alt="packege_image"
                  />
                </div>
                <div class="col-md-7">
                  <div class="card-body py-0">
                    <div class="mb-2">
                      <p className="card-text m-0">
                        <small className="text-muted">
                          User ID : {order.userId}
                        </small>
                      </p>
                      <h5 className="card-title">
                        Package Name : {order.packageName}
                      </h5>

                      <p className="card-text m-0">
                        <span className="fw-bold">Price:</span> {order.price}
                      </p>
                      <p className="card-text m-0">
                        <span className="fw-bold">Email:</span>
                        {order.email}
                      </p>
                      <p className="card-text m-0">
                        <span className="fw-bold">Phone:</span>
                        {order.phone}
                      </p>
                      <p className="card-text m-0">
                        <span className="fw-bold">TicketType:</span>
                        {order.ticketType}
                      </p>
                      <p className="card-text  m-0">
                        <span className="fw-bold">Status:</span>
                        <span className="bg-warning rounded-pill px-2">
                          {" "}
                          {order.status}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 d-md-grid justify-content-around align-content-around mb-2">
                  <button
                    onClick={() => handleUpdateOrder(order._id)}
                    className="btn btn-primary"
                  >
                    <i class="far fa-check-circle"></i> Approve
                  </button>
                  <button
                    onClick={() => handleDeleteOrder(order._id)}
                    className="btn btn-danger"
                  >
                    <i class="fas fa-backspace"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ManageOrders;
