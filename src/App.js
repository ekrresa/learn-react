import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/table";
import Form from "./components/form";

class App extends Component {
  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      },
      {
        name: "Chukky",
        job: "Director"
      }
    ]
  };

  handleDelete = index => {
    const newCharacters = this.state.characters.filter((c, i) => {
      return i !== index;
    });

    this.setState({ characters: newCharacters });
  };

  handleSubmit = (name, job) => {
    const { characters } = this.state;
    characters.push({ name: name, job: job });
    this.setState({ characters: characters });
  };

  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          onDelete={this.handleDelete}
        />
        <Form onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
