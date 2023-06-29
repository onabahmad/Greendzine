import React, { useEffect, useState } from "react";

function FetchData({ children }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(users);

  return children(users);
}

export default FetchData;
