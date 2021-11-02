import React from "react";
import img1 from "../../images/reviewer/reviewer-1.png";
import img2 from "../../images/reviewer/reviewer-2.png";
import img3 from "../../images/reviewer/reviewer-3.png";
import "./UserReview.css";

const UserReview = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 review-card ">
            <img src={img1} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Shona Sperring</h5>
              <h5>Traveller</h5>
              <p className="card-text">
                The Vacaday team were very fast and efficient in responding to
                any emails and also with updating me with my travel itinerary,
                etc. Loved being able yo book everything in the one place, in
                one transaction. I will most definitely be using Travel Online
                for my holiday bookings again in the future!
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 review-card ">
            <img src={img2} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title"> Ivan Menezes</h5>
              <h5>Traveller</h5>
              <p className="card-text">
                I love the way you guys are always very helpful and
                accomodating. Your service is excellent and I am more than happy
                to use your organisation for all future holidays.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 review-card ">
            <img src={img3} className="card-img-top review" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Joshua Braidwood</h5>
              <h5>Traveller</h5>
              <p className="card-text">
                We were very happy with our holiday booking and our
                accommodation. We would book with TravelOnline again and
                definitely recommend their services to others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
