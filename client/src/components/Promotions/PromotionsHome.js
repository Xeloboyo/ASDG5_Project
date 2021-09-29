import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./css/PromotionsHome.css";

//style={sectionStyle} fluid
function PromotionsHome() {
  return (
    <div className="bg-dark text-white">
      <Container className="PromotionsHomeTitle">
        <h1 className="smalltitle">Promotion Title (e.g. Top 5 resturants)</h1>
        <h3>Descriptions</h3>
        <h3>These resurants are the top blahhhhh</h3>
      </Container>
      <Container id="example1" fluid>
        <Container>
          <div className="containers">
            <p>
              <small>Category</small>
            </p>
            <td>Restaurant Name</td>

            <p>Post</p>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default PromotionsHome;
