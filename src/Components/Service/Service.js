import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Services.css";

const Service = (props) => {
  // const { serviceId } = useParams();
  /* const [singleService,setSingleService]=useState({});
    useEffect(() => {
        fetch(`https://frightful-chupacabra-19042.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setSingleService(data));
    }, []); */
  const {
    _id,
    img,
    country,
    packageName,
    price,
    totalReviews,
    rating,
    day,
    night,
    description,
  } = props.info;
  return (
    <Col className="px-3 py-5">
      <Card className="h-100 border-0 card-shadow card-frame">
        <div className="overflow-hidden">
          <Card.Img variant="top" className="img img-fluid" src={img} />
        </div>
        <Card.Body>
          <Card.Text className="d-flex justify-content-between">
            <div className="d-flex">
              <h3 className="text-danger">${price}</h3>/<p>per person</p>
            </div>
            <p>
              <i class="far fa-calendar-alt"></i> {day} days/{night} nights
            </p>
          </Card.Text>
          <Card.Title>
            <i class="fas fa-map-marker-alt me-2"></i>
            {packageName}
          </Card.Title>
          <Link to={`/viewDetails/${_id}`}>
            <Button className="text-white fw-bold btn-danger w-100 py-1">
              view details
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
