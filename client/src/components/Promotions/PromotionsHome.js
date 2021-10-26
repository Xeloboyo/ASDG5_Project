import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import "./css/PromotionsHome.css";
import { Redirect } from "react-router";

export default class PromotionsHome extends Component {
  constructor(props) {
    super(props);

    this.onChangeAll_post = this.onChangeAll_post.bind(this);

    this.state = {
      All_post: [{}],
    };
  }

  // Set the latest promotions post
  onChangeAll_post(e) {
    this.setState({
      All_post: e.target.value,
    });
  }

  // Get latest promotions post before page loads
  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:5002/promotions/promotionshome",
        {
          method: "GET",
          headers: {},
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
                  <p>No Post</p>
                )}
              </ul>
            </div>
          </Container>
        </Container>
      </div>
    );
  }
}
