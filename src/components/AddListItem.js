import * as React from "react";

class AddListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event.target.value);
    //this.setState({ value: event.target.value });
  }

  render() {
    const newListItem = this.props.newListItem;
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input
          name="title"
          type="text"
          value={newListItem}
          onChange={this.handleChange}
          maxLength="30"
          required
        />
        <button type="submit">Add Item</button>
      </form>
    );
  }
}

export default AddListItem;
