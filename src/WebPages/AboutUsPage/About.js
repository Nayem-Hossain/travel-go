import React from "react";
import { Accordion } from "react-bootstrap";


const About = () => {
  return (
    <div className="container-fluid mb-5 radious">
      <div className="py-5 bg container">
        <div className="row d-flex align-items-center d-flex justify-content-center text-color px-5">
          <div className="col-lg-6 align-items-center justify-content-center">
            {/* <img className="img-fluid img2" src="" width="350" alt="" /> */}
            <h1>
              <span className="text-dark">General</span> FAQs
            </h1>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What causes tooth decay?</Accordion.Header>
                <Accordion.Body>
                  Decay is caused by bacteria that collect on teeth and feed on
                  the carbohydrates in our diet. The bacteria produce acid that
                  wears away at the enamel on our teeth. If decay is left
                  untreated, it can cause pain, infection and even tooth loss.
                  Protect your teeth against decay by brushing at least twice a
                  day, flossing daily, visiting your dentist regularly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  What is dry mouth and what can I do about it?
                </Accordion.Header>
                <Accordion.Body>
                  Decay is caused by bacteria that collect on teeth and feed on
                  the carbohydrates in our diet. The bacteria produce acid that
                  wears away at the enamel on our teeth. If decay is left
                  untreated, it can cause pain, infection and even tooth loss.
                  Protect your teeth against decay by brushing at least twice a
                  day, flossing daily, visiting your dentist regularly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How often should I change my toothbrush?
                </Accordion.Header>
                <Accordion.Body>
                  Decay is caused by bacteria that collect on teeth and feed on
                  the carbohydrates in our diet. The bacteria produce acid that
                  wears away at the enamel on our teeth. If decay is left
                  untreated, it can cause pain, infection and even tooth loss.
                  Protect your teeth against decay by brushing at least twice a
                  day, flossing daily, visiting your dentist regularly.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  How often should I see a dentist?
                </Accordion.Header>
                <Accordion.Body>
                  Decay is caused by bacteria that collect on teeth and feed on
                  the carbohydrates in our diet. The bacteria produce acid that
                  wears away at the enamel on our teeth. If decay is left
                  untreated, it can cause pain, infection and even tooth loss.
                  Protect your teeth against decay by brushing at least twice a
                  day, flossing daily, visiting your dentist regularly.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-6 ps-5">
            <h1>ABOUT US</h1>
            <p className="py-4 text-secondary fw-light">
              It is indeed a great pleasure for me to introduce our brand new
              state of the art technology hospital in the region of Chittagong.
              Nowadays, if anyone needs good treatment, they need to look
              forward to Dhaka or Abroad. Because good and well facilitated
              hospitals are not available in the port city of Chittagong. <br />
              The pursuit of excellence in all these areas is the result of our
              willingness, commitment, dedication and strong moral determination
              to provide the highest quality of care.
            </p>
            <h3>Working Hours</h3>
            <table className="table table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">DAY</th>
                  <th scope="col">OPEN</th>
                  <th scope="col">CLOSE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mon-Wed</td>
                  <td>10:00am</td>
                  <td>09:00pm</td>
                </tr>
                <tr>
                  <td>Thu-Fri</td>
                  <td>09:00am</td>
                  <td>10:30pm</td>
                </tr>
                <tr>
                  <td>Sat-Sun</td>
                  <td>09:30am</td>
                  <td>08:30pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="py-5 bg container mt-5">
          <div className="row d-flex align-items-center d-flex justify-content-center text-color px-5">
            <div className="col-lg-6 ps-5">
              <h1>FACILITIES</h1>
              <p className="py-4 text-secondary fw-light">
                Patients have effective and timely access to care, including
                appointments, tests, treatment and move out of the hospital.
                Services are tailored to meet the needs of individual patients,
                including vulnerable patients. The world class department of
                laboratory service at Parkview Hospitals offers 24 hours a day
                and 7 days a week services in all branches of Laboratory
                Medicine. At the beginning 100 inpatient Bed.
              </p>
            </div>
            <div className="col-lg-6 align-items-center justify-content-center">
              <img className="img-fluid img2" src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
