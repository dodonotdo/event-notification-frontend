import React from "react";
class Get_data extends React.Component {
  // Constructor
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentWillMount() {
    setInterval(() => {
      fetch("http://localhost:4000/users/get")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            sensors: json.event_details,
          });
          console.log(this.state.sensors);
        });
    }, 4000);
  }

  render() {
    const { items } = this.state;
    console.log(this.state);
 
    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>
        {/* <button>get data</button> */}
        {items.map((item) => (
          <ol key={item.user_id}>event_details:{item.event_details}</ol>
        ))}
      </div>
    );
  }
}

export default Get_data;
