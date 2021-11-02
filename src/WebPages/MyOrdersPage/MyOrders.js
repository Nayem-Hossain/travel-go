import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import { Container } from "react-bootstrap";

const MyOrders = () => {
  const { user } = UseAuth();
  const [userOrders, setUserOders] = useState([]);

  useEffect(() => {
    fetch(`https://frightful-chupacabra-19042.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setUserOders(data));
  }, []);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete");
    if (proceed) {
      const url = `https://frightful-chupacabra-19042.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted Successfully!");
            const remainingOrders = userOrders.filter(
              (userOrder) => userOrder._id !== id
            );
            setUserOders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <Container className="my-3">
        <div>
          <h1 className="py-4">You Have Booked:</h1>
        </div>
        <div class="card mb-3 border-0">
          {userOrders
            .filter((order) => order.email.includes(user.email))
            .map((myOrder) => (
              <div key={myOrder.key} class=" mb-5 ">
                <div className="row g-0 border-bottom border-secondary">
                  <div class="col-md-3">
                    <img
                      src={myOrder.packageImage}
                      class="img-fluid rounded  h-100"
                      alt="packege_image"
                    />
                  </div>
                  <div class="col-md-7">
                    <div class="card-body py-0">
                      <div class="mb-2">
                        <p className="card-text m-0">
                          <small className="text-muted">
                            User ID : {myOrder.userId}
                          </small>
                        </p>
                        <h5 className="card-title">
                          Package Name : {myOrder.packageName}
                        </h5>

                        <p className="card-text m-0">
                          <span className="fw-bold">Price:</span>{" "}
                          {myOrder.price}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Email:</span>
                          {myOrder.email}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Phone:</span>
                          {myOrder.phone}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">TicketType:</span>
                          {myOrder.ticketType}
                        </p>
                        <p className="card-text m-0">
                          <span className="fw-bold">Status:</span>
                          <span className="bg-warning rounded-pill px-2">
                            {" "}
                            {myOrder.status}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 d-md-grid justify-content-around align-content-around mb-2">
                    <button
                      onClick={() => handleDeleteOrder(myOrder._id)}
                      className="btn btn-danger"
                    >
                      <i class="fas fa-backspace"></i> Cancel
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

export default MyOrders;
