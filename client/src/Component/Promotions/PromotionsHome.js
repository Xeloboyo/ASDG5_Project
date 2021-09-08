import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./PromotionsHome.css";

function PromotionsHome() {
  return (
    <div className="PromotionsHomeBackground">
      <Container className="PromotionsHomeTitle">
        <h1 className="title">Promotion Title (e.g. Top 5 resturants)</h1>
        <h2 className="title">Descriptions</h2>
      </Container>
      <Container className="PromotionsHomeBackground2">
        <Container className="containers">
          <div>
            <div>
              <div>
                <p>
                  <small>Category</small>
                </p>
                <td>Restaurant Name</td>

                <p>Post</p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default PromotionsHome;
