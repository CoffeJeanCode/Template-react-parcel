import React, { useState, useEffect } from "react";
import { render } from "react-dom";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <>
      <h1>Using Parcel</h1>
      <ul>
        {users.length > 0 &&
          users.map(({ id, url }) => (
            <li key={id}>
              <img src={url} />
            </li>
          ))}
      </ul>
    </>
  );
};

render(<App />, document.querySelector("#root"));
