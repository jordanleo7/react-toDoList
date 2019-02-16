import * as React from "react";
import AddListItem from "./AddListItem";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      list: ["1", "2", "3"],
      newListItem: "a"
    };
  }

  handleChange(newListItem) {
    this.setState({ newListItem });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      list: [...prevState.list, this.state.newListItem]
    }));
  }

  render() {
    const newListItem = this.state.newListItem;
    const theList = this.state.list.map((item, index) => {
      return <li key={"item" + index}>{item}</li>;
    });

    return (
      <div>
        <h1>The List</h1>
        <ul>{theList}</ul>
        <AddListItem
          newListItem={newListItem}
          onHandleChange={this.handleChange}
          handleSubmit={this.handleSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default ToDoList;
