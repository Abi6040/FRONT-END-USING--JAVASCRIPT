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

const Paper= ({ product }) => {
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
              src="https://helloaugust.in/wp-content/uploads/2020/04/dark-colour-chart-paper-full-size.jpg"
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
                  <p className="small text-muted"><h1>NOTE BOOK</h1></p>
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
              <p className="small text-muted" >Each piece is a celebration of craftsmanship, bringing a timeless and individualistic flair to your decor. Explore our collection and redefine your living spaces with the beauty of our distinctive pottery.</p>
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

export default Paper;