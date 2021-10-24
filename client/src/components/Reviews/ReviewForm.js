import React, { Component, useCallback } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ReviewPost.css';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeSubjectLine = this.onChangeSubjectLine.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmitReview = this.onSubmitReview.bind(this);
    this.onClickRate = this.onClickRate.bind(this);

    this.state = {
      subjectline: "",
      rate: 1,
      comment: "",
      RateButtons: [],
      User_ID: "615c481a44106b1ed863d7c5"
      
    };
  }
  
  componentDidMount() {
    if (this.props.postID) {
      fetch("http://localhost:5002/review/" + this.props.postID)
        .then(response => response.json())
        .then(data => {
          var rateButtons = [];
          for (var i = 0 ; i < 5; ++i) {
            rateButtons.push(i == data.data.Post_Review_Rate - 1 ? <Button key={i} value={i + 1} onClick={this.onClickRate} disabled>{i+1}</Button> : <Button key={i} value={i + 1} onClick={this.onClickRate}>{i+1}</Button>);  
          }
          this.setState({
            subjectline: data.data.Post_Review_Title,
            rate: data.data.Post_Review_Rate,
            comment: data.data.Post_Review_Comment,
            RateButtons: rateButtons,
          })
        })
    } else {
      var rateButtons = [];
      for (var i = 0; i < 5; ++i) {
        rateButtons.push(i == this.state.rate - 1 ? <Button key={i} value={i + 1} onClick={this.onClickRate} disabled>{i+1}</Button> : <Button key={i} value={i + 1} onClick={this.onClickRate}>{i+1}</Button>);
      }
      this.setState({
        RateButtons: rateButtons,
      })
    }
  }

  onChangeSubjectLine(e) {
    this.setState({
      subjectline: e.target.value,
    })
  }

  onClickRate(e) {
    var rateButtons = [];
    for (var i = 0; i < 5; ++i) {
      rateButtons.push(i == e.target.value - 1 ? <Button key={i} value={i + 1} onClick={this.onClickRate} disabled>{i+1}</Button> : <Button key={i} value={i + 1} onClick={this.onClickRate}>{i+1}</Button>);
    }
    this.setState({
      rate: e.target.value,
      RateButtons: rateButtons,
    })
  }

  onChangeComment(e) {
    this.setState({
      comment: e.target.value,
    })
  }

  onSubmitReview = async (e) => {
    e.preventDefault();
    const newReview = {
      Post_Review_Title: this.state.subjectline,
      Post_Review_Rate: this.state.rate,
      Post_Review_Comment: this.state.comment,
      User_ID: this.state.User_ID,
      Venue_ID: this.props.restaurantID,
    }

    if (this.props.postID) {
      
    } else {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(newReview)
      };
      fetch("http://localhost:5002/review/add", requestOptions)
      .then(async response => {
        const isJson = response.headers.get("content-type")?.includes("application/json");
        const data = isJson && await response.json();

        if (!response.ok) {
          console.log(data);
        } else {
          this.setState({
            subjectline: "",
            rate: 1,
            comment: "",
            User_ID: "615c481a44106b1ed863d7c5"
          })
          var rateButtons = [];
      for (var i = 0; i < 5; ++i) {
        rateButtons.push(i == this.state.rate - 1 ? <Button key={i} value={i + 1} onClick={this.onClickRate} disabled>{i+1}</Button> : <Button key={i} value={i + 1} onClick={this.onClickRate}>{i+1}</Button>);
      }
      this.setState({
        RateButtons: rateButtons,
      })
        }
        this.props.reviewChange();
      })
      .catch(error => {
        console.error("Error ocurr when adding review");
      })
    }
  }

  render() {
    return (
      <Container className="review">
        <h4>Review:</h4>
        <Form>
          <Form.Group>
            <Form.Label className="formLabel">Subject Line</Form.Label>
            <Form.Control type="text" value={this.state.subjectline} onChange={this.onChangeSubjectLine}></Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Rate:</Form.Label>
            <div>
              {this.state.RateButtons}
            </div>
          </Form.Group>

          <Form.Group>
            <Form.Label className="formLabel">Comment</Form.Label>
            <textarea className="form-control" rows="4" value={this.state.comment} onChange={this.onChangeComment}/>
          </Form.Group>
          <Form.Group>
            <div>
              <Button onClick={this.onSubmitReview}>Submit</Button>
              {this.props.postID ? <Button>Cancel</Button> : ""}
            </div>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
