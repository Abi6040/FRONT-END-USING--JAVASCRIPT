import React from "react";

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
    MDBIcon,
    MDBBtn
  } from "mdb-react-ui-kit";

const Geo= ({ product }) => {
  return (<div className="vh-100">
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="4" lg="4" xl="4" >
          <MDBCard  style={{ borderRadius: "15px" }}>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-overlay"
            >
              <MDBCardImage
              src="data:image/jpeg;base64,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"
                fluid
                className="w-100 "
                style={{
                  borderTopLeftRadius: "15px",
                  borderTopRightRadius: "15px",
                  height:"350px",
                  width:"350px"
                }}
              />
              <a href="#!">
                <div className="mask"></div>
              </a>
            </MDBRipple>
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <div>
                  <p>
                    <a href="#!" className="text-dark" style={{textDecoration:"none"}}>
                      <h1> GEOMETRY</h1>
                    </a>
                  </p>
                  <p className="small text-muted"><h1>create your own desgin</h1></p>
                </div>
                <div>
                  <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                  </div>
                  <p className="small text-muted">Rated 4.0/5</p>
                </div>
              </div>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between">
                <p>
                  <a href="#!" className="text-dark" style={{textDecoration:"none"}}>
                  ₹450
                  </a>
                </p>
               
              </div>
              <p className="small text-muted" >To establish creativity</p>
            </MDBCardBody>
            <hr class="my-0" />
            <MDBCardBody className="pb-0">
              <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                <a href="#!" className="text-dark fw-bold">
                  Cancel
                </a>
                <MDBBtn color="primary">Buy now</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
};

export default Geo;