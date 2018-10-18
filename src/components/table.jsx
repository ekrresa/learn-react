import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  let characterList = props.characters.map((character, index) => {
    return (
      <tr key={index}>
        <td>{character.name}</td>
        <td>{character.job}</td>
        <td onClick={() => props.onDelete(index)} className="btn btn-danger">
          DELETE
        </td>
      </tr>
    );
  });

  return <tbody>{characterList}</tbody>;
};

class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody
          characters={this.props.characterData}
          onDelete={this.props.onDelete}
        />
      </table>
    );
  }
}

export default Table;
