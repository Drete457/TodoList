import React from "react";

export default class TodoFom extends React.Component {
  
  state = {
    text: "",
    id: 1,
  };

  pressEvent = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: this.state.id,
      text: this.state.text,
      complete: false,
    });
    this.setState({ 
      text: "",
      id: this.state.id + 1,
    });
  };

  render() {
    return (
      <form>
        <input
          name="text"
          placeholder="What do you want to do?"
          value={this.state.text}
          onChange={this.pressEvent}
        />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
