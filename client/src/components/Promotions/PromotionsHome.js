import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import "./css/PromotionsHome.css";

//style={sectionStyle} fluid
export default class PromotionsHome extends Component {
  constructor(props) {
    super(props);

    this.onChangeAll_post = this.onChangeAll_post.bind(this);

    this.state = {
      All_post: [{}],
    };
  }
  onChangeAll_post(e) {
    this.setState({
      All_post: e.target.value,
    });
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:5002/promotions/promotionshome",
        {
          method: "GET",
          headers: {
            //jwtToken: localStorage.jwtToken,
          },
        }
      );
      const jsonData = await response.json();

      this.setState({ All_post: jsonData });
    } catch (err) {
      console.error(err.message);
    }
    console.log(this.state.All_post.Promotions_Object);
  }

  render() {
    const All_post = this.state.All_post;
    // console.log(`${All_post.Promotions_Title}`);
    return (
      <div className="bg-dark text-white">
        <Container className="PromotionsHomeTitle">
          <h1 className="smalltitle">{All_post.Promotions_Title}</h1>
          <h2>{All_post.Promotions_Categories}</h2>
          <h3>{All_post.Promotions_Description}</h3>
        </Container>
        <Container id="example1" fluid>
          <Container>
            <div className="containers">
              <ul class="b">
                {this.state.All_post.Promotions_Object ? (
                  Object.values(All_post.Promotions_Object).map((e) => {
                    return <li>{e}</li>;
                  })
                ) : (
                  <p>Emptyu</p>
                )}
              </ul>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}

//export default PromotionsHome;
