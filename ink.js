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

const Ink= ({ product }) => {
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
                      Pot
                    </a>
                  </p>
                  <p className="small text-muted"><h1>INKK  BOTTLE</h1></p>
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
              <p className="small text-muted" >To Refill your weapon</p>
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

export default Ink;