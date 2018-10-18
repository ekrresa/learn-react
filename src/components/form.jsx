import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: ""
  };

  state = this.initialState;

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  submitForm = () => {
    const { name, job } = this.state;

    this.props.onSubmit(name, job);
    this.setState(this.initialState);
  };

  render() {
    let { name, job } = this.state;

    return (
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Enter Job title"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <input
          onClick={this.submitForm}
          className="btn btn-primary"
          type="button"
          value="SUBMIT"
        />
      </form>
    );
  }
}

export default Form;
