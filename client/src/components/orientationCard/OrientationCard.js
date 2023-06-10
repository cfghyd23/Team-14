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
  return (
    <div className={styles.carddiv}>
      {" "}
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>
            <h2>Orientation 1</h2>
          </MDBCardTitle>
          <MDBCardText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa
              esse labore earum porro iure?
            </p>
            <p>Date and time-</p>
            <p>Add to calendar</p>
          </MDBCardText>
          <MDBBtn href="#">Join</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
export default OrientationCard;
