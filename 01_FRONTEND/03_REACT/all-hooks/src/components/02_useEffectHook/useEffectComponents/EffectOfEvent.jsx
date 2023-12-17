import React, { useEffect, useState } from "react";

function EffectOfEvent() {
  const [users, setUsers] = useState([]);
  const [displayUsers, setDisplayUsers] = useState(false);
  function handleDisplayUsers() {
    setDisplayUsers((displayUsers) => !displayUsers);
  }
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    console.log(displayUsers);
  }, [displayUsers]);
  return (
    <div>
      <h5>Effect of Event</h5>
      <button onClick={handleDisplayUsers}>Fetch Users</button>
      {displayUsers ? (
        <div>
          {users.map((user) => {
            return <h6 key={user.id}>{user.name}</h6>;
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EffectOfEvent;
