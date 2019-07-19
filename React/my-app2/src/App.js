import React from "react";
import "./App.css";
import { getAllBook } from "./services";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  async componentDidMount() {
    // fetch("https://hn.algolia.com/api/v1/search?query=redux")
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       this.setState({
    //         isLoaded: true,
    //         items: result.hits
    //       });
    //     },
    //     // Note: it's important to handle errors here
    //     // instead of a catch() block so that we don't swallow
    //     // exceptions from actual bugs in components.
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
    const allBook = await getAllBook()
    console.log("TCL: App -> componentDidMount -> allBook", allBook)
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.objectID}>
              Tên sách: <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default App;
