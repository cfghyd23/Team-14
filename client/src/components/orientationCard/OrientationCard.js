import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import styles from "./orientation.module.css";

const OrientationCard = () => {
  const orientationPrograms = [
    {
      programName: "Youth Empowerment Summit",
      startDate: "2023-07-15",
      endDate: "2023-07-20",
      location: "New York City",
      description:
        "A week-long summit to empower and inspire youth in various fields.",
      meetingTimings: [
        { date: "2023-07-15", time: "09:00 AM" },
        { date: "2023-07-16", time: "10:00 AM" },
        { date: "2023-07-17", time: "11:30 AM" },
        // Add more meeting timings...
      ],
    },
    {
      programName: "Women's Leadership Conference",
      startDate: "2023-08-05",
      endDate: "2023-08-07",
      location: "San Francisco",
      description:
        "A conference focused on empowering women and promoting gender equality.",
      meetingTimings: [
        { date: "2023-08-05", time: "09:30 AM" },
        { date: "2023-08-06", time: "10:30 AM" },
        { date: "2023-08-07", time: "11:00 AM" },
        // Add more meeting timings...
      ],
    },
    {
      programName: "Environmental Conservation Workshop",
      startDate: "2023-09-10",
      endDate: "2023-09-12",
      location: "Seattle",
      description:
        "A workshop on environmental conservation and sustainable practices.",
      meetingTimings: [
        { date: "2023-09-10", time: "10:00 AM" },
        { date: "2023-09-11", time: "11:00 AM" },
        { date: "2023-09-12", time: "09:30 AM" },
        // Add more meeting timings...
      ],
    },
    // Add more programs...
  ];

  return (
    <div>
      {" "}
      {orientationPrograms.map((ele) => (
        <div className={styles.carddiv}>
          <MDBCard className="text-center d-block mx-auto">
            <MDBCardBody>
              <MDBCardTitle>
                <h2> {ele.programName}</h2>
              </MDBCardTitle>
              <MDBCardText>
                <p>{ele.description}</p>
                <p>{ele.meetingTimings.date}</p>
                <p>Add to calendar</p>
              </MDBCardText>
              <MDBBtn href="#">Join</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <br />
        </div>
      ))}
    </div>
  );
};
export default OrientationCard;
