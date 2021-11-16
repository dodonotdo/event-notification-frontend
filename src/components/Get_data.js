import React from "react";
import "./GetData.css";
class GetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataIsLoaded: false,
    };
  }
  componentWillMount() {
    setInterval(() => {
      fetch("http://localhost:4000/users/get")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataIsLoaded: true,
          });
        });
    }, 1000);
  }
  render() {
    const { DataIsLoaded, items } = this.state;
    if (!DataIsLoaded)
      return (
        <div>
          <h2> Please wait some time.... </h2>
        </div>
      );
    return (
      <div className="event_notification">
        {/* <h3> Fetch the data from an api in json format:- </h3> */}
        <table>
        <tbody>
          <tr>
            <th th colspan="4">Event Details</th>
          </tr>
          {items.map((item) => {
            return (
              <tr key={item.user_id}>
                <td>{item.user_id}</td>
                <td>{JSON.stringify(item.event_details)}</td>
                <td>{item.createdAt}</td>
                <td>{item.updatedAt}</td>
              </tr>
            );
          })}
        </tbody>
        </table>
        {/* json format datas */}
        {/* {items.map((item) => (
          <div key={item.user_id}>
            <pre>{JSON.stringify(item, null, 2)}</pre>
          </div>
        ))} */}
      </div>
    );
  }
}

export default GetData;
